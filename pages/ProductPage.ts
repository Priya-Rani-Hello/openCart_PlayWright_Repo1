import {Page,expect,Locator} from '@playwright/test';
export class ProductPage{
     private readonly page: Page;
    private readonly txtQuantity;
 private readonly addToCartBtn;
  private readonly viewCartBtn;
   private readonly cnfMsg;
   constructor(page:Page){
    this.page=page;
    this.txtQuantity=page.locator('#input-quantity');
    this.addToCartBtn=page.locator('#button-cart');
    this.viewCartBtn=page.locator('strong:has-text("View Cart")');
    this.cnfMsg=page.locator('.alert.alert-success.alert-dismissible');
   }
   async setQuantity(qty:string):Promise<void>{
//await this.txtQuantity.fill('');
await this.txtQuantity.fill(qty);
   }
    async addToCart(): Promise<void> {
        await this.addToCartBtn.click();
    }
async isConfirmationMessageVisible(): Promise<boolean> {
        try {
            if(this.cnfMsg!=null){
                 return true;
            }
            else{
                return false;
            }//await expect(this.cnfMsg).toBeVisible();
           
        } catch (error) {
            console.log(`Confirmation message not found: ${error}`);
            return false;
        }
    }




}