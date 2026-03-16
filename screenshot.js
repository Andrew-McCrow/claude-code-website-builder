const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`file://${require('path').resolve(__dirname, 'index.html')}`);
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: '/tmp/current_screenshot.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved to /tmp/current_screenshot.png');
})();
