# cypress-testing-example
# Qué es Cypress.io ?
Cypress.io es una herramienta de testeo de front-end de código abierto construida para la web moderna. Este framework “todo en uno” incluye librerías de aserciones, mocks y pruebas end-to-end automáticas sin utilizar Selenium.

Al contrario que Selenium, Cypress cuenta con una nueva arquitectura construida desde cero, que ejecuta los comandos en el mismo ciclo de ejecución.

No necesitamos instalar varias herramientas ni librerías separadas para poder ejecutar tests, ya que ejecutando únicamente una línea de comando tendríamos Cypress instalado.

[![alt](https://ibb.co/JqgyDmr)]
## Intall Cypress
``` npm intall cypress --save-dev```

## Run Cypress
We create a package.json script to run Cypress easily
``` npm run cy:open```

## Run Tests
The run command will execute all test we havae inside «Integration» folder
El comando run ejecutará todos tests que tengamos dentro de la carpeta «Integration».

```./node_modules/.bin/cypress run```

Also we can execute test in an interactive mode
Tambíen se puede ejecutar los test en modo interactivo

``` ./node_modules/.bin/cypress open ```