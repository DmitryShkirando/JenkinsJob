# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playTest.spec.ts >> Header Navigation Bar Suite >> Checking names of buttons
- Location: tests\playTest.spec.ts:37:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('link', { name: 'Playwright logo Playwright12' })
Expected substring: "Playwright"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('link', { name: 'Playwright logo Playwright12' }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'Playwright logo Playwright12' })

```

```yaml
- region "Skip to main content":
  - link "Skip to main content":
    - /url: "#__docusaurus_skipToContent_fallback"
- navigation "Main":
  - link "Playwright logo Playwright":
    - /url: /
    - img "Playwright logo"
    - text: Playwright
  - link "Docs":
    - /url: /docs/intro
  - link "MCP":
    - /url: /mcp/introduction
  - link "CLI":
    - /url: /agent-cli/introduction
  - link "API":
    - /url: /docs/api/class-playwright
  - button "Node.js"
  - link "GitHub repository":
    - /url: https://github.com/microsoft/playwright
  - link "Discord server":
    - /url: https://aka.ms/playwright/discord
  - button "Switch between dark and light mode (currently system mode)"
  - button "Search (Control+k)": Search Ctrl K
- banner:
  - heading "Playwright enables reliable web automation for testing, scripting, and AI agents." [level=1]
  - paragraph:
    - text: One API to drive Chromium, Firefox, and WebKit — in your tests, your scripts, and your agent workflows. Available for
    - link "TypeScript":
      - /url: https://playwright.dev/docs/intro
    - text: ","
    - link "Python":
      - /url: https://playwright.dev/python/docs/intro
    - text: ","
    - link ".NET":
      - /url: https://playwright.dev/dotnet/docs/intro
    - text: ", and"
    - link "Java":
      - /url: https://playwright.dev/java/docs/intro
    - text: .
  - link "Get started":
    - /url: /docs/intro
  - link "Star microsoft/playwright on GitHub":
    - /url: https://github.com/microsoft/playwright
    - text: Star
  - link "95k+ stargazers on GitHub":
    - /url: https://github.com/microsoft/playwright/stargazers
    - text: 95k+
