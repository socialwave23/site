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
    let base = path.basename(filename, path.extname(filename));

    // lower case
    base = base.toLowerCase();

    // decode in case of URL encoded characters
    try {
        base = decodeURIComponent(base);
    } catch (e) { }

    // remove exactly 13-digit timestamps globally
    base = base.replace(/[-_]?\d{13}/g, '');

    // replace underscores and spaces with hyphens
    base = base.replace(/[_\s]/g, '-');

    // remove any character that is not a lowercase letter, number, or hyphen
    base = base.replace(/[^a-z0-9-]/g, '');

    // replace multiple consecutive hyphens with a single hyphen
    base = base.replace(/-+/g, '-');

    // remove leading or trailing hyphens
    base = base.replace(/^-+|-+$/g, '');

    if (!base) {
        base = 'image';
    }

    return base + ext;
}

const files = fs.readdirSync(imagesDir);

const renamingMap = {};
const namesSeen = new Set();

// First, reserve names of files that are already perfectly named
for (const file of files) {
    if (file === '.DS_Store' || file.startsWith('.')) continue;
    const cleanName = getCleanName(file);
    if (cleanName === file) {
        namesSeen.add(file);
        renamingMap[file] = file;
    }
}

// Now generate names for files that need renaming
for (const file of files) {
    if (file === '.DS_Store' || file.startsWith('.')) continue;
    if (renamingMap[file] === file) continue; // Already handled

    let cleanName = getCleanName(file);
    let attempt = cleanName;
    let count = 1;
    while (namesSeen.has(attempt)) {
        const base = path.basename(cleanName, path.extname(cleanName));
        const ext = path.extname(cleanName);
        attempt = `${base}-${count}${ext}`;
        count++;
    }

    namesSeen.add(attempt);
    renamingMap[file] = attempt;
}

console.log('Renaming Map:');
for (const [oldName, newName] of Object.entries(renamingMap)) {
    if (oldName !== newName) {
        console.log(`  ${oldName} -> ${newName}`);
    }
}

// Now replace in files
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
                if (oldName === newName) continue;

                // Match occurrences like /images/oldName.jpg
                // Note: oldName might contain special characters, escape them
                const escapedOldName = oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp(`/images/${escapedOldName}`, 'g');

                if (regex.test(content)) {
                    content = content.replace(regex, `/images/${newName}`);
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated TSX/TS/HTML: ${fullPath}`);
            }
        }
    }
}

console.log('\\nReplacing references in code...');
replaceInFiles(srcDir);

// Also check root index.html if exists
const rootIndex = path.join(projectRoot, 'client', 'index.html');
if (fs.existsSync(rootIndex)) {
    let initialHtml = fs.readFileSync(rootIndex, 'utf8');
    let newHtml = initialHtml;
    for (const [oldName, newName] of Object.entries(renamingMap)) {
        if (oldName === newName) continue;
        const escapedOldName = oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`/images/${escapedOldName}`, 'g');
        newHtml = newHtml.replace(regex, `/images/${newName}`);
    }
    if (newHtml !== initialHtml) {
        fs.writeFileSync(rootIndex, newHtml, 'utf8');
        console.log(`Updated root HTML: ${rootIndex}`);
    }
}

// Rename files physically
console.log('\\nRenaming files physically...');
for (const [oldName, newName] of Object.entries(renamingMap)) {
    if (oldName !== newName) {
        // If the new name exists on a case-insensitive system, an interim rename is safe
        const oldPath = path.join(imagesDir, oldName);
        const newPath = path.join(imagesDir, newName);

        // To handle case-only renames on macOS, we sometimes need a temp name
        const tempPath = path.join(imagesDir, `${newName}.tmp`);

        // Is it a case-only rename?
        if (oldName.toLowerCase() === newName.toLowerCase() && oldName !== newName) {
            fs.renameSync(oldPath, tempPath);
            fs.renameSync(tempPath, newPath);
        } else {
            fs.renameSync(oldPath, newPath);
        }

        console.log(`Renamed: ${oldName} -> ${newName}`);
    }
}

console.log('\\nAll done!');
