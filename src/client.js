import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UniversalRouter from "universal-router";
import createNewStore from "./store";
import history from "./history";
import routes from "./routes";
import App from "./components/App";

const store = createNewStore(window.App);

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
  store
};

const currentLocation = history.location;
const router = new UniversalRouter(routes);

router.resolve(currentLocation.pathname).then(component => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <App context={context}>{component}</App>
    </Provider>,
    document.getElementById("app")
  );
});
