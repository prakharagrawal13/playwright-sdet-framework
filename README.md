## Why This Project?
This framework demonstrates real-world SDET automation practices including
API-assisted setup, visual regression, accessibility testing, and CI integration.
It is designed to be scalable, stable, and production-ready.

## Test Types
| Type | Command |
|----|----|
| E2E | npx playwright test |
| Smoke | npx playwright test --grep @smoke |
| Visual | npx playwright test tests/visual |
| Accessibility | npx playwright test tests/accessibility |

