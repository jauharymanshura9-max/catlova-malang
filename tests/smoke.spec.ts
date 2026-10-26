import { test, expect } from "@playwright/test";

test("home load", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/CatLova/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /Chat WA/i }).first()).toBeVisible();
});

test("WA link valid", async ({ page }) => {
  await page.goto("/");
  const wa = page.locator('a[href*="wa.me/6287752051970"]').first();
  await expect(wa).toHaveAttribute("href", /wa\.me\/6287752051970/);
});

test("form submit redirect WA", async ({ page }) => {
  await page.goto("/harga");
  await page.fill("#nama", "Test");
  await page.fill("#wa", "081234567890");
  await page.selectOption("#layanan", { index: 1 });
  await page.fill("#tanggal", "2026-11-01");
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click('button[type="submit"]'),
  ]);
  await expect(popup).toHaveURL(/6287752051970/);
});

test("404 page", async ({ page }) => {
  await page.goto("/tidak-ada");
  await expect(page.getByText("Halaman tidak ditemukan")).toBeVisible();
  await expect(page.getByRole("link", { name: /Kembali ke Home/i })).toBeVisible();
});
