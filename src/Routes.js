import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </>
);

export default Routes;
