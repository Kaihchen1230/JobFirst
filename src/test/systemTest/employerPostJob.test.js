const puppeteer = require('puppeteer');
const VIEWPORT = { width: 1300, height: 1000 };
jest.setTimeout(70000);


// describe('Employer posts job and Employee able to apply job', () => {
    
    test('should able to login as an Employeer and post a job, then search the job', async () => {
        const browser = await puppeteer.launch({
            headless: true
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
        await page.type('#form_in_modal_userName', 'kapp4');
        await page.waitFor(1000);
        await page.click('#form_in_modal_password');
        await page.type('#form_in_modal_password', '214890303Khc');
        await page.waitFor(1000);
        await page.click('.ant-modal-footer > div > button:nth-child(2)');
        await page.waitFor(2000);
        await page.click('li:nth-child(6)');
        await page.waitFor(2000);
        await page.click('input[name*="jobTitle"]');
        await page.type('input[name*="jobTitle"]', 'Backend Engineer');
        await page.click('input[name*="line1"]');
        await page.type('input[name*="line1"]', '119 10th street');
        await page.click('input[name*="line2"]');
        await page.type('input[name*="line2"]', '4th floor');
        await page.click('input[name*="postalCode"]');
        await page.type('input[name*="postalCode"]', '11229');
        await page.click('input[name*="state"]');
        await page.type('input[name*="state"]', 'NY');
        await page.click('input[name*="postDate"]');
        await page.click('td[title*="May 9, 2019"]');
        await page.click('input[placeholder*="Deadline"]');
        await page.click('td[title*="May 30, 2019"]');
        await page.click('div[class*="ant-select-selection__placeholder"]');
        let randomNum = Math.floor(Math.random() * 3) + 1;
        await page.waitFor(2000);
        await page.click(`ul[role*="listbox"] > li:nth-child(${randomNum})`);
        await page.waitFor(2000);

        await page.click('textarea[name*="description"]');
        const description = 'Ipsum ad ullamco elit qui non aliquip excepteur voluptate excepteur esse deserunt mollit. Culpa deserunt.';
        await page.type('textarea[name*="description"]', description);
        const requirement = 'Ipsum ad ullamco elit qui non aliquip excepteur voluptate excepteur esse deserunt mollit. Culpa deserunt';
        await page.type('textarea[name*="requirement"]', requirement);
        await page.waitFor(2000);
        await page.click('button[class*="ant-btn ant-btn-primary"]');
        await page.waitFor(5000);
        await page.click('li:nth-child(4)');
        await page.waitFor(7000);
        await page.click('#search');
        await page.waitFor(2000);
        await page.type('#search', 'Backend');
        await page.waitFor(3000);
        await page.click('button[class*="ant-btn ant-input-search-button ant-btn-primary ant-btn-lg"]');
        await page.waitFor(5000);
        browser.close();
    });

    // test('should able to login as an Employee and search backend engineer job and apply', async () => {
    //     const browser = await puppeteer.launch({
    //         headless: true
    //     });
    //     const page = await browser.newPage();
    //     await page.goto(
    //         'https://master.d311enjx0cy8vf.amplifyapp.com/'
    //     );
    //     await page.setViewport(VIEWPORT);
    //     await page.waitFor(1000);
    //     await page.click('li:nth-child(10)');
    //     await page.waitFor(1000);
    //     await page.click('#form_in_modal_userName');
    //     await page.type('#form_in_modal_userName', 'kappa');
    //     await page.waitFor(1000);
    //     await page.click('#form_in_modal_password');
    //     await page.type('#form_in_modal_password', '214890303Khc');
    //     await page.waitFor(1000);
    //     await page.click('.ant-modal-footer > div > button:nth-child(2)');
    //     await page.waitFor(2000);
    //     // go to view job page
    //     await page.click('li:nth-child(4)');
    //     await page.waitFor(5000);
    //     await page.click('input[placeholder*="Search"]');
    //     await page.type('input[placeholder*="Search"]', 'Backend');
    //     await page.waitFor(3000);
    //     await page.click('button[class*="ant-btn ant-input-search-button ant-btn-primary ant-btn-lg"]');
    //     await page.waitFor(3000);
    //     await page.click('button[class*="ant-btn ant-btn-primary ant-btn-background-ghost"]');
    //     await page.waitFor(3000);
    //     await page.click('button[class*="ant-btn ant-btn-primary"]');
    //     await page.waitFor(4000);
    
    //     await page.click('div[class*="ant-modal-footer"] > div > button:last-child');
    //     await page.waitFor(3000);
    //     await page.click('div[class*="ant-tabs-nav-wrap"] > div > div > div > div:last-child');
    //     await page.waitFor(5000);
    //     browser.close();
    // });
// })
