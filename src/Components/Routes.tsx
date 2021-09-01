import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Editions from "./Editions";
import Database from "./Database";

const Routes: React.FunctionComponent = () => {
  return (
    <div>
      <Route path="/home" component={Home} />
      <Route path="/editions" component={Editions} />
      <Route path="/database" component={Database} />
    </div>
  );
};

export default Routes;
