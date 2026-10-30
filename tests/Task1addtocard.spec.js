import {test} from "@playwright/test";

test("add_to_card", async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
await page.getByPlaceholder("Enter your name").fill('Sundar');
await page.getByLabel("Email Id").type("sundar2@gamil.com");
let a=await page.getByRole("button", {name:"Register"}).textContent();
console.log(a);
await page.getByRole("button", {name:"Register"}).click();
});