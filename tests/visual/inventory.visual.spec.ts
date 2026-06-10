import { test, expect } from '@playwright/test';

test.describe('@visual Inventory Page', () => {
  test('Inventory UI should not change', async ({ page }) => {
    test.skip(process.env.CI === 'true', 'Skip visual tests in CI');

    await page.goto('/inventory.html');

    await expect(page).toHaveScreenshot('inventory-page.png', {
      fullPage: true,
      animations: 'disabled',
      threshold: 0.2
    });
  });
});