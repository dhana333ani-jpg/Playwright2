import {expect, test} from "@playwright/test"

test("assertion login", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await page.getByLabel("Username").fill("standard_user");
    await page.getByLabel("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // await page.getByAltText("Sauce Labs Backpack").click(); 
});

test("to be visible", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(await page.locator(".login_logo")).toBeVisible(); // here we check locator is visible or not
    await page.getByLabel("Username").fill("standard_user");
    await page.getByLabel("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
});

test.only("to be disabled", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
    await expect(await page.locator("#submit")).toBeDisabled(); // here check box is disabled
    let submitbtn= await page.locator("submitButton"); 
    await submitbtn.click();
});

test("to be enabled", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
    await expect(await page.locator("#submit")).toBeDisabled(); // here check box is disabled
    let submitbtn= await page.locator("submitButton"); 
    await expect(submitbtn).toBeEnabled();
    await submitbtn.click();
    await expect(await page.locator(".go395817564").first()).toBeVisible();
});

test("to be editable", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect(await page.locator("#name")).toBeEditable(); // here it will pass 
    let untxt=await page.locator("#name");
    await untxt.fill("Superman");
});

test("to be Empty", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect(await page.locator("#name")).toBeEditable(); // here it will pass
    let untxt=await page.locator("#name");
    await untxt.fill("Superman")
    await expect(await page.locator("#name")).toBeEmpty()// here its FAIL, coz already filled
});

test("toBeChecked", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    await page.locator("#domain_a").check();
    await expect(await page.locator("#domain_a")).toBeChecked(); // here pass
    await expect(await page.locator("#mode_a")).toBeChecked(); // here FAIL, coz its  unchecked
});

test.only("toHaveAttribute", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await page.getByLabel("Username").fill("standard_user");
    let pass=await page.getByLabel("Password");
    await pass.fill("secret_sauce");
    await expect(pass).toHaveValue("secret_sauce");
    await page.locator("#login-button").click();
});
