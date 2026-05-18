const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function findFiles(dir, ext, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, ext, fileList);
    } else if (filePath.endsWith(ext)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = findFiles(srcDir, '.jsx');
const translations = {};

const regex = /t\(\s*["']([^"']+)["']\s*,\s*["']([^"']+)["']\s*\)/g;
// regex for multiline t() calls or with template literals is harder, but let's try the simple one first.

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1];
    const value = match[2];
    
    // Assign nested object
    const keys = key.split('.');
    let current = translations;
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (i === keys.length - 1) {
            current[k] = value;
        } else {
            current[k] = current[k] || {};
            current = current[k];
        }
    }
  }
}

fs.writeFileSync('extracted_fr.json', JSON.stringify(translations, null, 2));
console.log('Extracted translations to extracted_fr.json');
