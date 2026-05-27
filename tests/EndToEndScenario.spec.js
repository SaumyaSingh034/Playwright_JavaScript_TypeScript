const {test, expect} = require('@playwright/test');

test.only('End To End Scenarios', async({page}) => {

    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    const registerBtn = page.locator("[class='text-reset']");
    const email = "chadlerBing54654@gmail.com";
    const registerPassword = "GodBlesYou@22";
    const cardTitles = page.locator(".card-body b");
    const products = page.locator("card-body");
    const productName = "Zara Coat 3"

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await console.log(page.title());
await userEmail.fill(email);
await password.fill(registerPassword);
await loginBtn.click();
await console.log(page.title());
await page.waitForLoadState('networkidle');
const titles = await cardTitles.allTextContents();
console.log(titles);
const count = await products.count();
for(let i = 0; i< count; ++i){ 
    if(await products.nth(i).locator("b").textContent() == productName){

        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}
await page.pause();



})