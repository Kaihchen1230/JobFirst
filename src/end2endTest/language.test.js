const puppeteer = require('puppeteer');

test('should change language to chinese', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
        'http://localhost:8000/'
    );
    await page.click('Language');
    await page.click('');
})