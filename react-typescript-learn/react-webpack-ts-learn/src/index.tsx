import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
const store = configureStore();

// console.log("this message comsole for test");
console.log("store init ...", store);

import BasicRoute from "./routers";

ReactDOM.render(
  <Provider store={store}>
    <BasicRoute />
  </Provider>,
  document.getElementById("root") as HTMLElement
);