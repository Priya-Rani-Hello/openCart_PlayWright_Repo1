import {Page,Locator,expect} from '@playwright/test';
//import { stringify } from 'node:querystring';
export class RegistrationPage{
    private readonly page:Page;
    private readonly txtFirstName:Locator;
private readonly txtLastName:Locator;
private readonly txtEmail:Locator;
private readonly txtTelephone:Locator;
private readonly txtPwd:Locator;
private readonly txtPwdConfirm:Locator;
private readonly chkPolicy:Locator;
private readonly btnContinue:Locator;
private readonly msgConfirmation:Locator;
    constructor(page:Page){
this.page=page;
this.txtFirstName=page.locator('#input-firstname');
this.txtLastName=page.locator('#input-lastname');
this.txtEmail=page.locator('#input-email');
this.txtTelephone=page.locator('#input-telephone');
this.txtPwd=page.locator('#input-password');
this.txtPwdConfirm=page.locator('#input-confirm');
this.chkPolicy=page.locator("input[name='agree']");
this.btnContinue=page.locator("input[value='Continue']");
this.msgConfirmation=page.locator("h1:has-text('Your Account Has Been Created!')");
    }
async setFirstName(fname:string):Promise<void>{
await this.txtFirstName.fill(fname);
}
async setLastName(lname:string):Promise<void>{
await this.txtLastName.fill(lname);
}
async setEmail(email:string):Promise<void>{
await this.txtEmail.fill(email);
}
async setTelephone(telephone:string):Promise<void>{
await this.txtEmail.fill(telephone);
}
async setPassword(password:string):Promise<void>{
await this.txtEmail.fill(password);
}
async setConfirmPassword(confirmPassword:string):Promise<void>{
await this.txtEmail.fill(confirmPassword);
}
async setPrivacyPolicy():Promise<void>{
await this.chkPolicy.check();
}
async clickContinue():Promise<void>{
await this.btnContinue.click();
}

async getConfirmationMsg():Promise<string>{
return await this.msgConfirmation.textContent() ??'';
}
/*async getConfirmationMsg(): Promise<string> {
    await this.msgConfirmation.waitFor({state: "visible"});
    return (await this.msgConfirmation.textContent()) ?? "";
}*/
async completeRegistration(userData:{
    firstName:string;
    lastName:string;
    email:string;
    telephone:string;
    password:string;
}):Promise<void>{
await this.setFirstName(userData.firstName);
await this.setLastName(userData.lastName);
await this.setEmail(userData.email);
await this.setTelephone(userData.telephone);
await this.setPassword(userData.password);
await this.setConfirmPassword(userData.password);
await this.setPrivacyPolicy();
await this.clickContinue();
await expect(this.msgConfirmation).toBeVisible();
    }
















}
