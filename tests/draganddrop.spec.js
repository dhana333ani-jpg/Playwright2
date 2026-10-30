import {test} from "@playwright/test";

test("randrom drop", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
    await page.locator("//div[text()='Drag Me']").click();
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.mouse.move(500, -700);
    await page.waitForTimeout(2000);
    await page.mouse.up();
})

test("inside container", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    await page.locator(".draggable").first().hover();
    await page.waitForTimeout(2000);
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.waitForTimeout(2000);
    await page.mouse.up();
})

test.only("bounding box", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    await page.locator(".draggable").first().hover();
    await page.waitForTimeout(2000);
    await page.mouse.down();
    let box=await page.locator("//div[text()='Mobile Accessories']").boundingBox();
    console.log(box);
    console.log(box.x);
    await page.mouse.move(box.x, box.y);
    await page.mouse.up();  
})

test("dragTo method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    let element1=await page.locator(".draggable").first();
    let container=await page.locator("//div[text()='Mobile Accessories']");
    await page.waitForTimeout(2000);
    await element1.dragTo(container);

});