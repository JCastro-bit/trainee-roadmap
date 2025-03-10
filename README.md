# Estructura del Proyecto Astro con React y Tailwind

```
proyecto-desarrollo-profesional/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── learning-path-empresa.tsx
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── learning-path.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Pasos para Configurar el Proyecto

1. Crear un nuevo proyecto Astro con soporte para TypeScript:

```bash
npm create astro@latest proyecto-desarrollo-profesional -- --template basics --typescript strict
cd proyecto-desarrollo-profesional
```

2. Instalar las integraciones de React y Tailwind CSS:

```bash
npm install @astrojs/react @astrojs/tailwind react react-dom
```

3. Instalar las dependencias de desarrollo de TypeScript para React:

```bash
npm install -D @types/react @types/react-dom
```

4. Crear el archivo de configuración para Tailwind:

```bash
npx tailwindcss init
```

5. Configurar tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

6. Crear el archivo global.css en src/styles/ con la siguiente configuración básica:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Copiar el componente learning-path-empresa.tsx en la carpeta src/components/

8. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

9. Visitar http://localhost:4321/learning-path para ver el plan de desarrollo
