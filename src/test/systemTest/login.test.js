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
  await page.click('#normal_login_userName');
  await page.type('#normal_login_userName', 'kappa');
  await page.click('#normal_login_password');
  await page.type('#normal_login_password', '214890303Khc');
  await page.click('.login-form-button');
  await page.waitFor(30000);
  browser.close();
  
},1000000);