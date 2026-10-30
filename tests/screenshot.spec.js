import {chromium, test} from "@playwright/test"

test.only("screenshot", async()=>{
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.google.com/");
    await page.screenshot({path:"./Screenshot/google.png"});
    let gamil=await page.locator(".gb_6").first()
    await page.screenshot({path:"./Screenshot/gmail.png"});
    
});