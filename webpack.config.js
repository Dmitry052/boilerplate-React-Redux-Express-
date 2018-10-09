const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const config = require("./src/config/config");
const SRC = path.resolve(__dirname, "./src");
const reStyle = /\.(css|less|scss|sss)$/;

const ENVIRONMENT = process.env.NODE_ENV;
const APP_HOST = process.env.APP_HOST || config[ENVIRONMENT].server.host;
const APP_PORT =
  Number(process.env.APP_PORT) || config[ENVIRONMENT].server.port;
const isDebug = ENVIRONMENT === "development";

const configWebpack = {
  module: {
    rules: [
      // Rules for JS
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
            use: "isomorphic-style-loader"
          },

          // Process external/third-party styles
          {
            exclude: SRC,
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]"
            }
          },

          // Process internal/project styles (from src folder)
          {
            include: SRC,
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]-[local]"
            }
          }
        ]
      }
    ]
  },
  watch: isDebug,
  resolve: {
    alias: {
      bootstrapCss: path.resolve(__dirname, "./node_modules/bootstrap/dist/css")
    }
  }
};

// For server
const clientConfig = {
  target: "web",
  entry: { app: ["./src/client.js"] },
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: "client.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      // Global variables
      __DEV__: isDebug
    })
  ],
  ...configWebpack
};

// For server
const serverConfig = {
  target: "node",
  entry: { app: ["./src/server.js"] },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "server.js",
    library: "library",
    libraryTarget: "umd"
  },
  // for working absolute paths
  node: {
    __dirname: false,
    __filename: false
  },

  externals: [nodeExternals({ whitelist: [reStyle] })],
  plugins: [],
  ...configWebpack
};

module.exports = [clientConfig, serverConfig];
