import React from "react";
import Layout from "./../../components/layout/Layout";
import Header from "./../../components/header/Header";
import Page from "./../../components/secondpage/SecondPage";

class SecondPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header />

        <Page />
      </Layout>
    );
  }
}

export default SecondPage;
