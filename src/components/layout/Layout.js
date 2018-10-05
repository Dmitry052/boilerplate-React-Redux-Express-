import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// external-global styles must be imported in your JS.
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import s from "./Layout.scss";
import common from "./../../styles/common.scss";

class Layout extends React.Component {
  render() {
    return <div className={s.block}>{this.props.children}</div>;
  }
}

export default withStyles(common, s)(Layout);
