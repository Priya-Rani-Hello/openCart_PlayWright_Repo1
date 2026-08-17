# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration test
- Location: tests\AccountRegistration.spec.ts:6:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://tutorialsninja.com/demo/
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { HomePage} from '../pages/Homepage';
  3  | import { RegistrationPage } from '../pages/RegistrationPage';
  4  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  5  | import { TestConfig } from '../test.config';
  6  | test('user registration test',async ({page})=>{
  7  |     const config=new TestConfig();
> 8  |     await page.goto(config.appUrl);
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://tutorialsninja.com/demo/
  9  |     const homepage=new HomePage(page);
  10 |    await homepage.clickMyAccount();
  11 |    await homepage.clickRegister();
  12 |    const registrationPage=new RegistrationPage(page);
  13 |    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  14 |    await registrationPage.setLastName(RandomDataUtil.getLastName());
  15 |    await registrationPage.setEmail(RandomDataUtil.getEmail());
  16 |    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  17 |    const password=RandomDataUtil.getPassword();
  18 |    await registrationPage.setPassword(password);
  19 |    await registrationPage.setConfirmPassword(password);
  20 |    await registrationPage.setPrivacyPolicy();
  21 |    await registrationPage.clickContinue();
  22 | const getConfirmationMsgText=registrationPage.getConfirmationMsg();
  23 | console.log(getConfirmationMsgText);
  24 |   // expect(getConfirmationMsg).toContain("Your Account Has Been Created!");
  25 |    await page.waitForTimeout(4000);
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | }
  34 | 
  35 | );
  36 | 
```