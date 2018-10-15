import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Header.scss";
import Layout from "./../../components/layout/Layout";

class Haeder extends React.Component {
  render() {
    return (
      <Layout>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <h4>Main</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/../../first">
                  FirstLink <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/second">
                  SecondLink
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/third">
                  ThirdLink
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="nav-link" href="/auth/logout">
              Logout
            </a>
          </div>
        </nav>
      </Layout>
    );
  }
}

export default withStyles(s)(Haeder);
