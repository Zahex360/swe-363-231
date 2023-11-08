const fs = require('fs');
const path = require('path');

// Get the command-line arguments.
const sourceDir = process.argv[2];
const targetDir = process.argv[3];

// Check if the source directory exists.
if (!fs.existsSync(sourceDir)) {
  console.error('Source directory does not exist.');
  process.exit(1);
}

// Check if the target directory exists.
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// Read the contents of the source directory.
const files = fs.readdirSync(sourceDir);

// Filter for files with specific extensions.
const filteredFiles = files.filter(file => {
  const ext = path.extname(file);
  return ext === '.txt' || ext === '.jpg';
});

// Copy the filtered files to the target directory.
for (const file of filteredFiles) {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  fs.copyFileSync(sourcePath, targetPath);
}

// Success!
console.log('Successfully copied files to target directory.');
