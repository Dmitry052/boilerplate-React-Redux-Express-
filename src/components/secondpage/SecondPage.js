import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./SecondPage.scss";

class SecondPage extends React.Component {
  render() {
    return (
      <div className="alert alert-warning" role="alert">
        SecondPage
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
)(withStyles(s)(SecondPage));
