import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  projects: [
    {
      name: 'API-Tests',
      testDir: './tests/api', // Carpeta para los tests de API
      use: {
        browserName: 'chromium', // Los tests de API no necesitan navegador, pero es obligatorio definir uno
      },
    },
    {
      name: 'UI-Tests',
      testDir: './tests/e2e', // Carpeta para los tests de UI
      use: {
        browserName: 'chromium', // Ejecutar con Chromium
        headless: true, // UI normalmente se ejecuta sin cabeza
      },
    },
  ],
});