/* @flow */
import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./Payform.scss";

type Props = {};

class Payform extends React.Component<Props> {
  constructor() {
    super();

    this.state = {
      cardnum: "",
      cardnumCheck: false,
      mm: "",
      mmCheck: false,
      yy: "",
      yyCheck: false,
      owner: "",
      ownerCheck: false,
      cvc: "",
      cvcCheck: false
    };
  }
  handleInputData = e => {
    if (e.target) {
      const { name, value } = e.target;
      let resultValue = this.state[name];

      let check = false;

      if (name === "cardnum") {
        const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
        if (value.length <= 16) {
          resultValue = value;
        }

        if (value.match(regex)) {
          check = true;
        }
      } else if (name === "mm") {
      } else if (name === "yy") {
      } else if (name === "owner") {
      } else if (name === "cvc") {
      }

      this.setState({
        [name]: resultValue,
        [`${name}Check`]: check
      });
    }
  };

  render() {
    const { cardnum, mm, yy, owner, cvc } = this.state;

    return (
      <div className="container">
        <div className={s.payform}>
          <div className={s.bankcard}>
            <div className={s.brand}>
              <span className={s.brandname}>Bank card</span>
            </div>

            <div className={s.cardnum}>
              <input
                type="text"
                name="cardnum"
                placeholder="0000 0000 0000 0000"
                value={cardnum}
                onChange={this.handleInputData}
              />
            </div>

            <div className={s.period}>
              <input
                type="text"
                name="mm"
                placeholder="00"
                value={mm}
                onChange={this.handleInputData}
              />
              <span>/</span>
              <input
                type="text"
                name="yy"
                placeholder="00"
                value={yy}
                onChange={this.handleInputData}
              />
            </div>

            <div className={s.cardowner}>
              <input
                type="text"
                name="cardowner"
                placeholder="IVANOV IVAN"
                owner={owner}
                onChange={this.handleInputData}
              />
            </div>
            <img src="/static/img/visa-mastercard.svg" />
          </div>

          <div className={s.backside}>
            <div className={s.magline} />

            <div className={s.privatedata}>
              <input
                type="text"
                name="seccode"
                placeholder="CVC"
                value={cvc}
                onChange={this.handleInputData}
              />
            </div>
            <span className={s.textForCvc}>Сode on the back of the card</span>
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
)(withStyles(s)(Payform));
