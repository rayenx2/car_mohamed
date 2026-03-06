const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const BACKGROUNDS_DIR = path.join(__dirname, '..', 'src', 'assets', 'backgrounds');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'assets', 'backgrounds', 'optimized');

async function optimizeImages() {
    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🔧 Optimizing hero background images...\n');

    // Optimize hero backgrounds (quality 60, resize to 1920px wide)
    for (let i = 1; i <= 4; i++) {
        const inputFile = path.join(BACKGROUNDS_DIR, `hero-bg-${i}.webp`);
        const outputFile = path.join(OUTPUT_DIR, `hero-bg-${i}.webp`);

        if (!fs.existsSync(inputFile)) {
            console.log(`⚠️  Skipping hero-bg-${i}.webp (not found)`);
            continue;
        }

        const inputStats = fs.statSync(inputFile);
        const inputSizeKB = Math.round(inputStats.size / 1024);

        await sharp(inputFile)
            .resize(1920, null, { withoutEnlargement: true })
            .webp({ quality: 60, effort: 6 })
            .toFile(outputFile);

        const outputStats = fs.statSync(outputFile);
        const outputSizeKB = Math.round(outputStats.size / 1024);
        const savings = Math.round(((inputSizeKB - outputSizeKB) / inputSizeKB) * 100);

        console.log(`✅ hero-bg-${i}.webp: ${inputSizeKB} KB → ${outputSizeKB} KB (${savings}% smaller)`);
    }

    // Optimize logo (resize from 1600x1600 to 200x200)
    const logoFile = path.join(PUBLIC_DIR, 'WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg');
    if (fs.existsSync(logoFile)) {
        const inputStats = fs.statSync(logoFile);
        const inputSizeKB = Math.round(inputStats.size / 1024);

        const outputFile = path.join(OUTPUT_DIR, 'logo-optimized.webp');
        await sharp(logoFile)
            .resize(200, 200, { fit: 'cover' })
            .webp({ quality: 80 })
            .toFile(outputFile);

        const outputStats = fs.statSync(outputFile);
        const outputSizeKB = Math.round(outputStats.size / 1024);
        const savings = Math.round(((inputSizeKB - outputSizeKB) / inputSizeKB) * 100);

        console.log(`\n✅ Logo: ${inputSizeKB} KB → ${outputSizeKB} KB (${savings}% smaller)`);
    }

    console.log(`\n📁 Optimized files saved to: ${OUTPUT_DIR}`);
    console.log('\n📋 Next steps:');
    console.log('   1. Stop the dev server (Ctrl+C)');
    console.log('   2. Copy optimized files over originals:');
    console.log('      copy optimized\\hero-bg-*.webp ..\\');
    console.log('   3. Restart: npm start');
}

optimizeImages().catch(console.error);
