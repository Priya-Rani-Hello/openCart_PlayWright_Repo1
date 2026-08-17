import {Page,expect,Locator} from '@playwright/test'
import { LogoutPage } from './LogoutPage';
export class MyAccountPage{
private readonly page:Page;
//private readonly msgHeading:Locator;
private readonly myOrderHeading:Locator;
private readonly lnkLogout:Locator;
constructor(page:Page){
    this.page=page;
   // this.msgHeading = page.getByRole('heading', {name:'My Account'});
    //this.msgHeading=page.locator("h2:has-text('My Account')");
    this.myOrderHeading=page.getByRole('heading', {name:'My Orders'});
    //this.lnkLogout=page.locator("a:has-text('Logout')").nth(1);
   // this.lnkLogout=page.locator("text='Logout'").nth(1);
   //this.lnkLogout=page.locator("//a[@class='list-group-item'][normalize-space()='Logout']");
this.lnkLogout = page.getByRole('link', { name: 'Logout' });



}
async isMyAccountPageExist():Promise<boolean>{
    try{
    const isVisible=await this.msgHeading.isVisible();
    return isVisible;
    }catch(error){
console.log(`error checking in my account page ${error}`);
return false;
    }
}
/*async clickLogOut():Promise<LogoutPage>{
try{
    console.log("Current URL:", this.page.url());
await this.lnkLogout.click();
return  new LogoutPage(this.page);
}catch(error){
    console.log(`unable to click logout link ${error}`);
throw error;//Rethrow the error to fail the test case
}
}*/
async isMyOrderHeadingExist():Promise<boolean>{
    try{
    const isVisible=await this.myOrderHeading.isVisible();
    return isVisible;
    }catch(error){
console.log(`error checking in my account page ${error}`);
return false;
    }
}
async clickLogOut(): Promise<LogoutPage> {
    try {
        console.log("Current URL:", this.page.url());

        console.log(
            "Logout count:",
            await this.lnkLogout.count()
        );

        console.log(
            "Logout visible:",
            await this.lnkLogout.isVisible()
        );

        console.log(
            "Logout text:",
            await this.lnkLogout.allTextContents()
        );

        await this.lnkLogout.click();

        return new LogoutPage(this.page);

    } catch (error) {
        console.log(`unable to click logout link: ${error}`);
        throw error;
    }
}
}