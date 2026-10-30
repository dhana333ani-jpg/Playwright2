import {test} from "@playwright/test";

test("double click", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
    await page.getByRole("button", {name:"Yes"}).dblclick();
    await expect(page.locator(".text-green-600.p-1.px-2.ms-2.rounded-md")).toHaveText();
})

test("scroll", async({page})=>{
await page.goto();
await page.waitForTimeout(2000);
await mouse.wheel(0, 800); // down
await mouse.wheel(0,-800); // up

await page.goto("")
await mouse.wheel(800, 0)// right
await mouse.wheel(-600, 0) // left

})

