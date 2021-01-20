var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./playground/app"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [{
        test: /\.jsx?$/,
        use: "babel-loader",
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "playground"),
          path.join(__dirname, "node_modules", "codemirror", "mode", "javascript"),
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: [
          path.join(__dirname, "css"),
          path.join(__dirname, "playground"),
          path.join(__dirname, "node_modules"),
        ],
      },
      // {
      //   test: /\.json$/,
      //   use: "json-loader",
      //   include: [
      //     path.join(__dirname, "css"),
      //     path.join(__dirname, "playground"),
      //     path.join(__dirname, "node_modules"),
      //   ],
      // }
    ]
  }
};
