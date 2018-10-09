import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./Main.scss";
import Layout from "./../../components/layout/Layout";

import Header from "./../../components/header/Header";
import FirstPage from "./../../components/firstpage/FirstPage";
import SecondPage from "./../../components/secondpage/SecondPage";
import ThirdPage from "./../../components/thirdpage/ThirdPage";

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Header />

        <FirstPage />

        <SecondPage />

        <ThirdPage />
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
