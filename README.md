# API Rest en TypeScript con Node.js + Express

Requisitos para seguir este tutorial:

- Instalar [Node.js](https://nodejs.org/)
- Instalar [Visual Studio Code](https://code.visualstudio.com/)
- El código propuesto es muy sencillo, pero no viene mal tener unos conocimientos básicos de [TypeScript](https://www.typescriptlang.org/)

## Crear el proyecto Node.js

Creamos el directorio del proyecto e inicializamos el proyecto Node.js:

```bash
mkdir learning-nodejs
cd learning-nodejs
npm init -y
```

Esto creará el descriptor del proyecto en el fichero `package.json`.

## Configurar TypeScript

En este caso, en vez de usar JavaScript, usaremos TypeScript, por lo que lo siguiente será inicializarlo y configurarlo.

En la raíz del proyecto ejecutamos el siguiente comando:

```bash
npm install --save-dev typescript
```

> La opción `--save-dev` indica que TypeScript es una dependencia de desarrollo.

Debemos tener en cuenta que Node.js no es capaz de ejecutar directamente código TypeScripyt, sino que debe **transpilarse** (compilarse) a JavaScript para poder ejecutarlo. En el fichero `tsconfig.json` podemos definir las opciones del compilador de TypeScript:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "src",
    "strict": true
  },
  "lib": ["es2015"]
}
```

Las opciones más importantes son:
- `module`: Define el sistema de módulos que se usará. En este caso, CommonJS.
- `target`: Define la versión de ECMAScript a la que se compilará el código. En este caso, ES6.
- `outDir`: Define el directorio donde se guardarán los ficheros JavaScript generados.
- `rootDir`: Define el directorio donde se encuentran los ficheros TypeScript.
- `strict`: Activa todas las opciones de comprobación de TypeScript.

> Estas opciones son de ejemplo. Habría que adaptarlas a nuestras necesidades.

## Instalar Express

Ahora instalamos Express, que es un framework web para Node.js que nos permitirá crear el servidor. También instalamos `@types/express` para tener las definiciones de TypeScript de Express:
 
```bash
npm install express
npm install --save-dev @types/express
```

## Crear el servidor

A continuación creamos el directorio `src`, que es dónde guardaremos el código TypeScript, y luego creamos el fichero `src/server.ts`:
  
```bash
mkdir src
code src/server.ts
```

Éste sería el contenido del fichero `src/server.ts` (la extensión `.ts` indica que es un fichero TypeScript):

```typescript
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Node.js!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

> Es un pequeño servidor que responde con un mensaje de texto (`Hello Node.js!`) cuando se accede a la raíz del servidor.

## Compilar y ejecutar el servidor

Para compilar el código TypeScript, podemos hacerlo manualmente ejecutando el siguiente comando en la raíz del proyecto:

```bash
npx tsc
```

Esto generará el fichero `dist/server.js`. El directorio `dist` es el directorio de salida que hemos definido en el fichero `tsconfig.json`.

Ahora, para ejecutar nuestra aplicación Node.js, ejecutamos el siguiente comando:

```bash
node dist/server.js
```

## Automatizar la compilación

Para no tener que compilar el código manualmente cada vez que hagamos un cambio, podemos automatizar la compilación con `nodemon` y `ts-node`.

Instalamos `nodemon` y `ts-node`:

```bash
npm install --save-dev nodemon ts-node
```

> Ambas son dependencias de desarrollo.

Y añadimos un script en el fichero `package.json`:

```json
{
  "scripts": {
    "start": "nodemon --exec ts-node dist/server.ts"
  }
}
```

Ahora podemos ejecutar el servidor con el siguiente comando:

```bash
npm start
```

También podemos añadir un script para compilar el código TypeScript:

```json
{
  "scripts": {
    "build": "tsc"
  }
}
```

De manera que podemos compilar el código con el siguiente comando:

```bash
npm run build
```

> El código compilado, es decir, transpilado a JavaScript, se guardará en el directorio `dist`.

## Referencias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Transpilador](https://es.wikipedia.org/wiki/Transpilador)
- [CommonJS](https://es.wikipedia.org/wiki/CommonJS)
- [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript)
- [tsconfig.json](https://www.typescriptlang.org/tsconfig)    