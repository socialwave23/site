import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const imagesDir = path.join(projectRoot, 'client', 'public', 'images');
const srcDir = path.join(projectRoot, 'client', 'src');

// Utility to create a super-relaxed comparison key
function getComparisonKey(filename) {
    let base = path.basename(filename, path.extname(filename));
    base = base.toLowerCase();

    // First remove the 13 digit timestamps safely (usually preceded by '_' or '-')
    base = base.replace(/[-_]?(\d{13})/g, '');

    // Remove all non-alphanumeric chars
    base = base.replace(/[^a-z0-9]/g, '');

    return base;
}

// 1) Get all current valid files in public/images
const validFiles = fs.readdirSync(imagesDir).filter(f => f !== '.DS_Store' && !f.startsWith('.'));

// Create a map of comparisonKey -> actualFilename
const fileMap = new Map();
for (const file of validFiles) {
    const key = getComparisonKey(file);
    fileMap.set(key, file);
}

// 2) Scan all TSX/TS files
function syncImports(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            syncImports(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            const stringRegex = /\/images\/([^"'\s)>]+)/g;

            content = content.replace(stringRegex, (match, filename) => {
                // First try an exact match (if the file is already perfect)
                if (validFiles.includes(filename)) return match;

                const key = getComparisonKey(filename);
                if (fileMap.has(key)) {
                    const actualFilename = fileMap.get(key);
                    if (filename !== actualFilename) {
                        console.log(`Matched and replacing: ${filename} -> ${actualFilename} in ${path.basename(fullPath)}`);
                        changed = true;
                        return `/images/${actualFilename}`;
                    }
                } else {
                    console.warn(`WARNING: Could not find match for ${filename} in assets.`);
                }
                return match;
            });

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated file: ${fullPath}`);
            }
        }
    }
}

console.log('Syncing image references...');
syncImports(srcDir);
