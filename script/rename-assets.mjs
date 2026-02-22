import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const imagesDir = path.join(projectRoot, 'client', 'public', 'images');
const srcDir = path.join(projectRoot, 'client', 'src');

function getCleanName(filename) {
    const ext = path.extname(filename).toLowerCase();
    const base = path.basename(filename, path.extname(filename));

    // Make lowercase, replace spaces/underscores/etc with hyphens, remove parens
    let cleanBase = base
        .toLowerCase()
        .replace(/[_\s\(\)\[\]]/g, '-')
        .replace(/-+/g, '-') // remove consecutive hyphens
        .replace(/^-|-$/g, ''); // remove leading/trailing hyphens

    return cleanBase + ext;
}

const files = fs.readdirSync(imagesDir);

// Map old names to new names
const renamingMap = {};
for (const file of files) {
    if (file === '.DS_Store' || file.startsWith('.')) continue;

    const cleanName = getCleanName(file);
    if (cleanName !== file) {
        renamingMap[file] = cleanName;
    }
}

console.log('Renaming Map:', renamingMap);

function replaceInFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            for (const [oldName, newName] of Object.entries(renamingMap)) {
                // Look for occurrences like '/images/OldName.jpg'
                const regex = new RegExp(`/images/${oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, `/images/${newName}`);
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated:', fullPath);
            }
        }
    }
}

replaceInFiles(srcDir);
// Also check index.html if needed, though usually standard
const rootIndex = path.join(projectRoot, 'client', 'index.html');
if (fs.existsSync(rootIndex)) {
    let initialHtml = fs.readFileSync(rootIndex, 'utf8');
    let newHtml = initialHtml;
    for (const [oldName, newName] of Object.entries(renamingMap)) {
        const regex = new RegExp(`/images/${oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
        newHtml = newHtml.replace(regex, `/images/${newName}`);
    }
    if (newHtml !== initialHtml) {
        fs.writeFileSync(rootIndex, newHtml, 'utf8');
        console.log('Updated index.html');
    }
}


// Now physically rename the files
for (const [oldName, newName] of Object.entries(renamingMap)) {
    fs.renameSync(path.join(imagesDir, oldName), path.join(imagesDir, newName));
    console.log(`Renamed: ${oldName} -> ${newName}`);
}
