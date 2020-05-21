import React from "react";
import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";

const rootreducer = combineReducers({
  CourseReducer: CourseReducer,
});

export default rootreducer;
