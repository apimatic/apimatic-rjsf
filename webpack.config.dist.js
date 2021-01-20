var path = require("path");
var webpack = require("webpack");

module.exports = {
  cache: true,
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "react-jsonschema-form.js",
    library: "JSONSchemaForm",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  devtool: "source-map",
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    }
  },
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
