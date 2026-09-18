import { test, expect } from "@playwright/test";

test("redirects the bare domain to the default locale", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/pl$/);
});

test("main nav renders and links resolve for both locales", async ({
  page,
}) => {
  for (const locale of ["pl", "en"]) {
    await page.goto(`/${locale}`);
    await expect(page.getByRole("banner")).toBeVisible();

    const menuLink = page.getByRole("link", { name: /menu/i }).first();
    await menuLink.click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/menu$`));
  }
});

test("english locale loads the homepage", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
