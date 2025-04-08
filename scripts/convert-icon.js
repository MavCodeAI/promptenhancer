import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceIcon = join(__dirname, '../public/icon.svg');
const outputDir = join(__dirname, '../public/icons');

// Create icons directory if it doesn't exist
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Generate icons in different sizes
const sizes = [192, 512];

for (const size of sizes) {
  try {
    await sharp(sourceIcon)
      .resize(size, size)
      .png()
      .toFile(join(outputDir, `icon-${size}x${size}.png`));
    console.log(`Generated ${size}x${size} icon`);
  } catch (err) {
    console.error(`Error generating ${size}x${size} icon:`, err);
  }
} 