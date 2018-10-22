/* @flow */
import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import s from "./Payform.scss";

type Props = {};

class Payform extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      cardnum: "",
      cardnumCheck: false,
      mm: this.props.mm[0],
      mmCheck: false,
      yy: this.props.yy[0],
      yyCheck: false,
      cardowner: "",
      cardownerCheck: false,
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
        const checkValue = value.replace(/\D/g, "");

        if ((value.length < 17 && checkValue) || value === "") {
          resultValue = checkValue;
        }

        if (resultValue.length === 16) {
          check = true;
        } else {
          check = false;
        }
      } else if (name === "mm") {
        resultValue = value;
      } else if (name === "yy") {
        resultValue = value;
      } else if (name === "cardowner") {
        const checkValue = value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
        resultValue = checkValue;

        if (checkValue) {
          check = true;
        } else {
          check = false;
        }
      } else if (name === "cvc") {
        const checkValue = value.replace(/\D/g, "");

        if (value.length <= 3) {
          resultValue = checkValue;
        }

        if (checkValue) {
          check = true;
        } else {
          check = false;
        }
      }

      this.setState({
        [name]: resultValue,
        [`${name}Check`]: check
      });
    }
  };

  handkeSuccess = () => {
    console.log("cool", this.state);
  };

  render() {
    const { cardnum, mm, yy, cardowner, cvc } = this.state;
    const valueMM = [];
    const valueYY = [];

    let value = this.props.mm[0];
    while (value <= this.props.mm[1]) {
      valueMM.push(value);
      value += 1;
    }

    value = this.props.yy[0];
    while (value <= this.props.yy[1]) {
      valueYY.push(value);
      value += 1;
    }

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
              <select
                placeholder="00"
                name="mm"
                onChange={this.handleInputData}
                value={mm}
              >
                {valueMM.map(item => (
                  <option key={`mm-${item}`} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>/</span>

              <select
                placeholder="00"
                name="yy"
                onChange={this.handleInputData}
                value={yy}
              >
                {valueYY.map(item => (
                  <option key={`yy-${item}`} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className={s.cardowner}>
              <input
                type="text"
                name="cardowner"
                placeholder="IVANOV IVAN"
                cardowner={cardowner}
                onChange={this.handleInputData}
                value={cardowner}
              />
            </div>
            <img src="/static/img/visa-mastercard.svg" />
          </div>

          <div className={s.backside}>
            <div className={s.magline} />

            <div className={s.privatedata}>
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={this.handleInputData}
              />
            </div>
            <span className={s.textForCvc}>Сode on the back of the card</span>
          </div>
          <button
            type="button"
            className={`btn btn-success ${s.btnPay}`}
            onClick={this.handkeSuccess}
          >
            Pay
          </button>
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
