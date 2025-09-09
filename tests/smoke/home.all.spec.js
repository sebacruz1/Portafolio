import { test, expect } from "@playwright/test";

test.describe("Smoke - Home", () => {
    test("Hero visible con title, name, subtitle y link", async ({ page }) => {

        await page.goto("/", { waitUntil: "networkidle" });

        const hero = page.locator("section#hero");
        await expect(hero).toBeVisible();

        await expect(hero.getByRole("heading", { level: 1 })).toHaveText(/seba/i);

        await expect(hero.getByText(/Desarrollador de Software/i)).toBeVisible();

        const contactLink = hero.getByTestId("hero-contact");
        await expect(contactLink).toBeVisible();
        await expect(contactLink).toHaveAttribute("href", "#contacto");
    });
});
