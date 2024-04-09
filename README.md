## Movie Time! With React + TypeScript + Vite

POC application to learn how to use React in an it's-not-2016-anymore kind of way, courtesy of Jonas Schmedtmann's [React course](https://www.udemy.com/course/the-ultimate-react-course)

## Quick Start

```bash
  npm i && npm run dev
```

## Setup

This project was created using the [`react-ts` template for Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
  npm create vite@latest react-movie-client -- --template react-ts
```

Other requirements/suggestions:
- Prettier vscode extension

## Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
