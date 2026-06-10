# Playwright SDET Interview Questions & Answers

## Core Playwright

### 1. Why Playwright over Selenium or Cypress?
Playwright provides auto-waiting, native cross-browser support (Chromium, Firefox, WebKit), built-in parallelism, API testing support, and better handling of modern web apps compared to Selenium and Cypress.

---

### 2. What is auto-waiting in Playwright?
Playwright automatically waits for elements to be visible, enabled, stable, and attached to the DOM before performing actions or assertions.

---

### 3. Difference between locator() and elementHandle?
Locators are re-evaluated before every action and support auto-retries, making them more reliable than static element handles.

---

## SDET-Level Concepts

### 4. What is Page Object Model and why did you use it?
POM separates test logic from UI actions, improving readability, maintainability, and reusability.

---

### 5. How did you implement API + UI hybrid testing?
I used Playwright’s APIRequestContext and storageState to authenticate once and reuse sessions across UI tests, reducing execution time and flakiness.

---

### 6. How do you handle flaky tests?
By using stable locators, auto-waits, retries only in CI, session reuse, and debugging via Playwright traces instead of hard waits.

---

### 7. What are custom fixtures in Playwright?
Custom fixtures allow injecting page objects, test data, or utilities into tests, reducing duplication and improving scalability.

---

## CI/CD & Quality

### 8. How is Playwright integrated with CI/CD?
Using GitHub Actions to install dependencies, run tests headlessly in parallel, retry failures, and upload HTML reports as artifacts.

---

### 9. What happens when a test fails in CI?
Playwright captures screenshots, videos, and traces, which are uploaded as artifacts for root cause analysis.

---

## Advanced Testing

### 10. What is visual regression testing?
It compares current UI screenshots against baseline snapshots to detect unintended UI changes.

---

### 11. How did you implement accessibility testing?
By integrating Axe with Playwright to detect WCAG violations and fail tests when accessibility issues are found.

---

## Scenario-Based

### 12. A test passes locally but fails in CI. What do you do?
I analyze CI artifacts, check environment differences, validate test data, and fix the root cause without adding hard waits.

---

## Closing

### 13. What would you improve next?
Contract testing, test observability dashboards, and better quality metrics integration.