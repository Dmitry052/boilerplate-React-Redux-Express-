import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./../components/header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Topics from "./topics/Topics";

const Routes = () => (
  <Router>
    <div>
      <Header />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default Routes;
