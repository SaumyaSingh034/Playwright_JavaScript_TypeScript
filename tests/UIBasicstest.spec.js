const {test, expect} = require('@playwright/test');

test('First Paywright test', async ({browser})=> {
   const context =  await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());

});


test('First Paywright test without any fixture', async ({page})=> {

   await page.goto("https://google.com");
   //get the title
   console.log(await page.title());
   expect(page).toHaveTitle("Google")

});