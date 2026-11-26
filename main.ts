
const fs = require('fs');
const path = require('path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// The joke: the people with the power all along frame the bridge as a bureaucratic
// shell game, so the entry narrates the grift as the punchline.
const text = 'Lawmakers are the only people who can spend forty years promising to fix the bridge, hold a ribbon-cutting for the study about the bridge, and then campaign on how the bridge was never their department. They govern by press release, legislate by hashtag, and retire to the very boards they were supposed to regulate.';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');
