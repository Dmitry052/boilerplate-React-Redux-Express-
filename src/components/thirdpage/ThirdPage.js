import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./ThirdPage.scss";

class ThirdPage extends React.Component {
  render() {
    return (
      <div className="alert alert-danger" role="alert">
        ThirdPage
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
)(withStyles(s)(ThirdPage));
