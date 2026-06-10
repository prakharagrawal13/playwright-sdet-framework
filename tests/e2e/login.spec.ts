import { test, expect } from '../../fixtures/testFixtures';
import data from '../../fixtures/testData.json';

test.describe('@smoke Login Tests', () => {
  test('Valid user login', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(
      data.validUser.username,
      data.validUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });
});