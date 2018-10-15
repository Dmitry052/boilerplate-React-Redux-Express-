import React from "react";
import ReactDOM from "react-dom/server";
import UniversalRouter from "universal-router";

import bunyan from "bunyan";
import express from "express";
import session from "express-session";
import sessionStore from "connect-redis";
import path from "path";
import serveStatic from "serve-static";
import config from "./config/config";

import App from "./components/App";
import Html from "./components/Html";
import routes from "./routes";
import createNewStore from "./store";

const ENVIRONMENT = process.env.NODE_ENV;
const APP_PORT = process.env.APP_PORT || config[ENVIRONMENT].server.port;
const REDIS = process.env.REDIS || true;
const REDIS_CONF = {
  host: process.env.REDIS_HOST || config[ENVIRONMENT].redis.host,
  port: process.env.REDIS_PORT || config[ENVIRONMENT].redis.port
};
const ROUTES_PREFIX =
  process.env.ROUTES_PREFIX || config[ENVIRONMENT].server.routesPrefix;
const ROUTES_PREFIX_STRING = ROUTES_PREFIX === "" ? "" : `/${ROUTES_PREFIX}`;
const APP_NAME = process.env.APP_NAME || config[ENVIRONMENT].name;

const SessionStore = sessionStore(session);

const app = express();
const log = bunyan.createLogger({ name: APP_NAME });

// Path server static
app.use("/static", serveStatic(path.resolve(__dirname, "./../public")));

// Views & templates engine
app.set("views", path.resolve(__dirname, "./../src/server/views"));
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

if (REDIS !== "false") {
  app.use(
    session({
      store: new SessionStore(REDIS_CONF),
      secret: "#12dfwet$fIIdd",
      resave: false
    })
  );
}

// *** Test route
app.use(
  `${ROUTES_PREFIX_STRING}/auth`,
  require("./server/routes/auth")({ ROUTES_PREFIX_STRING })
);

// Check user in session
app.use((req, res, next) => {
  let { path } = req;
  const authURL =
    ROUTES_PREFIX_STRING !== ""
      ? `${ROUTES_PREFIX_STRING}/auth/login`
      : "/auth/login";

  if (REDIS !== "false" && !req.session.user) {
    return res.redirect(authURL);
  }

  if (ROUTES_PREFIX_STRING !== "") {
    const pathParse = path.split(ROUTES_PREFIX_STRING);
    if (pathParse.length < 2 && ROUTES_PREFIX_STRING !== "") {
      const url = `${ROUTES_PREFIX_STRING}${pathParse[0]}`;
      return res.redirect(url);
    }
  }

  return next();
});

app.get(`${ROUTES_PREFIX_STRING}/favicon.ico`, (req, res) => res.status(204));

// Index route
app.get(
  ROUTES_PREFIX_STRING !== "" ? `${ROUTES_PREFIX_STRING}/*` : "/*",
  async (req, res) => {
    // -----------------
    let { path } = req;

    if (ROUTES_PREFIX_STRING !== "") {
      path = path.split(ROUTES_PREFIX_STRING)[1];
    }

    const router = new UniversalRouter(routes);
    const route = await router.resolve(path);

    // -Styles----------
    const css = new Set();
    const insertCss = (...styles) => {
      styles.forEach(style => {
        return css.add(style._getCss());
      });
    };

    // -Initial redux store
    const store = createNewStore();

    // -Initial context
    const context = {
      insertCss,
      store
    };

    // -Create DOM------
    const data = {};
    data.children = ReactDOM.renderToString(
      <App context={context}>{route}</App>
    );
    data.styles = [{ id: "css", cssText: [...css].join("") }];
    data.app = context.store.getState();
    const html = ReactDOM.renderToString(<Html {...data} />);
    // -----------------
    res.send(html);
    //
  }
);

404;
app.get("*", (req, res) => {
  res.render("404", { title: "Not found" });
});

app.listen(APP_PORT, () => {
  log.info(`The application is running on: ${APP_PORT}`);
});
