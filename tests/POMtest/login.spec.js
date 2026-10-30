import {test} from "@playwright/test";
import LoginPage from "../../POM/LoginPage.js";

test("Login", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    let login=new LoginPage(page);
    await login.loginlink.click();
    await login.EmailTextfld.fill("josephit1005@gmail.com");
    await login.PasswordTxtfld.fill("12345678");
    await login.loginbtn.click();
})