const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = './src/assets';
const outputDir = './public/optimized';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function convertImages() {
    console.log('Starting image conversion...');

    // Helper to walk through directories recursively
    async function walk(dir) {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                await walk(filePath);
            } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
                // Create relative structure in output dir
                const relativePath = path.relative(sourceDir, dir);
                const targetDir = path.join(outputDir, relativePath);

                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                }

                const output = path.join(targetDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

                // Skip if already exists and newer? (Optional optimization, skipping for now to ensure overwrite)

                try {
                    await sharp(filePath)
                        .webp({ quality: 85 })
                        .resize({ width: 1920, withoutEnlargement: true }) // Max width for hero images
                        .toFile(output);

                    console.log(`Converted: ${file} -> ${path.basename(output)}`);
                } catch (err) {
                    console.error(`Error converting ${file}:`, err);
                }
            }
        }
    }

    await walk(sourceDir);
    console.log('Image conversion complete!');
}

convertImages();
