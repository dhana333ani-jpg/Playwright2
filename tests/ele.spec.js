import {test} from "@playwright/test";

test.only("fill and type", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login");
     await page.waitForTimeout(2000);
    await page.locator("#Email").fill("josephit1005@gmail.com");
    await page.waitForTimeout(2000);
    await page.locator("Password").type("12345678");
    await page.waitForTimeout(2000);
});

test("click", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator("#Email").fill("josephit1005@gmail.com");
    await page.waitForTimeout(2000);
    await page.locator("Password").type("12345678");
    await page.waitForTimeout(2000);
    await page.getByRole("button", {name:"Log in"}).click({button:"left"});
});

test("double click", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
    await page.locator("#btn_a").dblclick();
});

test("right click", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.getByRole("button", {name:"Right Click"}).click({button:"right"});
});

test("force click", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4");
    await page.locator("//input[@type='checkbox']").click({force});
});