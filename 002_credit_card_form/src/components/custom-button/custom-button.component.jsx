import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, orderConfirmation }) => (
  <button
    className={`${
      orderConfirmation ? "order-confirmation-button" : ""
    }  "custom-button" `}
  >
    {children}
  </button>
);

export default CustomButton;
