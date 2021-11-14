# Cypress con Cucumber

## Organización

De aquí https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

Ejemplo:
cypress/integration/Google.feature 
- cypress/integration/Google/

Reusable steps:
cypress/integration/common
before/beforeEach/after/afterEach hooks.

https://serenity-js.org/handbook/design/screenplay-pattern.html
Actor, Task, Question

support/
Five original blocks were simplified to 3: Actor, Task and Questions, here translated to Agente, Tarefa e DadoQuandoEntao, respectively.


# ScreenPlay
Usamos https://github.com/AmazeeLabs/cypress-screenplay

Pensamos en interacciones!!!
- Cada escenario tiene un actor
- Cada actor tiene habilidades especiales:
  - Utilizar el browser
  - Acceder a la API
- Utiliza las habilidades para:
  - Ejecutar acciones (que modificar el sistema) => tasks
    - Visitar una pagina
    - Informar un formulario
  - Hacer preguntas y 'assert' respuestas. => questions
    - Get all items
    - Get algo


