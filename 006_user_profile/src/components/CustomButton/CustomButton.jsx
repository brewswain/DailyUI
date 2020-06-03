import React from "react";

import "./CustomButton.style.scss";

const CustomButton = ({ children }) => (
  <button className="custom-button">{children}</button>
);

export default CustomButton;
