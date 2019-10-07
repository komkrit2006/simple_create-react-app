import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import { Home, Bugatti, Ferrari, Lamborghini } from "./pages";

const routing = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/Bugatti" component={Bugatti} />
    <Route path="/Ferrari" component={Ferrari} />
    <Route path="/Lamborghini" component={Lamborghini} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
