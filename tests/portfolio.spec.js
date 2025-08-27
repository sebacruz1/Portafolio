import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Home carga y muestra "Sobre mí"', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /sobre mí/i })).toBeVisible();

  // sin errores de consola
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  expect(errors).toEqual([]);
});

test('Navegación al #skills funciona', async ({ page }) => {
  await page.goto('/');
  await page.locator('a[href="#skills"]').first().click();
  await expect(page.locator('#skills')).toBeVisible();
  await expect(page).toHaveURL(/#skills$/);
});

test('Contacto valida y envía (mock Formspree)', async ({ page }) => {
  // Intercepta tu endpoint de Formspree para no hacer request real
  await page.route('**/f/mblkdnoq', route =>
    route.fulfill({ status: 200, body: '{}' })
  );

  await page.goto('/#contacto');
  await page.fill('#name', 'Sebastián Cruz');
  await page.fill('#email', 'test@example.com');
  await page.fill('#message', 'Hola, buen portfolio.');
  await page.getByRole('button', { name: /enviar/i }).click();

  // Toast de éxito
  await expect(page.getByText(/mensaje enviado/i)).toBeVisible();
});

test('Accesibilidad básica sin violaciones serias', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter(v => ['serious','critical'].includes(v.impact));
  expect(serious, JSON.stringify(serious, null, 2)).toHaveLength(0);
});
