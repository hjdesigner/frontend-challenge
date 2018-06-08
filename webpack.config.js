// webpack v4
const path = require('path');
module.exports = {
  entry: { main: './src/scripts/app.js' },
  output: {
    path: path.resolve(__dirname, './build/view/js'),
    filename: 'app.js'
  },
  module: {
		rules: [
			{
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