- main:
  - heading "Playwright Test" [level=3]
  - paragraph: Full-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.
  - code: npm init playwright@latest
  - link "Testing documentation":
    - /url: /docs/intro
  - heading "Playwright CLI" [level=3]
  - paragraph: Token-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.
  - code: npm i -g @playwright/cli@latest
  - link "CLI documentation":
    - /url: /docs/getting-started-cli
  - heading "Playwright MCP" [level=3]
  - paragraph: Model Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.
  - code: npx @playwright/mcp@latest
  - link "MCP documentation":
    - /url: /docs/getting-started-mcp
  - heading "Built for testing" [level=2]
  - heading "Auto-wait and web-first assertions" [level=4]
  - paragraph: Playwright waits for elements to be actionable before performing actions. Assertions automatically retry until conditions are met. No artificial timeouts, no flaky tests.
  - heading "Test isolation" [level=4]
  - paragraph: Each test gets a fresh browser context — equivalent to a brand new browser profile. Full isolation with near-zero overhead. Save authentication state once and reuse it across tests.
  - heading "Resilient locators" [level=4]
  - paragraph:
    - text: "Find elements with selectors that mirror how users see the page:"
    - code: getByRole
    - text: ","
    - code: getByLabel
    - text: ","
    - code: getByPlaceholder
    - text: ","
    - code: getByTestId
    - text: . No brittle CSS paths.
  - heading "Parallelism and sharding" [level=4]
  - paragraph: Tests run in parallel by default across all configured browsers. Shard across multiple machines for faster CI. Full cross-browser coverage on every commit.
  - heading "Built for AI agents" [level=2]
  - heading "Accessibility snapshots, not screenshots" [level=4]
  - paragraph: Agents interact with pages through structured accessibility trees — element roles, names, and refs. Deterministic and unambiguous, no vision models required.
  - heading "MCP server" [level=4]
  - paragraph:
    - text: Drop-in
    - link "Model Context Protocol":
      - /url: https://modelcontextprotocol.io
    - text: server for VS Code, Cursor, Claude Desktop, Windsurf, and any MCP client. Full browser control through standard tool calls.
  - heading "CLI for coding agents" [level=4]
  - paragraph: Token-efficient command-line interface with installable skills. Purpose-built for Claude Code, GitHub Copilot, and similar coding agents that need to balance browser automation with large codebases.
  - heading "Session monitoring" [level=4]
  - paragraph: Visual dashboard with live screencast previews of all running browser sessions. Click any session to zoom in and take control.
  - heading "Powerful tooling" [level=2]
  - heading "Test generator" [level=4]:
    - link "Test generator":
      - /url: docs/codegen
  - paragraph: Record your actions in the browser and Playwright writes the test code. Generate assertions from the recording toolbar. Pick locators by clicking on elements.
  - heading "Trace Viewer" [level=4]:
    - link "Trace Viewer":
      - /url: docs/trace-viewer-intro
  - paragraph: Full timeline of test execution with DOM snapshots, network requests, console logs, and screenshots at every step. Investigate failures without re-running.
  - heading "VS Code extension" [level=4]:
    - link "VS Code extension":
      - /url: docs/getting-started-vscode
  - paragraph: Run, debug, and generate tests directly in the editor. Set breakpoints, live-inspect locators in the browser, and view full execution traces in the sidebar.
  - img "Chromium, Firefox, WebKit"
  - paragraph:
    - text: Any browser. Any platform. Chromium, Firefox, and WebKit on Linux, macOS, and Windows. Headless and headed. Also available for
    - link "Python":
      - /url: https://playwright.dev/python/docs/intro
    - text: ","
    - link ".NET":
      - /url: https://playwright.dev/dotnet/docs/intro
    - text: ", and"
    - link "Java":
      - /url: https://playwright.dev/java/docs/intro
    - text: .
  - heading "Chosen by companies and open source projects" [level=2]
  - list:
    - listitem:
      - link "VS Code":
        - /url: https://code.visualstudio.com
        - img "VS Code"
    - listitem:
      - link "Bing":
        - /url: https://bing.com
        - img "Bing"
    - listitem:
      - link "Outlook":
        - /url: https://outlook.com
        - img "Outlook"
    - listitem:
      - link "Disney+ Hotstar":
        - /url: https://www.hotstar.com/
        - img "Disney+ Hotstar"
    - listitem:
      - link "Material UI":
        - /url: https://github.com/mui-org/material-ui
        - img "Material UI"
    - listitem:
      - link "ING":
        - /url: https://github.com/ing-bank/lion
        - img "ING"
    - listitem:
      - link "Adobe":
        - /url: https://github.com/adobe/spectrum-web-components
        - img "Adobe"
    - listitem:
      - link "React Navigation":
        - /url: https://github.com/react-navigation/react-navigation
        - img "React Navigation"
    - listitem:
      - link "Accessibility Insights":
        - /url: https://accessibilityinsights.io/
        - img "Accessibility Insights"
