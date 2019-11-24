const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'DemoApp',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            {
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          ],
        },
      },
      {
        // Otherwise the generated Swagger Rest API code wouldn't work
        test: /\.js$/,
        use: 'imports-loader?define=>false',
        include: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
  mode: 'development',
};
