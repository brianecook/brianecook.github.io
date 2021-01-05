const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watch: true,
  output: {
    path: path.resolve(__dirname, 'assets'),
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "style.css"
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  }
};