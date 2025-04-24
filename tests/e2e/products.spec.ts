import { test, expect, Page } from '@playwright/test';

test('add product to the shopping cart', async ({page}) => 
{

})

async function checkNumberOfProductsInLocalStorage(page: Page, expected: number) {
    return await page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).length === e;
    }, expected);
  }