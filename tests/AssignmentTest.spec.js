const {test, expect} = require('@playwright/test');

test('Registration', async({page}) => {

    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    const registerBtn = page.locator("[class='text-reset']");
    const email = "chadlerBing54654@gmail.com";
    const registerPassword = "GodBlesYou@22";


await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await console.log(page.title());
await registerBtn.click();
await page.locator("#firstName").fill("Chandler");
await page.locator("#lastName").fill("Bing");
await page.locator("#userEmail").fill(email);
await page.locator("#userMobile").fill("9898989898");

// await page.locator("[formcontrolname='occupation']").click();
// await page.locator("[value='3: Engineer']").click()
await page.locator("[value='Female']").click();
await page.locator("#userPassword").fill(registerPassword);
await page.locator("#confirmPassword").fill(registerPassword);
await page.locator("[type='checkbox']").click();
await loginBtn.click();


});

test.only('Login', async({page}) => {

    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    const registerBtn = page.locator("[class='text-reset']");
    const email = "chadlerBing54654@gmail.com";
    const registerPassword = "GodBlesYou@22";
    const cardTitles = page.locator(".card-body b");


await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await console.log(page.title());
await userEmail.fill(email);
await password.fill(registerPassword);
await loginBtn.click();
await console.log(page.title());
// console.log(await cardTitles.first().textContent());
await page.waitForLoadState('networkidle');
// await cardTitles.last().waitFor();
const titles = await cardTitles.allTextContents();
console.log(titles);



})

