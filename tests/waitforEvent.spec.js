import {test} from "@playwright/test";

test("waitforevent", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.locator("#writeArea").fill("This is my first text");
    let [download]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ]);
    console.log(download);
    const a=await download.path();
    console.log(a);
    //console(await download.path());
    
})