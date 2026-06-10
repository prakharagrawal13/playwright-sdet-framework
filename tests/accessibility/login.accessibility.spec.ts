import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('@accessibility Login Page', () => {
  test('Login page accessibility scan', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page }).analyze();

    // Log violations (REAL WORLD PRACTICE)
    if (results.violations.length > 0) {
      console.log(
        results.violations.map(v => ({
          id: v.id,
          impact: v.impact,
          description: v.description
        }))
      );
    }

    // ✅ Assert only critical issues
    const criticalViolations = results.violations.filter(
      v => v.impact === 'critical'
    );

    expect(criticalViolations).toEqual([]);
  });
});
