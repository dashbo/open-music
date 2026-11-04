import { readFileSync, existsSync } from "node:fs";

const cat = JSON.parse(readFileSync(new URL("../catalog.json", import.meta.url), "utf8"));
const required = ["id", "title", "composer", "voicing", "file", "license", "source"];
const ids = new Set();
let bad = 0;
for (const s of cat.scores) {
  for (const k of required) if (!s[k]) { console.error(`${s.id ?? "?"}: missing ${k}`); bad++; }
  if (ids.has(s.id)) { console.error(`${s.id}: duplicate id`); bad++; }
  ids.add(s.id);
  if (s.file && !existsSync(new URL(`../${s.file}`, import.meta.url))) { console.error(`${s.id}: file not found: ${s.file}`); bad++; }
}
console.log(`${cat.scores.length} scores, ${bad} problems`);
process.exit(bad ? 1 : 0);
