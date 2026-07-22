const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function main() {
  const root = path.join(__dirname, '..');
  const templatePath = path.join(__dirname, 'manual-template.html');
  const tmpHtmlPath = path.join(root, 'public/manual/_manual-gen.html');
  const pdfPath = path.join(root, 'public/manual/MANUAL_USUARIO.pdf');

  fs.copyFileSync(templatePath, tmpHtmlPath);
  const fileUrl = `file:///${tmpHtmlPath.replace(/\\/g, '/')}`;

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '18mm', right: '16mm', bottom: '18mm', left: '16mm' },
  });
  await browser.close();
  fs.unlinkSync(tmpHtmlPath);

  const stats = fs.statSync(pdfPath);
  console.log('PDF generado:', pdfPath);
  console.log('Tamaño:', Math.round(stats.size / 1024), 'KB');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
