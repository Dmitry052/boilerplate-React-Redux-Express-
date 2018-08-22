import React from "react";
import { connect } from "react-redux";
import { setText } from "./../../actions/home";

class Home extends React.Component {
  handleSetText = e => {
    this.props.setText(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary" role="alert">
          {this.props.initial}
        </div>
        <input
          className="form-control"
          type="text"
          onChange={this.handleSetText}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initial: state.home.initial
});

export default connect(
  mapStateToProps,
  { setText }
)(Home);
