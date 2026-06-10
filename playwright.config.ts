import { defineConfig } from '@playwright/test';
import env from './utils/env';

export default defineConfig({
  retries: process.env.CI ? 2 : 1,
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
  use: {
    baseURL: env.baseURL,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});