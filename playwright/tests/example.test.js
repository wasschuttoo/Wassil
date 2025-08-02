// tests/example.spec.js
const { test, expect } = require('@playwright/test');
const config = require('../playwright.config');

test('homepage should have correct title', async ({ page }) => {
  await page.goto(config.use.baseURL);
  await expect(page).toHaveTitle(/Wassil Chuttoo/i); // Update based on your page
});

test('career section should display correct information', async ({ page }) => {
  await page.goto(config.use.baseURL);
  const careerSection = await page.locator('.career-section');
  await expect(careerSection).toBeVisible();
  await expect(careerSection).toHaveText(/Your Career Information/i);
});
