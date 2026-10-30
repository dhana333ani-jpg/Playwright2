import {test} from "@playwright/test"

test("browser_control", async({page})=>{
await page.goto("https://wwww.dc.com");
let timestamp=Date.now();
console.log(timestamp);
let viewPortSize=await page.viewportSize
console.log(viewPortSize);

await page.setViewportSize({width:1200, height:800});
await page.waitForTimeout(3000);

await page.locator(".ico-register").click();
let registerurl=await page.url();
let title=await page.title();
console.log(registerurl, title);
//await page.screenshot({path:`./Screenshot/screenshot${timestamp}.png`});
await page.screenshot({path:`./Screenshot/screenshot.png`});
});