// rotate.js
const fs = require('fs');
const path = require('path');

// README fayl yo'li
const README = path.join(__dirname, 'README.md');
const content = fs.readFileSync(README, 'utf8');

// Markerlar
const startMarker = '<!--ROTATE-START-->';
const endMarker = '<!--ROTATE-END-->';

// README-da aylantiriladigan matnlar
const lines = [
  '🕒 Tashkent Time (GMT+5)',
  'Asadbek, 15 — studying at Algoritm and Oxford courses',
  'I study web development and English',
  'Future goal: become a developer in the USA',
  'Always learning — never stop!',
  "Hi there 👋 I'm Asadbek",
  "My name is Asadbek, I'm 15 years old.",
  "I'm currently studying Algorithms at Oxford (online course/program) and learning web development and English.",
  "Future goal: I want to become a software developer in the United States.",
  "🔭 Currently learning: web development, algorithms",
  "🌱 Studying: English language, coding practices",
  "🎯 Goal: Build a career as a developer in the USA",
  "Thanks for visiting my profile — let's connect!"
];

// Markerlarni topish
const start = content.indexOf(startMarker);
const end = content.indexOf(endMarker, start);

if (start === -1 || end === -1) {
  console.error('Markers not found in README.md');
  process.exit(1);
}

// Hozirgi matnni olish
const between = content.slice(start + startMarker.length, end).trim();

// Hozirgi matn indexini topish
let currentIndex = lines.indexOf(between);
if (currentIndex === -1) currentIndex = 0;

// Keyingi matn
const nextIndex = (currentIndex + 1) % lines.length;
const nextText = lines[nextIndex];

// README ni yangilash
const newContent = content.slice(0, start + startMarker.length) + '\n' +
  nextText + '\n' +
  content.slice(end);

fs.writeFileSync(README, newContent, 'utf8');
console.log('Updated README with:', nextText);
