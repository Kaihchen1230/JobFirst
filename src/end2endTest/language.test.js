const puppeteer = require('puppeteer');

// function delay(timeout) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, timeout);
//     });
//   }
test('should change language to chinese', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=2000,1080']
    });
    const page = await browser.newPage();
    await page.goto(
        'http://localhost:8000/'
    );
    //await page.waitFor(1000);
    await page.click('button#lanButton');
    await browser.close();
    //await page.click('CHINESE - 中文');
})