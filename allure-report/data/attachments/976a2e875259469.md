# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> user login test
- Location: tests\Login.spec.ts:24:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#input-email')

```

# Test source

```ts
  1  | import {Page,expect,Locator} from '@playwright/test'
  2  | export class LoginPage{
  3  | private readonly page:Page;
  4  | private readonly txtEmailAddress:Locator;
  5  | private readonly txtPassword:Locator;
  6  | private readonly btnLogin:Locator;
  7  | private readonly txtErrorMsg :Locator;
  8  | constructor(page:Page){
  9  |     this.page=page;
  10 |     this.txtEmailAddress=page.locator("#input-email");
  11 |     this.txtPassword=page.locator("#input-password");
  12 |     this.btnLogin=page.locator("input[value='Login']");
  13 |     this.txtErrorMsg=page.locator(".alert.alert-danger.alert-dismissible");
  14 | }
  15 |     async setEmail(email:string){
  16 |        await this.txtEmailAddress.fill(email);
  17 |     }
  18 | async setPassword(password:string){
  19 |        await this.txtPassword.fill(password);
  20 |     }
  21 | async clickLogin(){
  22 |     this.btnLogin.click();
  23 | }
  24 | async login(email:string,password:string){
> 25 |     this.txtEmailAddress.fill(email);
     |                          ^ Error: locator.fill: Test ended.
  26 |     this.txtPassword.fill(password);
  27 |     this.btnLogin.click();
  28 | }
  29 | async getLoginErrorMessage():Promise<null|string>{
  30 |     return (this.txtErrorMsg.textContent());
  31 | 
  32 | }
  33 | 
  34 | }
```