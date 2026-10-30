class LoginPage{
    constructor(page){
        this.page=page;
        this.loginlink=page.getByRole('link', {name:"Log in"});
        this.EmailTextfld=page.getByRole('textbox', {name:"Email"});
        this.PasswordTxtfld=page.getByRole('textbox', {name:"Password"});
        this.loginbtn=page.locator("//input[@value='Log in']");
    }
}
export default LoginPage;