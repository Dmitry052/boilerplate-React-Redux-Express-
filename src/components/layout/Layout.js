import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import bootstrap from "bootstrapCss/bootstrap.min.css";

import s from "./Layout.scss";
import common from "./../../styles/common.scss";

class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withStyles(bootstrap, s)(Layout);
