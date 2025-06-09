import { test, expect } from '@playwright/test';
//import {LoginPage} from '../../page-objects/loginPage'
import { PageManager } from '../../page-objects/pageManager';
import { faker, tr } from '@faker-js/faker';

test.describe('login tests', () => {
    test.beforeEach(async ({page}) => {
      await page.goto('https://www.automationexercise.com');
      let element = page.locator('.fc-button-label', {hasText:'Consent'})
      if(!process.env.CI)
      {
        await element.click()
      }
  });

  test.afterEach(async ({page}) => {
    await page.close();
  });

  test('test case 1: register user', {
  }, async ({ page }) => {

    

    await expect(page.locator('.logo')).toBeVisible();

    await page.locator(`[href='/login']`).click();

    await expect(page.locator('.signup-form', {hasText: 'New User Signup!'})).toBeVisible()

    await page.getByTestId('signup-name').fill(faker.internet.username())
    await page.getByTestId('signup-email').fill(faker.internet.email())
    await page.getByTestId('signup-button').click()

    await expect(page.locator('.login-form', {hasText: 'Enter Account Information'})).toBeVisible()

    await page.locator('.radio-inline',{hasText: 'Mr.'}).locator('.radio').check()

    await page.getByTestId('name').fill(faker.internet.username())  //TODO: Use faker

    await page.getByTestId('password').fill(faker.internet.password())

    await page.getByTestId('first_name').fill(faker.person.firstName())

    await page.getByTestId('last_name').fill(faker.person.lastName())

    await page.getByTestId('address').fill(faker.location.street())

    await page.getByLabel('country').selectOption('United States');

    await page.getByTestId('state').fill(faker.location.state())
    await page.getByTestId('city').fill(faker.location.city())
    await page.getByTestId('zipcode').fill(faker.location.zipCode())

    await page.getByTestId('mobile_number').fill(faker.phone.number({ style: 'national' }))

    await page.getByTestId('create-account').click()
    await page.getByTestId('continue-button').click()

    await page.locator(`[href='/delete_account']`).click()

    await expect (page.getByTestId('account-deleted')).toBeVisible()
  });
});

