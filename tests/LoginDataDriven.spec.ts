import {test,expect} from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/Homepage";
import { DataProvider } from "../utils/dataProviders";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from '../test.config';
const jsonpath="testdata/logindata.json";
const jsonTestData=DataProvider.getTestDataFromJson(jsonpath);
for( const data of jsonTestData){
test(`Login with Json data:${data.testName} @datadriven`,async({page})=>{
const config=new TestConfig();
await page.goto(config.appUrl);
const homePage=new HomePage(page);
await homePage.clickMyAccount();
await homePage.clickLogIn();
const loginPage=new LoginPage(page);
await loginPage.login(data.email,data.password);
if(data.expected.toLowerCase()==='success'){
const myAccountPage=new MyAccountPage(page);
const isLoggedIn=await myAccountPage.isMyAccountPageExist();
expect(isLoggedIn).toBeTruthy();
}
else{
    const errorMessage=await loginPage.getLoginErrorMessage();
    expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
}
})


}