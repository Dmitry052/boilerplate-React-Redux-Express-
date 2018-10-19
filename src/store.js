import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import listReducers from "./reducers";

function createNewStore(initialState) {
  const middleware = [thunk];
  const enhancer = [listReducers, initialState];

  if (typeof __DEV__ !== "undefined" && __DEV__) {
    // Redux devtools in browser
    enhancer.push(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    middleware.push(logger);

    enhancer.push(composeWithDevTools(applyMiddleware(...middleware)));
  } else {
    enhancer.push(applyMiddleware(...middleware));
  }

  return createStore(...enhancer);
}

export default createNewStore;
