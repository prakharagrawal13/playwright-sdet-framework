import { test, expect } from '@playwright/test';

test.describe('@visual Inventory Page', () => {
  test('Inventory UI should not change', async ({ page }) => {
    await page.goto('/inventory.html');

    await expect(page).toHaveScreenshot('inventory-page.png', {
      fullPage: true
    });
  });
});