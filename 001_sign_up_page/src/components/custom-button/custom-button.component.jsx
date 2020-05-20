import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, createAccount }) => (
  <button className={`${createAccount ? "create-account" : ""}`}>
    {children}
  </button>
);

export default CustomButton;
