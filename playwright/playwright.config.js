/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  outputDir: './test-results/',
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL: 'https://wasschuttoo.github.io/Wassil', // Change if needed
  },
};

module.exports = config;    
