import {test,expect} from '@playwright/test';
import { HomePage} from '../pages/Homepage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';
let homePage:HomePage;
let registrationPage:RegistrationPage;
let config:TestConfig;
test.beforeEach(async ({page})=>{
const config=new TestConfig();
    await page.goto(config.appUrl);
    homePage=new HomePage(page);
    registrationPage=new RegistrationPage(page);
})
test.afterEach(async ({page})=>{
await page.waitForTimeout(1000);
await page.close();
})



test('user registration test @master @regression @sanity',async ({page})=>{
    
      await homePage.clickMyAccount();
   await homePage.clickRegister();
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
   await registrationPage.setLastName(RandomDataUtil.getLastName());
   await registrationPage.setEmail(RandomDataUtil.getEmail());
   await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
   const password=RandomDataUtil.getPassword();
   await registrationPage.setPassword(password);
   await registrationPage.setConfirmPassword(password);
   await registrationPage.setPrivacyPolicy();
   await registrationPage.clickContinue();
   await page.waitForTimeout(1000);
//const getConfirmationMsgText=registrationPage.getConfirmationMsg();
//console.log(getConfirmationMsgText);
 //expect(getConfirmationMsgText).toContain('Your Account Has Been Created!');
   // await page.waitForTimeout(4000);







}

);
