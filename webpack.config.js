const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const config = require("./src/config/config");

const ENVIRONMENT = process.env.NODE_ENV;
const APP_HOST = process.env.APP_HOST || config[ENVIRONMENT].server.host;
const APP_PORT =
  Number(process.env.APP_PORT) || config[ENVIRONMENT].server.port;

module.exports = {
  entry: { app: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "./public/build"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  watch: ENVIRONMENT === "development" || false,

  plugins: [
    new ExtractTextPlugin({ filename: "style.css" }),
    // For run webpack and nodemon in watch mode
    new NodemonPlugin({
      watch: path.resolve("./src"),
      script: path.resolve("./src/server.js")
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: `${APP_PORT + 1}`,
      proxy: `${APP_HOST}:${APP_PORT}`
    })
  ]
};
