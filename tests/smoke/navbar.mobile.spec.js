import { test, expect } from '@playwright/test';

const openMenu = async (page) => {
  const openBtn = page.getByRole('button', { name: /abrir menú/i });
  await expect(openBtn).toBeVisible();
  await expect(openBtn).toHaveAttribute('aria-expanded', 'false');

  await openBtn.click();

  const closeBtn = page.getByRole('button', { name: /cerrar menú/i });
  await expect(closeBtn).toBeVisible();
  await expect(closeBtn).toHaveAttribute('aria-expanded', 'true');

  // El overlay debe estar “activo”
  const overlay = page.locator('#mobile-menu');
  await expect(overlay).toBeVisible(); // visible en el DOM
  // Como usas transiciones por clase, verificamos la clase explícitamente:
  await expect(overlay).toHaveClass(/opacity-100/);
};

test.describe('Navbar (mobile)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('abre el menú y muestra los links esperados', async ({ page }) => {
    await openMenu(page);

    await expect(page.getByRole('link', { name: 'Inicio' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sobre Mí' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Habilidades' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contacto' })).toBeVisible();
  });

  test('navega a #skills y cierra el menú al hacer click', async ({ page }) => {
    await openMenu(page);

    await page.getByRole('link', { name: 'Habilidades' }).click();

    await expect(page).toHaveURL(/#skills$/);

    const skills = page.locator('#skills');
    await expect(skills).toBeVisible();

    const openBtn = page.getByRole('button', { name: /abrir menú/i });
    await expect(openBtn).toBeVisible();
    await expect(openBtn).toHaveAttribute('aria-expanded', 'false');

    const overlay = page.locator('#mobile-menu');
    await expect(overlay).toHaveClass(/opacity-0/);
  });

  test('toggle: abrir y cerrar con el botón hamburguesa', async ({ page }) => {
    await openMenu(page);

    const closeBtn = page.getByRole('button', { name: /cerrar menú/i });
    await closeBtn.click();

    const openBtn = page.getByRole('button', { name: /abrir menú/i });
    await expect(openBtn).toBeVisible();
    await expect(openBtn).toHaveAttribute('aria-expanded', 'false');

    const overlay = page.locator('#mobile-menu');
    await expect(overlay).toHaveClass(/opacity-0/);
  });
});
