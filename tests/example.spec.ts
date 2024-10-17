import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByTestId('autocomplete-input').click();
  await page.getByRole('option', { name: 'One' }).click();
  await page.locator('div').filter({ hasText: 'Number' }).first().click();
  await page.getByTestId('autocomplete-option').click();
  await page.locator('div').filter({ hasText: 'Toppings' }).nth(2).click();
  await page.getByRole('option', { name: 'Onion' }).click();
  await page.getByRole('option', { name: 'Pepperoni' }).locator('mat-pseudo-checkbox').click();
  await page.getByText('Sausage').click();
  await page.locator('.cdk-overlay-backdrop').click();
});