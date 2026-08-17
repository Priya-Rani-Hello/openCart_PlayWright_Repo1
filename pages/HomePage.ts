import {Page,expect,Locator} from '@playwright/test'
export class HomePage{
private readonly page:Page;
private readonly lnkMyAccount:Locator;
private readonly lnkRegister:Locator;
private readonly lnkLogin :Locator;
private readonly lnkSearchbox :Locator;
private readonly lnkButtton :Locator;
constructor (page:Page){
this.page=page;
this.lnkMyAccount=page.locator('span:has-text("My Account")');
this.lnkLogin=page.locator('a:has-text("Login")');
this.lnkRegister=page.locator('a:has-text("Register")');
this.lnkSearchbox=page.locator('input[name="search"]');
this.lnkButtton=page.locator('#search button[type="button"]');
}
async isHomePageExist(){
    let title:string=await this.page.title();
    if(title){
       return true;
    }
    else
        return false;
}
async clickMyAccount(){
try{
  await  this.lnkMyAccount.click();
}catch(error){
    console.log(`exception occur while clicking on my account: ${error}`)
}
}
async clickLogIn(){
try{
   await this.lnkLogin.click();
}catch(error){
    console.log(`exception occur while clicking on Login: ${error}`)
}
}
async enterProductName(pName: string){
try{
    await this.lnkSearchbox.fill(pName);
}catch(error){
    console.log(`exception occur while entering product name: ${error}`)
}
}
async clickSearch(){
try{
    await this.lnkButtton.click();
}catch(error){
    console.log(`exception occur while clicking on search button: ${error}`)
}
}
async clickRegister(){
try{
  await  this.lnkRegister.click();
}catch(error){
    console.log(`exception occur while clicking on my account: ${error}`)
}
}






}