import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Haeder = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/topics">Topics</Link>
    </Fragment>
  );
};

export default Haeder;
