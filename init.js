const puppeteer = require('puppeteer');
const url = process.argv[2];


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();
  await page.goto(url, {waitUntil: 'networkidle0', timeout: 60*1000})
  await new Promise(r => setTimeout(r, 10*1000))
  await page.screenshot({ path: './proof.jpg', type: 'jpeg' });
  await browser.close();
})();
