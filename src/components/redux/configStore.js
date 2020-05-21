import React from "react";
import { createStore } from "redux";
import rootreducer from "./reducers/index";

export default function configStore(initialState) {
  return createStore(
    rootreducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
