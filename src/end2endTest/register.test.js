const puppeteer = require('puppeteer');

test('create an account in the website', async() => {
    const browser = await puppeteer.launch({
        headless: false
    });
    onst page = await browser.newPage();
    await page.goto(
      'https://master.d2eo52i5ucdlvi.amplifyapp.com/'
    );
});