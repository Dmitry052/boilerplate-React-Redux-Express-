const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const config = require("./src/config/config");

const ENVIRONMENT = process.env.NODE_ENV;
const APP_HOST = process.env.APP_HOST || config[ENVIRONMENT].server.host;
const APP_PORT =
  Number(process.env.APP_PORT) || config[ENVIRONMENT].server.port;
const reStyle = /\.(css|less|scss|sss)$/;

module.exports = {
  entry: { app: "./src/routes/index.js" },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "routes.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: reStyle,
        rules: [
          // Convert CSS into JS module
          {
            issuer: { not: [reStyle] },
            use: "isomorphic-style-loader"
          },

          // Process external/third-party styles
          {
            exclude: path.resolve(__dirname, "./src"),
            loader: "css-loader",
            options: {
              sourceMap: false,
              minimize: true,
              discardComments: { removeAll: true }
            }
          },

          // Process internal/project styles (from src folder)
          {
            include: path.resolve(__dirname, "./src"),
            loader: "css-loader",
            options: {
              // CSS Loader https://github.com/webpack/css-loader
              importLoaders: 1,
              sourceMap: false,
              // CSS Modules https://github.com/css-modules/css-modules
              modules: true,
              localIdentName: "[name]-[local]",
              // CSS Nano http://cssnano.co/options/
              minimize: true,
              discardComments: { removeAll: true }
            }
          },

          {
            test: /\.scss$/,
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      }
    ]
  },
  watch: ENVIRONMENT === "development" || false,

  plugins: [
    // new ExtractTextPlugin({ filename: "style.css" }),
    // For run webpack and nodemon in watch mode
    // new NodemonPlugin({
    //   watch: path.resolve("./src"),
    //   script: path.resolve("./src/server.js")
    // }),
    // new BrowserSyncPlugin({
    //   host: "localhost",
    //   port: `${APP_PORT + 1}`,
    //   proxy: `${APP_HOST}:${APP_PORT}`
    // })
  ]
};
