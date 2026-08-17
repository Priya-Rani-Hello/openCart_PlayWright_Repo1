import {test,expect} from '@playwright/test';
import { TestConfig} from '../test.config';
import { HomePage } from '../pages/Homepage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage} from '../pages/MyAccountPage';
import { LogoutPage } from '../pages/LogoutPage';
let config:TestConfig;
let homePage:HomePage;
let loginPage:LoginPage;
let myAccountPage:MyAccountPage;
let logoutpage:LogoutPage;

test.beforeEach(async ({page})=>{
    config=new TestConfig();
await page.goto(config.appUrl);
homePage=new HomePage(page);
loginPage=new LoginPage(page);
myAccountPage=new MyAccountPage(page);
logoutpage =new LogoutPage(page);
})

test('User Log out ',async({page})=>{
await homePage.clickMyAccount();
await homePage.clickLogIn();
await loginPage.login(config.email,config.password);
console.log("URL after login:", page.url());
expect(await myAccountPage.isMyAccountPageExist()).toBeTruthy();
const isLoggedIn= await myAccountPage.isMyAccountPageExist();
expect(isLoggedIn).toBe(true);
await myAccountPage.clickLogOut();
//logoutpage.isContinueVisible()
//await logoutpage.clickContinue();
await homePage.isHomePageExist();


})



