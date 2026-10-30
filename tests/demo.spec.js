import{test} from "@playwright/test";

test("login", async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/");
await page.locator("//a[text()='Log in']").click();
await page.locator("//input[@id='Email']").fill("josephit1005@gmail.com");
await page.locator("//input[@id='Password']").fill("12345678");
await page.locator("//input[@value='Log in']").click();

});