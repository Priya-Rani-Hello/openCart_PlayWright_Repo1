# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SearchProduct.spec.ts >> Search Products
- Location: tests\SearchProduct.spec.ts:19:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { TestConfig } from '../test.config';
  3  | import { HomePage } from '../pages/Homepage';
  4  | import { SearchResultPage } from '../pages/SearchResultPage';
  5  | 
  6  | let config:TestConfig;
  7  | let homePage:HomePage;
  8  | let searchResultPage:SearchResultPage;
  9  | test.beforeEach(async({page})=>{
  10 |      config=new TestConfig();
  11 |         await page.goto(config.appUrl);
  12 |         homePage=new HomePage(page);
  13 |         searchResultPage=new SearchResultPage(page);
  14 | 
  15 | });
  16 | test.afterEach(async({page})=>{
  17 |     await page.close();
  18 | })
  19 | test('Search Products',async({page})=>{
  20 |     homePage.enterProductName(config.productName);
  21 |     homePage.clickSearch();
  22 | expect(await searchResultPage.isSearchResultPageExist()).toBeTruthy();
  23 | const isProductFound = await searchResultPage.isProductExist(config.productName);
> 24 |   expect(isProductFound).toBeTruthy();
     |                          ^ Error: expect(received).toBeTruthy()
  25 | })
```