const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const path = require("path");
const serveStatic = require("serve-static");
const bunyan = require("bunyan");
const config = require("./config/config");

const ENVIRONMENT = process.env.NODE_ENV;
const APP_PORT = process.env.APP_PORT || config[ENVIRONMENT].server.port;
const REDIS_CONF = {
  host: process.env.REDIS_HOST || config[ENVIRONMENT].redis.host,
  port: process.env.REDIS_PORT || config[ENVIRONMENT].redis.port
};

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

// Initial session
app.use(
  session({
    store: new RedisStore(REDIS_CONF),
    secret: "#12dfwet$fIIdd",
    resave: false
  })
);

// Routes
app.use("/auth", require("./server/routes/auth"));

// Check user in session
app.use((req, res, next) => {
  const authURL = "/auth/login";
  if (!req.session.user) {
    return res.redirect(authURL);
  }
  return next();
});

// Index route
app.get("/", (req, res) => {
  res.render("index", { title: "Template title" });
});

// Authentication

// 404
app.get("*", (req, res) => {
  res.render("404", { title: "Not found" });
});

app.listen(APP_PORT, () => {
  log.info(`The application is running on: ${APP_PORT}`);
});
