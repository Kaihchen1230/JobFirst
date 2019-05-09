const puppeteer = require('puppeteer');
const VIEWPORT = { width: 1300, height: 1000 };
jest.setTimeout(70000);
test('should able to login as an Employee and check the result of the application', async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(
        'https://master.d311enjx0cy8vf.amplifyapp.com/'
    );
    await page.setViewport(VIEWPORT);
    await page.waitFor(1000);
    await page.click('li:nth-child(10)');
    await page.waitFor(1000);
    await page.click('#form_in_modal_userName');
    await page.type('#form_in_modal_userName', 'kappa');
    await page.waitFor(1000);
    await page.click('#form_in_modal_password');
    await page.type('#form_in_modal_password', '214890303Khc');
    await page.waitFor(1000);
    await page.click('.ant-modal-footer > div > button:nth-child(2)');
    await page.waitFor(2000);
    await page.click('li:nth-child(8)');
    await page.waitFor(2000);
    await page.click('div[class*="ant-tabs-nav-wrap"] > div > div > div > div:last-child');
    await page.waitFor(5000);
    browser.close();
});