import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../public/manual/screenshots');
const outDir = srcDir;

const crops = [
  {
    name: 'login.png',
    source: 'pagina-2.png',
    left: 60,
    top: 430,
    width: 1070,
    height: 1020,
  },
  {
    name: 'registro.png',
    source: 'pagina-3.png',
    left: 60,
    top: 200,
    width: 1070,
    height: 1200,
  },
  {
    name: 'panel-jugador.png',
    source: 'pagina-4.png',
    left: 60,
    top: 200,
    width: 1070,
    height: 580,
  },
  {
    name: 'panel-organizador.png',
    source: 'pagina-4.png',
    left: 60,
    top: 900,
    width: 1070,
    height: 640,
  },
  {
    name: 'eventos-jugador.png',
    source: 'pagina-5.png',
    left: 60,
    top: 80,
    width: 1070,
    height: 860,
  },
];

for (const crop of crops) {
  const input = path.join(srcDir, crop.source);
  const output = path.join(outDir, crop.name);
  await sharp(input)
    .extract({
      left: crop.left,
      top: crop.top,
      width: crop.width,
      height: crop.height,
    })
    .png()
    .toFile(output);
  console.log('Cropped', crop.name);
}
