import {Page,expect,Locator} from '@playwright/test'
export class LoginPage{
private readonly page:Page;
private readonly txtEmailAddress:Locator;
private readonly txtPassword:Locator;
private readonly btnLogin:Locator;
private readonly txtErrorMsg :Locator;
constructor(page:Page){
    this.page=page;
    this.txtEmailAddress=page.locator("//input[@id='input-email']");
   // this.txtEmailAddress=page.locator("#input-email");
    this.txtPassword=page.locator("#input-password");
   // this.btnLogin=page.locator("input[value='Login']");
   this.btnLogin = page.locator("input[type='submit'][value='Login']");
    this.txtErrorMsg=page.locator(".alert.alert-danger.alert-dismissible");
}
    async setEmail(email:string){
       await this.txtEmailAddress.fill(email);
    }
async setPassword(password:string){
       await this.txtPassword.fill(password);
    }
async clickLogin(){
    await this.btnLogin.click();
}
async login(email:string,password:string){
    await this.txtEmailAddress.fill(email);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
     await this.page.waitForLoadState('domcontentloaded');

    console.log("URL after login:", this.page.url());
    console.log("Login button clicked");
}
/*async login(email: string, password: string) {

    console.log("Email:", email);
    console.log("Password:", password);

    console.log("Email field visible:",
        await this.txtEmailAddress.isVisible());

    console.log("Password field visible:",
        await this.txtPassword.isVisible());

    await this.txtEmailAddress.fill(email);
    console.log("Email filled");

    await this.txtPassword.fill(password);
    console.log("Password filled");

    await this.btnLogin.click();
    console.log("Login button clicked");

    console.log("URL after login:", this.page.url());
}*/
async getLoginErrorMessage():Promise<null|string>{
    return (this.txtErrorMsg.textContent());

}

}