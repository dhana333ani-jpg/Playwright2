import {test} from "@playwright/test";

//Custom dropdown
// 1st approach
test("Custom dropdown 1", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", {name:"Search Amazon.in"}).fill("shoes");
    await page.keyboard.press("Enter");
    await page.locator("#a-autoid-0-announce").click({force:true});
    await page.locator(".a-dropdown-link").nth(5).click();
    await page.waitForTimeout(2000);
});

//2nd approach

test("Custom dropdown 2", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", {name:"Search Amazon.in"}).fill("shoes");
    await page.keyboard.press("Enter");
    await page.locator("#a-autoid-0-announce").click({force:true});
    let text="Best Sellers";
    await page.locator(`//a[.='${text}']`).click();      // //a[.='Best Sellers'] ,here we use symbol ``
    await page.waitForTimeout(2000);
});

//3rd Approach
test("Custom dropdown 3", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", {name:"Search Amazon.in"}).fill("shoes");
    await page.keyboard.press("Enter");
    await page.locator("#a-autoid-0-announce").click({force:true});
    let options=await page.locator(".a-dropdown-link").all();
    console.log(options); // here we get list of locators
    
    for( let loc of options)
    {
        let text=await loc.innerText();
        console.log(text);
        if(text.includes("Bes")){
            await loc.click();
            break;            
        }
        
    } 
    await page.waitForTimeout(2000);
});

//Auto-suggestion dropdown

test("Auto suggest dropdown", async({page})=>{
    await page.goto("https://www.makemytrip.com/");
    await page.locator("//span[text()='From']").click();
    await page.keyboard.insertText("Coimbatore");
    let options=await page.locator(".revampedCityName").all();
    console.log(options);
    for(let loc of options)
        {
            let text=await loc.innerText();
            console.log(text);
            if(text.includes("Coimb"))
            {
                await loc.click();
                break;
            }
            
        }

        await page.waitForTimeout(3000);
})
