const fs = require('fs');
const path = require('path');

const README = path.join(__dirname, 'README.md');
const content = fs.readFileSync(README, 'utf8');

const startMarker = '<!--ROTATE-START-->';
const endMarker = '<!--ROTATE-END-->';

const lines = [
  "Hi there 👋 I'm Asadbek",
  "My name is Asadbek, I'm 15 years old.",
  "I'm currently studying Algorithms at Oxford (online course/program) and learning web development and English.",
  "Future goal: I want to become a software developer in the United States.",
  "🔭 Currently learning: web development, algorithms",
  "🌱 Studying: English language, coding practices",
  "🎯 Goal: Build a career as a developer in the USA",
  "Thanks for visiting my profile — let's connect!"
];

const start = content.indexOf(startMarker);
const end = content.indexOf(endMarker, start);

if (start === -1 || end === -1) {
  console.error('Markers not found in README.md');
  process.exit(1);
}

const between = content.slice(start + startMarker.length, end).trim();

let currentIndex = lines.indexOf(between);
if (currentIndex === -1) currentIndex = 0;

const nextIndex = (currentIndex + 1) % lines.length;
const nextText = lines[nextIndex];

const newContent = content.slice(0, start + startMarker.length) + '\n' +
  nextText + '\n' +
  content.slice(end);

fs.writeFileSync(README, newContent, 'utf8');
console.log('Updated README with:', nextText);
