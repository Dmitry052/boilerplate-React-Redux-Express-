const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const bunyan = require("bunyan");
const config = require("./config/config");

const ENVIRONMENT = process.env.NODE_ENV;
const APP_PORT = process.env.APP_PORT || config[ENVIRONMENT].server.port;

const app = express();
const log = bunyan.createLogger({ name: "My app" });

// Path server static
app.use(serveStatic(path.join(__dirname, "./../public")));

// Views & templates engine
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "pug");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Index route
app.get("*", (req, res) => {
  res.render("index", { title: "Template title" });
});

// Authentication
app.use("/auth", require("./server/routes/auth"));

app.listen(APP_PORT, () => {
  log.info(`The application is running on: ${APP_PORT}`);
});
