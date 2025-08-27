import { test, expect } from '@playwright/test';

test.describe('Smoke - Home', () => {
	test('Home carga sin errores', async ({ page }) => {
		const erroresConsola = [];
		page.on('console', msg => {
			if (msg.type() === 'error') erroresConsola.push(msg.text());
		})
		await page.goto('/');
		const heading = page.getByRole('heading', { level: 1 });
		await expect(heading).toBeVisible();
		await expect(heading).toContainText(/Seba/);

	});

});

