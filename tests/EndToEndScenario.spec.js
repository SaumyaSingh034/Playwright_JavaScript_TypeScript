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

await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });

const dropDown = page.locator(".ta-results").first();
await dropDown.waitFor();

const optionsCount = await dropDown.locator("button").count();
for(let i=0;i<optionsCount; ++i){
   const text = await dropDown.locator("button").nth(i).textContent();
   if(text === " India"){
      await dropDown.locator("button").nth(i).click();
      break;
   }
}

await expect(page.locator("label[style*='lightgray']")).toHaveText(email);
//await expect(page.locator("input[class*='text-validated ng-untouched ng-pristine']")).toHaveText(email);

await page.locator(".btnn.action__submit").click();

//Order Summary Page Validation

expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

const OrderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(OrderId);

//Order Page Validations
await page.locator("[routerLink='/dashboard/myorders']").first().click();

await page.locator("tbody").waitFor();
const rows = page.locator("tbody tr");

for(let i=0;i<rows; ++i){
   const rowOrderId = await rows.nth(i).locator("th").textContent();
   if(OrderId.includes(rowOrderId)){
      await rows.nth(i).locator("button").first().click();
      break;
   }
}

await page.pause();



})