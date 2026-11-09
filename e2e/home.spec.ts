import { test, expect } from '@playwright/test';

test('home page renders the terminal and runs a command', async ({ page }) => {
  const pageErrors: Error[] = [];
  page.on('pageerror', (error) => pageErrors.push(error));

  await page.goto('/');

  await expect(page).toHaveTitle('Joff Tiquez: Startup CTO, Vue Stripe Creator, OSSPH Founder');
  await expect(page.getByText("Hi, I'm Joff")).toBeVisible();

  // The page focuses the prompt once Vue has mounted, so this also waits for hydration.
  const prompt = page.getByLabel('Enter terminal command');
  await expect(prompt).toBeFocused();

  await prompt.fill('help');
  await prompt.press('Enter');
  const output = page.getByRole('log');
  await expect(output).toContainText('The blogs command - Navigate to blog posts.');

  await prompt.fill('whoami');
  await prompt.press('Enter');
  await expect(output).toContainText('Vue.js Community Expert for Stripe');

  await prompt.fill('nope');
  await prompt.press('Enter');
  await expect(output.getByRole('alert')).toHaveText("Command 'nope' not found. Type 'help' to see available commands.");

  expect(pageErrors).toEqual([]);
});
