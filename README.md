# React, Bootstrap & SwaggerAPI Starter

Starter project for React, Bootstrap and Swagger-generated API, built with Webpack

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

If you set up a CI/CD (for example using S3 or Netlify, then simply copy all files from `dist/` to the service after the build step.)

## License

[MIT, do-with-the-code-whatever-you-please License](https://github.com/wimagguc/react-bootstrap-webpack-starter/blob/master/LICENSE.md)

## About

Richard Dancsi

- Blog: [wimagguc.com](https://www.wimagguc.com/)
- Github: [github.com/wimagguc](https://github.com/wimagguc/)
- Twitter: [twitter.com/wimagguc](https://twitter.com/wimagguc/)
- Linkedin: [linkedin.com/in/richarddancsi](https://linkedin.com/in/richarddancsi)
