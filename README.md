# Open Music

A catalog of public-domain and openly licensed scores (MusicXML `.mxl`) that
[Rehearsal Room](https://git.heyludo.casa/dashbo/rehearsal-room) can import in
one click.

- `catalog.json` — the index the app reads (title, composer, voicing, file, source, license)
- `scores/` — the score files, one `.mxl` each

## Adding a score

1. Only add works that are public domain or under a licence that allows
   redistribution (CC0, CC BY). Record the licence and where it came from.
2. Put the `.mxl` in `scores/` and add an entry to `catalog.json`.
3. Run `node scripts/check-catalog.mjs` — it checks every entry has a file and required fields.

## Sources and licences

See [ATTRIBUTION.md](ATTRIBUTION.md). To remove a score, delete its file and entry.
