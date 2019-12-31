import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./components/Banner";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={App} path="/" exact />
        <Route component={About} path="/about" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
