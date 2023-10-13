import { test, expect } from '@playwright/test';

test('Email válido @fast', async ({ page }) => {

  await page.goto('/forgot_password');
  await page.getByLabel('E-mail').fill('marina.bendetti@gmail.com');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect(page.locator('id=flash')).toContainText(
    'You logged into a secure area!'
  );
});

test('validar e-mail invalido @fast', async ({
  page
}) => {
  await page.goto('/forgot_password');
  await page.getByLabel('E-mail').fill('marina.bendetti@gmail.com');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect(page.locator('id=flash')).toContainText(
    'Your username is invalid!'
  );
});

