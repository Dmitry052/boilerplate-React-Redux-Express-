/* @flow */
import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./FirstPage.scss";

type Props = {};

class FirstPage extends React.Component<Props> {
  render() {
    return (
      <div className="alert alert-primary" role="alert">
        FirstPage
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some content.</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(s)(FirstPage));
