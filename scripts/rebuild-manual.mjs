/**
 * Regenera capturas y PDF del manual.
 *
 * Opción recomendada (capturas actuales desde la app):
 *   cd ../master-juegos-frontend && npm run docs:pdf
 *   cd ../game-master-landing && node scripts/sync-manual-screenshots.mjs
 *
 * Solo PDF (sin actualizar capturas):
 *   node scripts/generate-manual-pdf.js
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const refresh = process.argv.includes('--refresh-screenshots');

if (refresh) {
  const appRoot = path.resolve(root, '../master-juegos-frontend');
  execSync('npm run docs:pdf', { cwd: appRoot, stdio: 'inherit' });
  execSync('node scripts/sync-manual-screenshots.mjs', { cwd: root, stdio: 'inherit' });
} else {
  execSync('node scripts/generate-manual-pdf.js', { cwd: root, stdio: 'inherit' });
}
