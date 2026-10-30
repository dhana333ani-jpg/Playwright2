import {expect, test} from "@playwright/test";

test.fail("to be", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", {name:"Search Amazon.in"}).fill("shoes");
    // Explicit wait is required here because toBe() does not auto-retry
    await page.locator(".s-suggestion-container").first().waitFor({state:"visible", timeout:10000});
    let texts=await page.locator(".s-suggestion-container").allInnerTexts();
    let l1=texts.length; // stores number
    let l2="string";     // stores string value
    await expect(l1).toBe("string");  // comparing String (expected) with number(Actual)
    //Here it is fail coz, Expected: "string" Received: 10

    console.log("toBe() is verified");
    
});

test("toBeCloseTo - Floating point comparision", async({page})=>{
    await page.goto("https://www.amazon.in/");
    // Example scenario: Calculating price with tax or discount on a page
    const price=19.99;
    const taxRate=0.08;
    const total= price + (price*taxRate); //21.5892
    expect(total).toBeCloseTo(21.59, 2) // checks if close to 21.59 upto 2 decimal places
    console.log("toBeCloseTo is verified");
    
});

test("Numerical range assertion, toBeGreaterThan", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.getByRole("searchbox", {name:"Search Amazon.in"}).fill("shoes");
    const suggestion=await page.locator(".s-suggestion-container");
    await suggestion.first().waitFor({state:"visible", timeout:10000});
    const count=await suggestion.count();
    // 1. Strict inequality (> and <)
    expect(count).toBeGreaterThan(0);  // Fails if count <= 0
    expect(count).toBeLessThan(10);    //// Fails if count >= 15

    // 2. Inclusive inequality (>= and <=)
    expect(count).toBeGreaterThanOrEqual(1); // Passes if count >= 1
    expect(count).toBeLessThanOrEqual(10)   // Passes if count <= 10

    console.log("toBeGreater, toBeLessThan all method is verified");
    
});

test("toBeDefined", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const username=await page.getByPlaceholder("Urname").getAttribute("placeholder");
    await expect(username).toBeDefined();
});

test("toBeUndefined, toContain, toBeNull, toHaveLength", async({page})=>{
    let price;
    let str="playwright"
    await expect(price).toBeUndefined(); // passing
    //await expect(str).toBeUndefined(); // fail
    await expect(str).toBeDefined(); // passing
    await expect(str).toContain('play') // passes it 'playwright' contains 'play'
    //await expect(str).toContain('sup'); it fails

    let str2=null;
    await expect(str2).toBeNull(); // paasing

    let arr=[1,2,3,4,5];
    await expect(arr).toHaveLength(5); // passing
    await expect(arr).toContain(4); 
    //await expect(arr).toContain(8); // Fails, coz array doesnt have no.8
    let value="hello, world";
    value="super;star"
    // await expect(value).toContain(',')//pass or fail, coz redeclare will change the value so fails
    await expect(value).toContain(";") // pass
    
    
    price=5000;
    await expect(price).toEqual(5000); // passing
});

test("toBeNan", async({page})=>{
    let value=Number("XYZ");
    // value=8; // here its fails, coz its number
    await expect(value).toBeNaN(); // pass
});

test("toBeTruthy", async({page})=>{
    let value=""; // passes
    await expect(value).toBeTruthy();
    //value=0           // fails
    // value=false       // fails
    // value=NaN        // fails
    // value=undefined    // fails
    // value=" "        // fails
     // value=null        // fails

});

test.only("toBeFalsy", async({page})=>{
    //let value=false; // pass
    //let value=0; // pass
    //let value=NaN; // pass
    //let value=undefined; // pass
    //let value=null; // pass
    //let value=""; //pass
    let value=1; //pass
    await expect(value).toBeFalsy();
    // value="fails";       //fails
    // value=1;       //fails

});