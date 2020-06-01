import React from "react";

import "./NumericalButton.styles.scss";

const NumericalButton = (item) => (
  <div className="numerical-button button">{item.value}</div>
);

export default NumericalButton;
