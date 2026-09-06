import { test, expect } from '@playwright/test';

// 1. TEST SUITE
test.describe('Header Navigation Bar Suite', () => {
  test.beforeEach(async ({ page }) => {
    await test.step('Перейти на главную страницу', async () => {
      await page.goto('https://playwright.dev/');
    });
  });

  // 2. TEST CASE #1
  test('Checking showing top bar', async ({ page }) => {
    // 3. STEPS внутри тест-кейса
    await test.step('Проверка видимости основного логотипа', async () => {
      await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
    });

    await test.step('Проверка видимости элементов навигации', async () => {
      await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
      await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    });

    await test.step('Проверка видимости внешних ссылок и кнопок', async () => {
      await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Switch between dark and light' }),
      ).toBeVisible();
      await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
    });
  });

  // 2. TEST CASE #2
  test('Checking names of buttons', async ({ page }) => {
    await test.step('Проверка текста на кнопках и ссылках', async () => {
      await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
        'Playwright',
      );
      await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
      await expect(page.getByRole('link', { name: 'MCP', exact: true })).toContainText('MCP');
      await expect(page.getByRole('link', { name: 'CLI', exact: true })).toContainText('CLI');
      await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
      await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
    });
  });

  // 2. TEST CASE #3
  test('Checking href', async ({ page }) => {
    await test.step('Проверка атрибутов href у ссылок хедера', async () => {
      await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
        'href',
        '/',
      );
      await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    });
  });
  // test.skip('Checking skip', async ({ page }) => {
  //   await test.step('Проверка атрибутов href у ссылок хедера', async () => {
  //     await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
  //       'href',
  //       '/',
  //     );
  //     await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  //   });
  // });

  // 2. TEST CASE #4
  test('Checking light mode', async ({ page }) => {
    await test.step('Переключить тему на тёмную двойным кликом', async () => {
      await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();
    });

    await test.step('Проверить значение атрибута data-theme в HTML', async () => {
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    });
  });
});
