import {expect, test} from "@playwright/test";

test("left click", async({page})=>{
    test.setTimeout(60_000);
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    await page.getByRole("button", {name:"Yes"}).click();
    await expect(page.locator(".text-green-600.p-1.px-2.ms-2.rounded-md")).toHaveText('You selected "Yes"');
    console.log("left click is verified");
})

test("right click", async({page})=>{
    test.setTimeout(60_000);
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.getByRole("button", {name:"Right Click"}).click({button:'right'});
    await page.locator(".py-1.ps-1").first().click({button:'left'});
    await expect(page.locator(".p-1.px-2.ms-2.rounded-md")).toHaveText('You selected "Yes"');
    console.log("right click is verified");
})

test("double click", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
    await page.getByRole("button", {name:"Yes"}).dblclick();
    await expect(page.locator(".p-1.px-2.ms-2.rounded-md")).toHaveText('You selected "Yes"');
    console.log("double click is verified");
});

test("mouse hovering", async({page})=>{
    test.setTimeout(60_000);
    await page.goto("https://www.tnpsc.gov.in/home.aspx");
    await page.getByText('Links').first().hover();
    await page.waitForTimeout(2000);
    console.log("Mouse hovering is verified");    
});

test("click and hold", async({page})=>{
    test.setTimeout(60000);
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
    await page.locator(".zoom-button ").click({button:'left'});
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.up();
    console.log("Click and hold is verified");
});

test.only("move action", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
    await page.locator(".w-5.h-5.mt-5.ml-3.cursor-pointer").hover();
    await page.waitForTimeout(2000);
    await page.mouse.move(500, 600); // here the move action
    await page.waitForTimeout(4000);
    console.log("Move action is verified");
});