import {test,expect} from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/Homepage';
import { SearchResultPage } from '../pages/SearchResultPage';

let config:TestConfig;
let homePage:HomePage;
let searchResultPage:SearchResultPage;
test.beforeEach(async({page})=>{
     config=new TestConfig();
        await page.goto(config.appUrl);
        homePage=new HomePage(page);
        searchResultPage=new SearchResultPage(page);

});
test.afterEach(async({page})=>{
    await page.close();
})
test('Search Products',async({page})=>{
    const productNameValue=config.productName;
    homePage.enterProductName(productNameValue);
    homePage.clickSearch();
expect(await searchResultPage.isSearchResultPageExist()).toBeTruthy();
const isProductFound = await searchResultPage.isProductExist(productNameValue);
expect(isProductFound).toBeTruthy();
 // expect(await searchResultPage.isProductExist(productNameValue)).toBeTruthy();
});