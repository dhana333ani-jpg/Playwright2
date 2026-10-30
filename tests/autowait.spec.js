import {test} from "@playwright/test";
test.use({actionTimeout:3000})
test("autowait in single element", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    //mistake is "#login-button2
    await page.locator("#login-button2").click({timeout:5000});
});

test("autowait in test", async({page})=>{
    test.setTimeout(2000);
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    //mistake is "#login-button2
    await page.locator("#login-button2").click({timeout:5000});
});