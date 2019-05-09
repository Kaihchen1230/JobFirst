const puppeteer = require('puppeteer');
const VIEWPORT = { width: 1300, height: 1000 };
jest.setTimeout(70000);

test('should able to login as an Employee and search backend engineer job and apply', async () => {
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
    // go to view job page
    await page.click('li:nth-child(4)');
    await page.waitFor(5000);
    await page.click('input[placeholder*="Search"]');
    await page.type('input[placeholder*="Search"]', 'Backend');
    await page.waitFor(3000);
    await page.click('button[class*="ant-btn ant-input-search-button ant-btn-primary ant-btn-lg"]');
    await page.waitFor(3000);
    await page.click('button[class*="ant-btn ant-btn-primary ant-btn-background-ghost"]');
    await page.waitFor(3000);
    await page.click('button[class*="ant-btn ant-btn-primary"]');
    await page.waitFor(4000);

    await page.click('div[class*="ant-modal-footer"] > div > button:last-child');
    await page.waitFor(3000);
    await page.click('div[class*="ant-tabs-nav-wrap"] > div > div > div > div:last-child');
    await page.waitFor(5000);
    browser.close();
});