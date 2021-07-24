import React from "react";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/new" component={New} />
  </React.Fragment>
);

export default Routes;
