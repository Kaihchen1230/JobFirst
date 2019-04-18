const puppeteer = require('puppeteer');


function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
test('should fill username', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'http://localhost:8000/app/signup'
  );
  await page.click('[name="username"]');
  await page.type('[name="username"]', 'testing2');
  await page.click('[name="password"]');
  await page.type('[name="password"]', 'testingPass1@');
  await page.click('[name="email"]');
  await page.type('[name="email"]','kaihang.c@gmail.com');
  await page.click('[name="name"]');
  await page.type('[name="name"]', 'testing name');
  await page.click('[name="phone_number"]');
  await page.type('[name="phone_number"]','+16467177149');
  await page.click('label:nth-child(2)');
  await page.click('#sign-up');
  await page.waitFor(10000);
  browser.close();
  
},1000000);