- contentinfo:
  - text: Learn
  - list:
    - listitem:
      - link "Getting started":
        - /url: /docs/intro
    - listitem:
      - link "Playwright Training(opens in new tab)":
        - /url: https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
        - text: Playwright Training
        - img "(opens in new tab)"
    - listitem:
      - link "Learn Videos":
        - /url: /community/learn-videos
    - listitem:
      - link "Feature Videos":
        - /url: /community/feature-videos
  - text: Community
  - list:
    - listitem:
      - link "Stack Overflow(opens in new tab)":
        - /url: https://stackoverflow.com/questions/tagged/playwright
        - text: Stack Overflow
        - img "(opens in new tab)"
    - listitem:
      - link "Discord(opens in new tab)":
        - /url: https://aka.ms/playwright/discord
        - text: Discord
        - img "(opens in new tab)"
    - listitem:
      - link "X(opens in new tab)":
        - /url: https://x.com/playwrightweb
        - text: X
        - img "(opens in new tab)"
    - listitem:
      - link "LinkedIn(opens in new tab)":
        - /url: https://www.linkedin.com/company/playwrightweb
        - text: LinkedIn
        - img "(opens in new tab)"
  - text: More
  - list:
    - listitem:
      - link "GitHub(opens in new tab)":
        - /url: https://github.com/microsoft/playwright
        - text: GitHub
        - img "(opens in new tab)"
    - listitem:
      - link "YouTube(opens in new tab)":
        - /url: https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
        - text: YouTube
        - img "(opens in new tab)"
    - listitem:
      - link "Blog(opens in new tab)":
        - /url: https://dev.to/playwright
        - text: Blog
        - img "(opens in new tab)"
    - listitem:
      - link "Ambassadors":
        - /url: /community/ambassadors
    - listitem:
      - link "Microsoft Privacy Statement(opens in new tab)":
        - /url: https://go.microsoft.com/fwlink/?LinkId=521839
        - text: Microsoft Privacy Statement
        - img "(opens in new tab)"
  - text: Copyright © 2026 Microsoft
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // 1. TEST SUITE
  4  | test.describe('Header Navigation Bar Suite', () => {
  5  |   test.beforeEach(async ({ page }) => {
  6  |     await test.step('Перейти на главную страницу', async () => {
  7  |       await page.goto('https://playwright.dev/');
  8  |     });
  9  |   });
  10 | 
  11 |   // 2. TEST CASE #1
  12 |   test('Checking showing top bar', async ({ page }) => {
  13 |     // 3. STEPS внутри тест-кейса
  14 |     await test.step('Проверка видимости основного логотипа', async () => {
  15 |       await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  16 |     });
  17 | 
  18 |     await test.step('Проверка видимости элементов навигации', async () => {
  19 |       await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  20 |       await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  21 |       await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  22 |       await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  23 |       await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  24 |     });
  25 | 
  26 |     await test.step('Проверка видимости внешних ссылок и кнопок', async () => {
  27 |       await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  28 |       await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  29 |       await expect(
  30 |         page.getByRole('button', { name: 'Switch between dark and light' }),
  31 |       ).toBeVisible();
  32 |       await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
  33 |     });
  34 |   });
  35 | 
  36 |   // 2. TEST CASE #2
  37 |   test('Checking names of buttons', async ({ page }) => {
  38 |     await test.step('Проверка текста на кнопках и ссылках', async () => {
> 39 |       await expect(page.getByRole('link', { name: 'Playwright logo Playwright12' })).toContainText(
     |                                                                                      ^ Error: expect(locator).toContainText(expected) failed
  40 |         'Playwright',
  41 |       );
  42 |       await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  43 |       await expect(page.getByRole('link', { name: 'MCP', exact: true })).toContainText('MCP');
  44 |       await expect(page.getByRole('link', { name: 'CLI', exact: true })).toContainText('CLI');
  45 |       await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  46 |       await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  47 |     });
  48 |   });
  49 | 
  50 |   // 2. TEST CASE #3
  51 |   test('Checking href', async ({ page }) => {
  52 |     await test.step('Проверка атрибутов href у ссылок хедера', async () => {
  53 |       await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
  54 |         'href',
  55 |         '/',
  56 |       );
  57 |       await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  58 |     });
  59 |   });
  60 | 
  61 |   // 2. TEST CASE #4
  62 |   test('Checking light mode', async ({ page }) => {
  63 |     await test.step('Переключить тему на тёмную двойным кликом', async () => {
  64 |       await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();
  65 |     });
  66 | 
  67 |     await test.step('Проверить значение атрибута data-theme в HTML', async () => {
  68 |       await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  69 |     });
  70 |   });
  71 | });
  72 | 
```