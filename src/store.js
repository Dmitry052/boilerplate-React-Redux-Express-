import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import listReducers from "./reducers";

const store = createStore(
  listReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
