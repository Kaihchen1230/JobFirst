const puppeteer = require('puppeteer');
const VIEWPORT = { width: 1300, height: 800 };

jest.setTimeout(10000);
test('should able to see the translated page', async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(
        'http://localhost:8000/'
    );
    await page.setViewport(VIEWPORT);
    await page.waitFor(1000);
    await page.click('li:nth-child(6)');
    await page.waitFor(500);
    await page.click('li:nth-last-child(2)');
    await page.waitFor(500);
    await page.click('#chinese-button');
    await page.waitFor(1500);
    await page.click('header > ul > li:nth-child(2)');
    await page.waitFor(1500);
    browser.close();
});
