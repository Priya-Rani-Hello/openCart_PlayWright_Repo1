# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Add product to cart test @master @regression
- Location: tests\AddToCart.spec.ts:43:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-quantity')

```

# Test source

```ts
  1  | import {Page,expect,Locator} from '@playwright/test';
  2  | export class ProductPage{
  3  |      private readonly page: Page;
  4  |     private readonly txtQuantity;
  5  |  private readonly addToCartBtn;
  6  |   private readonly viewCartBtn;
  7  |    private readonly cnfMsg;
  8  |    constructor(page:Page){
  9  |     this.page=page;
  10 |     this.txtQuantity=page.locator('#input-quantity');
  11 |     this.addToCartBtn=page.locator('#button-cart');
  12 |     this.viewCartBtn=page.locator('strong:has-text("View Cart")');
  13 |     this.cnfMsg=page.locator('.alert.alert-success.alert-dismissible');
  14 |    }
  15 |    async setQuantity(qty:string):Promise<void>{
> 16 | await this.txtQuantity.fill('');
     |                        ^ Error: locator.fill: Target page, context or browser has been closed
  17 | await this.txtQuantity.fill(qty);
  18 |    }
  19 |     async addToCart(): Promise<void> {
  20 |         await this.addToCartBtn.click();
  21 |     }
  22 | async isConfirmationMessageVisible(): Promise<boolean> {
  23 |         try {
  24 |             if(this.cnfMsg!=null){
  25 |                  return true;
  26 |             }
  27 |             else{
  28 |                 return false;
  29 |             }//await expect(this.cnfMsg).toBeVisible();
  30 |            
  31 |         } catch (error) {
  32 |             console.log(`Confirmation message not found: ${error}`);
  33 |             return false;
  34 |         }
  35 |     }
  36 | 
  37 | 
  38 | 
  39 | 
  40 | }
```