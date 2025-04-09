import { test, expect } from '@playwright/test';
import {LoginPage} from '../../page-objects/loginPage'

test.describe('login tests', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test.afterEach(async ({page}) => {
    await page.close();
  });

  test('standart user login', {
    tag: '@smoke'
  }, async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.Login('standard_user', 'secret_sauce');
    
    await expect(page.getByTestId('inventory-container')).toBeVisible({timeout: 5000});
  });

  test('locked_out_user login', {
    tag: '@smoke'
  }, async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.Login('locked_out_user', 'secret_sauce');
    
    await expect(page.getByTestId('error')).toBeVisible();
  }); 

  test('problem_user login', {
    tag: '@smoke'
  }, async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.Login('problem_user', 'secret_sauce');
    const elements = await page.locator('img.inventory_item_img');

    await expect.soft(elements).toHaveCount(6);
    //check all the products have the same picture for the 'problem' user
    for (const el of await elements.all())
    {
      await expect( await el.getAttribute('src')).toContain('/static/media/sl-404.168b1cce.jpg');
    }
    
  });
});

