import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/new" component={New} />
  </>
);

export default Routes;
