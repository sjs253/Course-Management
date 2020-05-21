import React from "react";
import { createStore } from "redux";
import rootreducer from "./reducers/index";

export default function configStore(initialState) {
  return createStore(rootreducer, initialState);
}
