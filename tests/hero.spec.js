// @ts-check

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://sokrady.dev');

    await expect(page).toHaveTitle(/Sokrady/);
});

test('my work button', async ({ page }) => {
    await page.goto('https://sokrady.dev');

    await page.getByRole('button', { name: 'View My Work' }).click();

    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
});

test('contact button', async ({ page }) => {
    await page.goto('https://sokrady.dev');

    await page.getByRole('button', { name: 'Get In Touch' }).click();

    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
});