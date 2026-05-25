const {test, expect} = require('@playwright/test');

test.only('Registration', async({page}) => {

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");



});