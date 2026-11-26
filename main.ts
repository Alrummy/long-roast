const fs = require('fs');
const path = require('path');

// The joke: lawmakers treat AI/crypto moderation as a deadline to punt on — all talk, meeting adjourned.
const TEXT = 'Lawmakers promise to regulate AI, crypto and the internet by Friday, then adjourn early because the agenda is still a Word file nobody can convert to PDF.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), TEXT + '\n');
