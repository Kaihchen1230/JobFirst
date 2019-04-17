const puppeteer = require('puppeteer');

test('should fill username', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'http://localhost:8000/app/login'
  );
  await page.click('[name="username"]');
  await page.type('[name="username"]', 'testing2');
  await page.click('[name="password"]');
  await page.type('[name="password"]', 'testingPass1@');
  await page.click('[value="Log In"]');
  await page.waitFor(3000);
  browser.close();
  
},1000000);