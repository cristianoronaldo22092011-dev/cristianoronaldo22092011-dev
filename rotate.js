// rotate.js
const fs = require('fs');
const path = require('path');

const README = path.join(__dirname, 'README.md');
const content = fs.readFileSync(README, 'utf8');

const startMarker = '<!--ROTATE-START-->';
const endMarker = '<!--ROTATE-END-->';

const lines = [
  '🕒 Tashkent Time (GMT+5)',
  'Asadbek, 15 — studying at Algoritm and Oxford courses',
  'I study web development and English',
  'Future goal: become a developer in the USA',
  'Always learning — never stop!'
];

// Extract current block
const start = content.indexOf(startMarker);
const end = content.indexOf(endMarker, start);

if (start === -1 || end === -1) {
  console.error('Markers not found in README.md');
  process.exit(1);
}

const between = content.slice(start + startMarker.length, end).trim();

// Find index of current line in array (if present)
let currentIndex = lines.indexOf(between);
if (currentIndex === -1) currentIndex = 0;

// Next index (rotate)
const nextIndex = (currentIndex + 1) % lines.length;
const nextText = lines[nextIndex];

// Replace block
const newContent = content.slice(0, start + startMarker.length) + '\n' +
  nextText + '\n' +
  content.slice(end);

fs.writeFileSync(README, newContent, 'utf8');
console.log('Updated README with:', nextText);
