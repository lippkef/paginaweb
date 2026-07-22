/**
 * Copia capturas desde master-juegos-frontend/docs/screenshots
 * y regenera public/manual/MANUAL_USUARIO.pdf
 *
 * Uso:
 *   cd master-juegos-frontend && npm run docs:pdf
 *   cd ../game-master-landing && node scripts/sync-manual-screenshots.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sourceDir = path.resolve(root, '../master-juegos-frontend/docs/screenshots');
const targetDir = path.join(root, 'public/manual/screenshots');

const MAP = {
  '01-login.png': 'login.png',
  '02-register.png': 'registro.png',
  '03-dashboard-jugador.png': 'panel-jugador.png',
  '04-dashboard-organizador.png': 'panel-organizador.png',
  '05-seleccionar-evento.png': 'eventos-jugador.png',
};

if (!fs.existsSync(sourceDir)) {
  console.error('No se encontró:', sourceDir);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

for (const [srcName, destName] of Object.entries(MAP)) {
  const src = path.join(sourceDir, srcName);
  const dest = path.join(targetDir, destName);
  if (!fs.existsSync(src)) {
    console.error('Falta captura:', src);
    process.exit(1);
  }
  fs.copyFileSync(src, dest);
  console.log('Copiado:', destName);
}

execSync('node scripts/generate-manual-pdf.js', { cwd: root, stdio: 'inherit' });
