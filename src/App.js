import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Page404 from "./components/common/Page404";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
