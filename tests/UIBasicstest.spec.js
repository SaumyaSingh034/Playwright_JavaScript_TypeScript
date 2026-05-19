const {test, expect} = require('@playwright/test');

test('First Paywright test', async ({browser})=> {
   const context =  await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
      await page.locator("#username").fill("saumya");
   await page.locator("[type='password']").fill("learning");
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');

});


test('First Paywright test without any fixture', async ({page})=> {

   await page.goto("https://google.com");
   //get the title
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");

});