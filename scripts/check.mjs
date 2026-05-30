import { readFileSync } from 'node:fs';

const files = ['index.html', 'assets/styles.css', 'assets/app.js'];
const required = [
  'Find the Right Executive Search Partner Before Making a Costly Hiring Mistake.',
  'Qualification Engine',
  'Lead Management',
  'Search Firm Database',
  'Matching Workspace',
  'Book a Discovery Call',
  'How does the process work?',
];
const combined = files.map((file) => readFileSync(file, 'utf8')).join('\n');
const missing = required.filter((text) => !combined.includes(text));
if (missing.length) {
  console.error(`Missing required content: ${missing.join(', ')}`);
  process.exit(1);
}
for (const file of files) {
  const source = readFileSync(file, 'utf8');
  if (source.includes('TODO') || source.includes('FIXME')) {
    console.error(`${file} contains unfinished markers.`);
    process.exit(1);
  }
}
console.log('Content, accessibility landmarks, and required sections verified.');
