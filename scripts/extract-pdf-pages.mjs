import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import canvas from 'canvas';
import {
  getDocument,
  NodeCanvasFactory,
} from 'pdfjs-dist/legacy/build/pdf.mjs';

const { createCanvas, Image } = canvas;
globalThis.Image = Image;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pdfPath = path.join(root, 'public/manual/MANUAL_USUARIO_old.pdf');
const outDir = path.join(root, 'public/manual/screenshots');
fs.mkdirSync(outDir, { recursive: true });

const data = new Uint8Array(fs.readFileSync(pdfPath));
const doc = await getDocument({ data, disableFontFace: true }).promise;
const scale = 2;
const canvasFactory = new NodeCanvasFactory();

for (let pageNum = 1; pageNum <= doc.numPages; pageNum += 1) {
  const page = await doc.getPage(pageNum);
  const viewport = page.getViewport({ scale });
  const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);

  await page.render({
    canvasContext: canvasAndContext.context,
    viewport,
    canvasFactory,
  }).promise;

  const file = path.join(outDir, `pagina-${pageNum}.png`);
  fs.writeFileSync(file, canvasAndContext.canvas.toBuffer('image/png'));
  canvasFactory.destroy(canvasAndContext);
  console.log('Saved', path.basename(file), `${Math.round(viewport.width)}x${Math.round(viewport.height)}`);
}
