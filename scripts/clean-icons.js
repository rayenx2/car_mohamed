const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let filesChanged = 0;

walkDir(path.join(__dirname, '..', 'src'), function (filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Look for import { ... } from 'react-icons/fa'
        const importRegex = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]react-icons\/fa['"]/g;

        let match;
        let newContent = content;
        let fileChanged = false;

        while ((match = importRegex.exec(content)) !== null) {
            const fullMatch = match[0];
            const importsStr = match[1];
            const importsList = importsStr.split(',').map(s => s.trim()).filter(s => s.length > 0);

            const usedImports = importsList.filter(icon => {
                // Count occurrences of the icon word in the file
                const regex = new RegExp(`\\b${icon}\\b`, 'g');
                const count = (content.match(regex) || []).length;
                // If it's used more than once (once in the import, plus at least once in usage), keep it
                return count > 1;
            });

            if (usedImports.length !== importsList.length) {
                if (usedImports.length === 0) {
                    // Remove the whole import statement
                    newContent = newContent.replace(fullMatch + '\n', '');
                    newContent = newContent.replace(fullMatch + ';', '');
                    newContent = newContent.replace(fullMatch, '');
                } else {
                    // Replace with used ones
                    const newImportStr = `import { ${usedImports.join(', ')} } from 'react-icons/fa'`;
                    newContent = newContent.replace(fullMatch, newImportStr);
                }
                fileChanged = true;
            }
        }

        // Handle multiline imports loosely by just checking for react-icons/fa anywhere in the file manually or let ts-lint handle it.
        // The above regex handles multiline if `.` matches newlines, but `[^}]+` naturally matches newlines anyway!

        if (fileChanged) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ Cleaned unused icons from ${path.basename(filePath)}`);
            filesChanged++;
        }
    }
});

console.log(`\nDone! Cleaned ${filesChanged} files.`);
