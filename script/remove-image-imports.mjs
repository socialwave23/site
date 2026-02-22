import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'client', 'src');

function refactorImports(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            refactorImports(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // We look for: import varName from "/images/fileName.ext";
            const importRegex = /^import\s+([a-zA-Z0-9_]+)\s+from\s+['"](\/images\/[^'"]+)['"];?$/gm;

            let match;
            const replacements = {};
            while ((match = importRegex.exec(content)) !== null) {
                replacements[match[1]] = match[2];
            }

            if (Object.keys(replacements).length > 0) {
                // Remove the import lines
                content = content.replace(importRegex, '');

                // Now replace the variable usages with the string literal
                // We need to be careful to match whole words and not inside other words
                for (const [varName, stringPath] of Object.entries(replacements)) {
                    const varRegex = new RegExp(`\\b${varName}\\b`, 'g');
                    content = content.replace(varRegex, `"${stringPath}"`);
                }

                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Refactored imports in: ${fullPath}`);
            }
        }
    }
}

refactorImports(srcDir);
