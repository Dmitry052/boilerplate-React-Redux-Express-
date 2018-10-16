import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UniversalRouter from "universal-router";
import createNewStore from "./store";
import history from "./history";
import routes from "./routes";
import App from "./components/App";

const store = createNewStore(window.App);
const prefix = window.Prefix;

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
  store
};

let path = "";
const currentLocation = history.location;
const router = new UniversalRouter(routes);

if (typeof prefix !== "undefined" && prefix) {
  if (prefix !== "") {
    path = currentLocation.pathname.split(prefix)[1];
  }
} else {
  path = currentLocation.pathname;
}

router.resolve(path).then(component => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App context={context}>{component}</App>
    </Provider>,
    document.getElementById("app")
  );
});
