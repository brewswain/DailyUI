import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./payment-summary.styles.scss";

const PaymentSummary = () => (
  <div className="payment-summary">
    <div className="payment-summary-container">
      <h4 className="summary-header">Order Summary</h4>
      <div className="summary-subtitle">
        <div className="subtitle-container">
          <p className="subtitle-text">Balance amount: </p>
          <span className="balance-amount">$100.00</span>
        </div>
        <div className="subtitle-container">
          <p className="subtitle-text">VAT(15%): </p>
          <span className="vat-amount">$15.00</span>
        </div>
        <hr />

        <div className="subtitle-container">
          <p className="subtitle-text-bold">Total:</p>
          <span className="balance-amount-bold">$115.00</span>
        </div>
      </div>

      <div className="balance-container">
        <div className="account-information">
          <span className="balance-subtitle">Account after top up</span>
          <span className="account-name">Kirby Conglomerate</span>
        </div>
        <div className="account-balance">
          <span className="balance-complete-amount">$100.00</span>
        </div>
      </div>
      <CustomButton orderConfirmation>Confirm your order</CustomButton>
    </div>
  </div>
);
export default PaymentSummary;
