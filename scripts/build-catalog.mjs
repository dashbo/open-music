#!/usr/bin/env node
// Builds scores/*.mxl and catalog.json from the OpenScore Lieder corpus (CC0).
//
//   node scripts/build-catalog.mjs --ids lc6681689,lc5043594   # specific scores
//   node scripts/build-catalog.mjs --limit 30                  # first N (stable order)
//   node scripts/build-catalog.mjs --all [--force]
//
// Needs `mscore` (MuseScore 4 CLI) and `unzip` on PATH. Titles come from the
// corpus folder names (the title inside a file is often the collection's name);
// composer/lyricist/parts/source come from the converted MusicXML itself.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CACHE = join(ROOT, ".cache", "mscx");
const REPO = "OpenScore/Lieder";
const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
const clean = (s) => decode(s).replace(/\s+/g, " ").trim();

function titleFromFolder(name) {
  return name.replace(/^\d+[_-]+/, "").replace(/_/g, " ").trim();
}
// "Holmès, Augusta" / "Holmès,_Augusta_Mary_Anne" -> "Augusta Mary Anne Holmès"
function personName(name) {
  const [last, first] = name.replace(/_/g, " ").split(",").map((s) => s.trim());
  return first ? `${first} ${last}` : last;
}

async function listCorpus() {
  const res = await fetch(`https://api.github.com/repos/${REPO}/git/trees/main?recursive=1`, { headers: { "User-Agent": "open-music-catalog" } });
  if (!res.ok) throw new Error(`GitHub tree request failed: ${res.status}`);
  const tree = await res.json();
  if (tree.truncated) throw new Error("corpus listing truncated");
  return tree.tree
    .filter((x) => x.type === "blob" && x.path.endsWith(".mscx"))
    .map((x) => {
      const parts = x.path.split("/"); // scores/<composer>/<set>/<song>/lcID.mscx
      const id = parts.at(-1).replace(/\.mscx$/, "");
      return { id, path: x.path, composerDir: parts[1], setDir: parts[2], songDir: parts[3] };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}

async function fetchMscx(entry) {
  const file = join(CACHE, `${entry.id}.mscx`);
  if (existsSync(file)) return file;
  const url = `https://raw.githubusercontent.com/${REPO}/main/${entry.path.split("/").map(encodeURIComponent).join("/")}`;
  const res = await fetch(url, { headers: { "User-Agent": "open-music-catalog" } });
  if (!res.ok) throw new Error(`download ${entry.id}: ${res.status}`);
  writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

function convert(mscx, mxl) {
  execFileSync("mscore", ["-o", mxl, mscx], { stdio: "ignore", timeout: 300_000, env: { ...process.env, QT_QPA_PLATFORM: "offscreen" } });
}

function readXml(mxl) {
  const container = execFileSync("unzip", ["-p", mxl, "META-INF/container.xml"]).toString();
  const root = container.match(/full-path="([^"]+)"/)?.[1] ?? "score.xml";
  return execFileSync("unzip", ["-p", mxl, root], { maxBuffer: 64 * 1024 * 1024 }).toString();
}

const one = (xml, re) => { const m = xml.match(re); return m ? clean(m[1]) : undefined; };

function describe(xml) {
  const parts = [...xml.matchAll(/<part-name[^>]*>([^<]*)</g)].map((m) => clean(m[1]));
  const vocal = parts.filter((p) => /soprano|mezzo|alto|contralto|tenor|baritone|bass|voice|stimme|chant|canto|dessus|tiple|choir|chorus/i.test(p) && !/piano|klavier/i.test(p));
  const voicing = vocal.length >= 3 ? `Choral (${vocal.length} voices)` : vocal.length === 2 ? "Vocal duet" : "Solo voice";
  const arranger = one(xml, /<creator type="arranger">([^<]*)</) ?? "";
  const imslp = arranger.match(/https?:\/\/imslp\.org\/\S+/)?.[0]?.replace(/[).,;]+$/, "");
  return {
    composer: one(xml, /<creator type="composer">([^<]*)</),
    lyricist: one(xml, /<creator type="lyricist">([^<]*)</),
    movementTitle: one(xml, /<movement-title>([^<]*)</),
    workTitle: one(xml, /<work-title>([^<]*)</),
    parts, voicing, voices: vocal.length, transcription: arranger || undefined, imslp,
  };
}

async function main() {
  mkdirSync(CACHE, { recursive: true });
  mkdirSync(join(ROOT, "scores"), { recursive: true });
  const corpus = await listCorpus();
  let picked;
  if (opt("ids")) {
    const want = new Set(opt("ids").split(","));
    picked = corpus.filter((e) => want.has(e.id));
    const missing = [...want].filter((id) => !picked.some((e) => e.id === id));
    if (missing.length) throw new Error(`not in corpus: ${missing.join(", ")}`);
  } else if (opt("limit")) picked = corpus.slice(0, Number(opt("limit")));
  else if (flag("all")) picked = corpus;
  else { console.error("pass --ids a,b | --limit N | --all"); process.exit(2); }

  const catPath = join(ROOT, "catalog.json");
  const catalog = JSON.parse(readFileSync(catPath, "utf8"));
  const byId = new Map(catalog.scores.map((s) => [s.id, s]));
  let done = 0, failed = 0;

  for (const e of picked) {
    const rel = `scores/${e.id}.mxl`;
    const mxl = join(ROOT, rel);
    try {
      if (!existsSync(mxl) || flag("force")) convert(await fetchMscx(e), mxl);
      const d = describe(readXml(mxl));
      byId.set(e.id, {
        id: e.id,
        title: titleFromFolder(e.songDir) || d.movementTitle || d.workTitle || e.id,
        composer: personName(d.composer || e.composerDir),
        ...(d.lyricist ? { lyricist: d.lyricist } : {}),
        collection: d.workTitle || titleFromFolder(e.setDir),
        voicing: d.voicing,
        voices: d.voices,
        parts: d.parts,
        file: rel,
        license: "CC0-1.0",
        source: d.imslp ?? `https://github.com/${REPO}/blob/main/${e.path}`,
        corpus: `https://github.com/${REPO}/blob/main/${e.path}`,
        ...(d.transcription ? { credit: d.transcription } : {}),
      });
      done++;
    } catch (err) {
      failed++;
      console.error(`${e.id}: ${err.message}`);
    }
  }

  catalog.scores = [...byId.values()].sort((a, b) => a.composer.localeCompare(b.composer) || a.title.localeCompare(b.title));
  writeFileSync(catPath, JSON.stringify(catalog, null, 2) + "\n");
  console.log(`${done} built, ${failed} failed, ${catalog.scores.length} in catalog`);
  process.exit(failed ? 1 : 0);
}
main().catch((e) => { console.error(e.message); process.exit(1); });
