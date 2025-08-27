import { defineConfig, devices } from '@playwright/test';

const BASEURL = 'http://localhost:4173';

export default defineConfig({
  testDir: 'tests',
  reporter: [
    ['html', { outputFolder: 'test-results/' }],
    ['dot'],
  ],

  use: {
    baseURL: BASEURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: ['**/*.desktop.spec.@(js|ts)', '**/*.all.spec.@(js|ts)'],
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
      testMatch: ['**/*.desktop.spec.@(js|ts)', '**/*.all.spec.@(js|ts)'],
    },
    {
      name: 'iPhone 15',
      use: { ...devices['iPhone 15'] },
      testMatch: ['**/*.mobile.spec.@(js|ts)', '**/*.all.spec.@(js|ts)'],
    },
    {
      name: 'Pixel 7',
      use: { ...devices['Pixel 7'] },
      testMatch: ['**/*.mobile.spec.@(js|ts)', '**/*.all.spec.@(js|ts)'],
    }
  ],

  webServer: process.env.E2E_BASE_URL
    ? undefined
    : {
        command: 'npm run preview',
        url: BASEURL,
        reuseExistingServer: true,
      },
});

