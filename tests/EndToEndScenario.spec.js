const {test, expect} = require('@playwright/test');

test.only('End To End Scenarios', async({page}) => {

    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    const registerBtn = page.locator("[class='text-reset']");
    const email = "chadlerBing54654@gmail.com";
    const registerPassword = "GodBlesYou@22";
    const cardTitles = page.locator(".card-body b");
    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    const cartBtn = page.locator("[routerLink*='cart']");
    const creditCardNumber = page.locator("[value*='4542']");
    

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await console.log(page.title());
await userEmail.fill(email);
await password.fill(registerPassword);
await loginBtn.click();
await console.log(page.title());
await page.waitForLoadState('networkidle');
 await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();

for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }

await cartBtn.click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();

await page.locator("text= Checkout").click()

//Checkout Details

await page.pause();



})