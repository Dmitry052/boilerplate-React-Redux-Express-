import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./FirstPage.scss";

class FirstPage extends React.Component {
  render() {
    return (
      <div className="alert alert-primary" role="alert">
        FirstPage
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
