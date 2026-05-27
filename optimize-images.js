const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMG_DIR = './img';

const IMAGES = [
    { file: 'cover-3d.png', sizes: [400, 800], keepFull: true },
    { file: 'hero-banne.png', sizes: [800], keepFull: true },
    { file: 'mockup-celular.png', sizes: [], keepFull: true },
    { file: 'ad-facebook-feed.png', sizes: [], keepFull: true },
    { file: 'ad-quadrado.png', sizes: [], keepFull: true },
    { file: 'ad-stories.png', sizes: [], keepFull: true },
];

async function optimizeImages() {
    const before = {};
    const after = {};

    for (const { file, sizes, keepFull } of IMAGES) {
        const inputPath = path.join(IMG_DIR, file);
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, ext);

        try {
            const stat = await fs.stat(inputPath);
            before[file] = stat.size;
        } catch {
            console.log(`Skipping ${file} - not found`);
            continue;
        }

        console.log(`Processing: ${file} (${Math.round(before[file] / 1024)}KB)`);

        // Full-size WebP
        if (keepFull) {
            const outPath = path.join(IMG_DIR, `${baseName}.webp`);
            await sharp(inputPath)
                .webp({ quality: 82, effort: 5 })
                .toFile(outPath);
            const s = await fs.stat(outPath);
            after[`${baseName}.webp`] = s.size;
            console.log(`  → ${baseName}.webp (${Math.round(s.size / 1024)}KB)`);
        }

        // Responsive sizes (WebP only)
        for (const size of sizes) {
            const outPath = path.join(IMG_DIR, `${baseName}-${size}.webp`);
            await sharp(inputPath)
                .resize(size, null, { withoutEnlargement: true })
                .webp({ quality: 80, effort: 5 })
                .toFile(outPath);
            const s = await fs.stat(outPath);
            after[`${baseName}-${size}.webp`] = s.size;
            console.log(`  → ${baseName}-${size}.webp (${Math.round(s.size / 1024)}KB)`);
        }
    }

    // Summary
    const totalBefore = Object.values(before).reduce((a, b) => a + b, 0);
    const totalAfter = Object.values(after).reduce((a, b) => a + b, 0);
    console.log('\n=== OPTIMIZATION SUMMARY ===');
    console.log(`Before: ${Math.round(totalBefore / 1024)}KB`);
    console.log(`After:  ${Math.round(totalAfter / 1024)}KB`);
    console.log(`Saved:  ${Math.round((totalBefore - totalAfter) / 1024)}KB (${Math.round((1 - totalAfter / totalBefore) * 100)}%)`);
}

optimizeImages().catch(console.error);
