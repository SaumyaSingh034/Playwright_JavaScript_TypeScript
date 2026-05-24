import { test, expect } from '@playwright/test';

test('Login Test', async({browser})=> {
   const context =  await browser.newContext();
   const page = await  context.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId =  page.locator('#input-email');
    const password =  page.locator('#input-password');
    const loginBtn = page.locator("[value='Login']");

    await emailId.fill("automation7667@opencart.com");
    await password.fill("playwright@123");
    await loginBtn.click();
    const title = await page.title();
    console.log("home Page title: ", title);
    await page.screenshot({path: 'homepage.png'});
     expect(title).toEqual('My Account');
    await browser.close();

})
