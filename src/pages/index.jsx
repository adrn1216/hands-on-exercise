import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import NotFound from "./NotFound";
import "./style.css";

const Pages = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/1" />
      </Route>
      <Switch>
        <Route path="/1">
          <Exercise1 />
        </Route>
        <Route path="/2">
          <Exercise2 />
        </Route>
        <Route path="/3">
          <Exercise3 />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
