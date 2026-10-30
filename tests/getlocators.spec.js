import {test} from "@playwright/test"

test("getBylabel", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByLabel("Username").fill("standard_user");
    await page.getByLabel("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.getByAltText("Sauce Labs Backpack").click(); 
});