import React from "react";
import Switch from "@material-ui/core/Switch";

import CustomButton from "../custom-button/custom-button.component";
import MasterCard from "../../Assets/mc.png";
import AmericanExpress from "../../Assets/aa.png";
import Paypal from "../../Assets/paypal.png";
import Visa from "../../Assets/visa.png";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  return (
    <div className="payment-form-page">
      <div className="payment-form">
        <div className="payment-header">Payment Method</div>
        <div className="payment-method-selection">
          <CustomButton>
            <img src={MasterCard} alt="" className="card-image" />
          </CustomButton>
          <CustomButton>
            <img src={Visa} alt="" className="card-image" />
          </CustomButton>
          <CustomButton>
            <img src={AmericanExpress} alt="" className="card-image" />
          </CustomButton>
          <CustomButton>
            <img src={Paypal} alt="" className="card-image" />
          </CustomButton>
        </div>

        <div className="card-details">
          <form action="">
            <label htmlFor="cardholder-name">Cardholder Name</label> <br />
            <input
              type="text"
              id="cardholder-name"
              name="cardholder-name"
              required
            />
            <div className="card-numbers">
              <div className="card-wrapper">
                <label htmlFor="card-information-number">Card Number</label>{" "}
                <br />
                <input
                  type="text"
                  id="card-information-number"
                  name="card-information-number"
                  required
                />{" "}
                <br />
              </div>
              <div className="card-wrapper">
                <label htmlFor="card-information-number">Date</label> <br />
                <input
                  type="text"
                  id="card-information-date"
                  name="card-information-number"
                  required
                />{" "}
                <br />
              </div>
              <div className="card-wrapper">
                <label htmlFor="card-information-number">CCV</label> <br />
                <input
                  type="text"
                  id="card-information-ccv"
                  name="card-information-number"
                  required
                />
              </div>
            </div>
            <div className="card-wrapper-flex">
              <input type="checkbox" name="save-for-future-purchases" />
              <label htmlFor="save-for-future-purchases">
                Save my payment details for future purchases
              </label>
            </div>
          </form>
          <hr />
        </div>

        <div className="subscription-modal">
          <div className="subscription-container">
            <h4 className="recurring-payment">
              Enable recurring payments{" "}
              <span className="recurring-payment-subtitle">
                Highly recommended
              </span>
            </h4>
            <Switch
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
          <p className="subscription-body">
            Never run out of balance when sending your campaigns! You can change
            these settings on your financial preferences anytime.
          </p>
          <div className="input-wrapper">
            <div className="subscription-container">
              <div className="card-wrapper">
                {" "}
                <label htmlFor="current-balance">
                  When my balance is below
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="current-balance"
                  name="current-balance"
                />
              </div>
              <div className="card-wrapper">
                {" "}
                <label htmlFor="balance-recharge">
                  Automatically recharge
                </label>{" "}
                <br />
                <input
                  type="currency"
                  id="balance-recharge"
                  name="balance-recharge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
