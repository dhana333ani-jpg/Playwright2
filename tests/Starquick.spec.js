import {test} from "@playwright/test";

test("StarQuick Pdt At", async({page})=>{
    await page.goto("https://www.starquik.com/");
    await page.locator("//h3[text()='Foodgrain, Oil & Masala']").click();
    await page.locator(".wizzy-common-select-selectedItem").first().click();
    await page.locator(".wizzy-common-select-option ").nth(2).click();
    await page.locator(".facet-head-title").nth(2).click();
    await page.locator("//span[text()='Everest']").first().click();
    let price1=await page.locator("//span[@class='price-item price-item--sale price-item--last']").nth(5).allInnerTexts();
    console.log(price);
    await page.getByAltText("Everest Black Pepper Powder 50 g").click();
    let price2=await page.locator("//span[@class='price-item price-item--sale price-item--last']").innerText();
    await expect(price1).toBe(price2);
})
