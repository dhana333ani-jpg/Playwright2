import {test} from "@playwright/test"
test("all2", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByLabel("Name").fill("Sundar");
    await page.waitForTimeout(5000);
    await page.getByLabel("Name").type("Dhana");
    await page.getByLabel("Email Id").fill("dhana@gmail.com");
    let input=await page.getByLabel("Email Id").inputValue();
    console.log(input);
    await page.locator("#password").type("123456@Abc")
    let a=await page.getByRole("button",{name:"Register"}).textContent();
    let b=await page.locator("//section[@class='poppins text-[14px]']").allTextContents();
    console.log(a);
    console.log(b);
})


// test.only("all", async({page})=>{
//     await page.goto("https://www.amazon.com/");
//     // await page.getByRole('searchbox', {name:"Search Amazon.in"}).fill("shoes");
//     await page.locator('.s-suggestion-container').nth(1).waitFor();
    
//     const loc=await page.locator('.s-suggestion-container').all();
//     console.log(loc);
//     await page.waitForTimeout(3000);
// });

test.only("all", async ({ page }) => {
    test.setTimeout(90_000);

    await page.goto("https://www.amazon.com/");

    await page.locator("#twotabsearchtextbox")
              .fill("shoes", { timeout: 30_000 });

    const suggestions = page.locator(".s-suggestion-container");
    await suggestions.first().waitFor({ state: "visible" });

    console.log(await suggestions.allTextContents());
});

test("test2", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?checkbox?sublist=0");
    let a=await page.locator("#domain_a");
    await a.check();
    a=await a.isChecked();
    console.log(a);
    
});

test.only("inner text", async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
let ptext=await page.locator(".listbox").allInnerTexts();
console.log(ptext);
});