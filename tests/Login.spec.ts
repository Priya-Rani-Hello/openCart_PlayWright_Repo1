import {test,expect} from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
//import { LogoutPage } from "../pages/LogoutPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from '../test.config';
let homePage:HomePage;
let loginPage:LoginPage;
let config:TestConfig;
let myAccountPage:MyAccountPage;

test.beforeEach(async({page})=>{
config=new TestConfig();
await page.goto(config.appUrl);

homePage=new HomePage(page);
loginPage=new LoginPage(page);
myAccountPage=new MyAccountPage(page);
});

//test.afterEach(async({page})=>{
//await page.close();
//});
test("user login test @master @regression @sanity",async()=>{
await homePage.clickMyAccount();
await homePage.clickLogIn();
//await loginPage.setEmail(config.email);
//await loginPage.setPassword(config.password);
//await loginPage.clickLogin();
await loginPage.login(config.email,config.password);
const isMyOrder= await myAccountPage.isMyOrderHeadingExist();
expect(isMyOrder).toBe(true);
//alternatively 

//const isLoggedIn= await myAccountPage.isMyAccountPageExist();
//expect(isLoggedIn).toBe(true);
//await myAccountPage.clickLogOut();
})