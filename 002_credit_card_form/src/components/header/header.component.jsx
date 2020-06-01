import React from "react";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <p>Add Funds</p>
    <ArrowForwardIosIcon fontSize="small" />
    <p className="checkout-details">Checkout details</p>
    <ArrowForwardIosIcon fontSize="small" />
    <p>Confirm your order</p>
  </div>
);

export default Header;
