# React, Bootstrap & SwaggerAPI Starter

Starter project for React, Bootstrap and Swagger-generated API, built with Webpack.

## Motivation

There are many tutorials for simple React scaffolds. But, in real life and in a real project you need a few extra bits and bogs. Building those bits and bogs for the browser is a lot of pain that the simple tutorials don’t prepare people for.

Presenting here a strong React starter project that’s used in our latest real life frontend projects. It adds pretty Bootstrap templates and modals, works with the backend API, and is deployed to Netlify with zero effort.

In the box:

* React and Webpack
* A Swagger-generated API library, to consume backend services. You can of course generate your own API’s frontend library on [editor.swagger.io](https://editor.swagger.io) (or using [swagger-codegen](https://github.com/swagger-api/swagger-codegen)).
* Bootstrap including jQuery and support for custom templates
* Build command that can be used to deploy the project on Netlify (or Amazon S3), for simple CI/CD
* Development server with hot reload
* ESLint with ES6 settings and built-in support for VSCode

## Getting started

### 1. Install dependencies

```
$ yarn install
```

### 2. Optional: setup VSCode with eslint

```
cp -R ./.vscode.example ./.vscode
```

### 3. Run the development server (hot reload is enabled)

```
$ yarn dev
```

### 4. Build the project (will be copied to the `dist` folder)

```
$ yarn build
```

## Others

### 1. Linting without VSCode

You can point any other IDE's to the eslint config in `.eslintrc`, or just use eslint from console:

```
$ ./node_modules/.bin/eslint <JS_FILE_PATH> --fix
```

### 2. Generating the API code

The current dummy backend is localted under `lib/api`. Replace this with other API generated here.

### 3. CI/CD

If you set up a CI/CD (for example using S3 or Netlify: simply build with `yarn build` and then copy all static files from `dist/` to the bucket or service.)

## License

[MIT, do-with-the-code-whatever-you-please License](https://github.com/wimagguc/react-bootstrap-webpack-starter/blob/master/LICENSE.md)

## About

Richard Dancsi

- Blog: [wimagguc.com](https://www.wimagguc.com/)
- Github: [github.com/wimagguc](https://github.com/wimagguc/)
- Twitter: [twitter.com/wimagguc](https://twitter.com/wimagguc/)
- Linkedin: [linkedin.com/in/richarddancsi](https://linkedin.com/in/richarddancsi)
