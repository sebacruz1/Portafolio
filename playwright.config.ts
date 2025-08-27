import { defineConfig, devices } from '@playwright/test';

const PORT_PREVIEW = 4173;
const BASEURL = 'http://localhost:4173'

export default defineConfig({

  testDir: 'tests',
  reporter:[ ['line'],
  ['html', {outputFile: 'test-results/results'}],
],
  use: {
    baseURL: BASEURL,              // permite usar page.goto('/') en los tests
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Desktop Safari', use: {...devices['Desktop Safari'] } },
    { name: 'iPhone 15', use: {...devices['iPhone 15'] } },
    { name: 'iPhone 15 Landscape', use: {...devices['iPhone 15 landscape'] } },
    { name: 'Pixel 7', use: {...devices['Pixel 7'] } },
  ],

  webServer: process.env.E2E_BASE_URL ? undefined : {
    command: 'npm run preview',         
    url: 'http://localhost:4173',
    reuseExistingServer: true,
  },
});
