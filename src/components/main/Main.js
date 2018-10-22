import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./Main.scss";
import Layout from "./../../components/layout/Layout";

import Header from "./../../components/header/Header";
import Payform from "./../../components/Payform/Payform";
import { dispatch } from "rxjs/internal/observable/range";

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Header />

        <Payform mm={[1, 12]} yy={[15, 29]} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  main: state.main.initial
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(s)(Main));
