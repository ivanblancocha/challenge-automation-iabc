General
1. Se podría hacer uso del fixture automáticamente a través del uso de `auto: true` (ver: https://playwright.dev/docs/test-fixtures#automatic-fixtures).
2. Existen awaits innecesarios, por ejemplo, al hacer un expect o al hacer saveImage.
3. Hay algunos errores de tipado, por ejemplo, en `downloadInfoBoxImage` al pasar como parámetro una variable de entorno.

Prueba API
1. Se usa axios a pesar de que Playwright ofrezca la posibilidad de interactuar directamente con una api.

Parte #1
1. Se hace uso de arrayContaining, esto implica que si en las habilidades obtenidas de la API hubieran más elementos que los contenidos en el Excel, la prueba se tomaría como passed en vez de failed (falso positivo).

Prueba web
1. Se puede separar mejor las responsabilidades en WikipediaPage. Un archivo descargado no algo propio de la página. Se podría crear una clase "File" para instanciar un objeto que sí contenga la metadata del archivo descargado. Ver principio de responsabilidad única de SOLID.
2. Se omitió el console log de quién realizó el dibujo.
3. La validación de la extensión es case sensitive cuando no debería de serlo.