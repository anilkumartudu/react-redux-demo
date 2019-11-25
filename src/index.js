import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./store/reducers/counter";
import storeReducer from "./store/reducers/store";

const rootReducer = combineReducers({
  counterReducer,
  storeReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
