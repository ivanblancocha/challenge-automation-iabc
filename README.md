# 🎭 Monnet Payment Challenge - Suite de Pruebas Automatizadas

Bienvenido a la **Suite de Pruebas Automatizadas** para Monnet Payment. Este proyecto está diseñado para demostrar capacidades en pruebas automatizadas de **API** y **UI** utilizando **Playwright** con **TypeScript**. A continuación, encontrarás todo lo necesario para ejecutar, probar y revisar los resultados de este desafío. ¡Comencemos! 🚀

---

## 📂 Estructura del Proyecto

A continuación, la estructura del proyecto para facilitar la navegación:
```plaintext

├── data                    # Contiene los datos de prueba (e.g., archivos Excel)
│   └── datos-pruebas.xlsx  # Datos de prueba para los tests de API y UI
├── pages                   # Clases del modelo POM (Page Object Model)
│   └── wikipedia-page.ts   # Interacciones con páginas de Wikipedia
├── tests                   # Contiene los archivos de pruebas
│   ├── api                 # Tests de API
│   │   ├── json-placeholder.spec.ts
│   │   └── poke-api.spec.ts
│   └── e2e                 # Tests de UI
│       └── poke-ui.spec.ts
├── utils                   # Funciones utilitarias y helpers
│   ├── api-utils.ts
│   ├── file-system-utils.ts
│   ├── files-utils.ts
│   ├── fixture-utils.ts
│   ├── json-placeholder-api-utils.ts
│   └── poke-api-utils.ts
├── .env                    # Variables de entorno
├── package.json            # Dependencias del proyecto y scripts
├── package-lock.json       # Archivo de lock de dependencias
├── playwright.config.ts    # Configuración de Playwright
└── README.md               # Estás aquí 😊
```
---

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js** (versión 16 o superior)  
- **npm** (viene incluido con Node.js)  

---

## 🛠 Configuración

	1.	Instala las dependencias:
   ```bash
   npm install
   ```


   2.	Configura las variables de entorno:
Renombra .env.example a .env y configura las siguientes variables:
```bash
SECRET_KEY=tu-clave-secreta
WIKIPEDIA_URL=https://en.wikipedia.org/wiki
IMAGE_FOLDER=images
JSON_PLACEHOLDER_BASE_URL=https://jsonplaceholder.typicode.com
JSON_PLACEHOLDER_POSTS=/posts
```
3.	Prepara los datos de prueba:

Asegúrate de que el archivo datos-pruebas.xlsx esté presente en la carpeta data. Este archivo es utilizado para las pruebas de API y UI.

## 🧪Ejecución de las Pruebas

Este proyecto está dividido en dos categorías: Pruebas de API y Pruebas de UI. A continuación, cómo ejecutarlas:

Ejecutar Todas las Pruebas

- Para ejecutar todas las pruebas (API y UI):
```
npx playwright test
```
- Ejecutar Solo las Pruebas de API
```
npx playwright test --project=API-Tests
```
- Ejecutar Solo las Pruebas de UI
```
npx playwright test --project=UI-Tests
```
## 📄 Logs, Capturas de Pantalla y Videos
	•	Logs: Los pasos y resultados de las pruebas se registran directamente en la consola.
	•	Capturas de pantalla: Se capturan automáticamente para cualquier prueba fallida y se guardan en test-results/.
	•	Videos: Se graban para pruebas fallidas y se almacenan en test-results/videos/.

## 📊 Generación y Visualización de Reportes

Después de ejecutar las pruebas, puedes generar un reporte HTML para revisar los resultados.

1. Ejecuta el siguiente comando:
```
npx playwright show-report
```

2.	Se abrirá una ventana en el navegador mostrando un reporte detallado con logs, capturas de pantalla y videos de las pruebas fallidas.

## 🔑 Características Clave
   1.	Pruebas de API:
	   •	Pruebas para las APIs de Pokémon y JSON Placeholder.
	   •	Enfoque basado en datos usando datos-pruebas.xlsx.
	   •	Validaciones para los datos de respuesta y el rendimiento.
2. Pruebas de UI:
   •  Navegación automatizada y validaciones en páginas de Wikipedia.
	•	Descarga y validación de imágenes de Pokémon.
	•	Validaciones de formato y tamaño de imágenes.
3.	Manejo de Errores:
	•	Logs, capturas de pantalla y videos para análisis.
	•	Utilidades modulares para escalabilidad.

## 🤔 Preguntas Frecuentes

¿Qué sucede si una prueba falla?
	•	Se capturan automáticamente una captura de pantalla y un video.
	•	Los logs se imprimen en la consola para facilitar la depuración.

¿Cómo se maneja la clave secreta?
	•	La clave secreta se almacena en una variable de entorno y se encripta (SHA256) antes de cada prueba.

¿Cómo puedo actualizar los datos de prueba?
	•	Simplemente edita el archivo datos-pruebas.xlsx en la carpeta data.

## 💡 Notas Finales

Este proyecto sigue buenas prácticas en pruebas automatizadas:
	•	Modelo POM (Page Object Model) para interacciones en UI.
	•	Utilidades reutilizables para solicitudes API y operaciones con archivos.
	•	Pruebas basadas en datos para escalabilidad.

Si tienes preguntas o encuentras algún problema, no dudes en contactarme. ¡Buena suerte revisando el desafío! 🚀



