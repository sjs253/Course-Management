import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { Route } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Fragment>
  );
}

export default App;
