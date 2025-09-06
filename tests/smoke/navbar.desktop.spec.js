import { test, expect } from '@playwright/test';

test.describe('Smoke - Navbar', () => {
    test('Navbar (desktop) navega a #skills', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'Habilidades'}).click();

        await expect(page).toHaveURL(/#skills/);

        await expect(page.locator('#skills')).toBeVisible();

    });
});