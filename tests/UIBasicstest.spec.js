const {test, expect} = require('@playwright/test');
 
test('First Paywright test', async ({browser})=> {
   const context =  await browser.newContext();
   const page = await context.newPage();

   const userName = page.locator('#username');
   const password = page.locator("[type='password']");
   const signInBtn = page.locator("#signInBtn");
   const carTitles = page.locator(".card-body a");


   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
      await userName.fill("saumya");
      await password.fill("learning");
   await signInBtn.click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');

   //fill
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await password.fill("Learning@830$3mK2");
   await signInBtn.click();
     console.log(await carTitles.first().textContent());
   console.log(await carTitles.nth(1).textContent());
   const allTitles = await carTitles.allTextContents();
   console.log(allTitles);

});

test('Ui Controls', async ({page})=> {

  const userName = page.locator('#username');
   const password = page.locator("[type='password']");
   const signInBtn = page.locator("#signInBtn");
   const carTitles = page.locator(".card-body a");
   const dropdown = page.locator("select.form-control");

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
      await userName.fill("saumya");
      await password.fill("learning");
      await dropdown.selectOption("consult");
      await page.locator("#usertype").last().click();
      await page.locator("#okayBtn").click();
    
      //assertion to check if radio btn is selected
      await expect(page.locator("#usertype").last()).toBeChecked();
      await page.locator("#terms").click();
      await expect(page.locator("#terms")).toBeChecked();
      await page.locator("#terms").uncheck();
      expect(await page.locator("#terms").isChecked()).toBeFalsy();


        await page.pause();


});

test('Blinking Link Validation', async({page}) => {
   const documentLink = page.locator("[href*='documents-request']");
   const techSmartHire = page.locator("[href*='tech']");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await expect(documentLink).toHaveAttribute("class", "blinkingText");
   await expect(techSmartHire).toHaveAttribute("class", "blinkingText");

});

test('Child Window Handling', async({browser}) => {
    const context =  await browser.newContext();
   const page = await context.newPage();

    const documentLink = page.locator("[href*='documents-request']");
   const techSmartHire = page.locator("[href*='tech']");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   
   const[newPage] = Promise.all([
      context.waitForEvent('page'),
      await documentLink.click(),
   ])
   console.log(await newPage.locator("p.im-para.red").first().textContent());
   

});


test('First Paywright test without any fixture', async ({page})=> {

   await page.goto("https://google.com");
   //get the title
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");

});