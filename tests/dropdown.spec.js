import {test} from "@playwright/test";

test("single select dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    await page.locator("#select3").selectOption({index:7});
    await page.locator("#select5").selectOption({value:'Tamil Nadu'});
    await page.locatort("//select").nth(6).selectOption("Tiruppur");
})
