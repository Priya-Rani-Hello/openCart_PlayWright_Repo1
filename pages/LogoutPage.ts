import {Page,expect,Locator} from '@playwright/test'
import { HomePage } from './Homepage';
export class LogoutPage{
    private readonly page:Page;
    //private readonly btnContinue:Locator;
    constructor(page:Page){
this.page=page;    }
/*async clickContinue():Promise<HomePage>{
await this.btnContinue.click();
return new HomePage(this.page);
}*/
}