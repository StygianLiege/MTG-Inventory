const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js' /*'./src/app.js'*/),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'deploy'),
  },
  devServer: {
    // contentBase: './deploy',
    // open: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'src'),
    },
    hot: 'only',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output',
    }),
    new CleanWebpackPlugin(),
  ],
};
/*
----------  IN TERMINAL ---------------
---  TO START DEV SERVER ---
  npm run dev
--- TO KILL DEV SERVER ---
  control + c
--- TO KILL PORT 8080 (port assigned to dev server) ---
  npx kill-port 8080
*/
/*
----------- Dependencies --------------
--- PROBABABLY NEED TO BE ADDED via "npm install <package>"/manually---
--- these have already been added to devDependencies via "npm install <> --save-dev"
  express
  mongodb
  mongoose
  react
  react-dom
  @babel/preset-react
*/
