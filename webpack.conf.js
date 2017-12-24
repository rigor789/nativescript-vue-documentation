const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },

  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: '4001',
    contentBase: path.resolve(__dirname, 'docs'),
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [
            require('tailwindcss')(path.resolve(__dirname, 'tailwind.js'))
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin(['docs'])
  ]
};