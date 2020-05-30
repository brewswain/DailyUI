import React from "react";

import "./FunctionalTopRowButton.styles.scss";

const FunctionalTopRowButton = (item) => (
  <div className="functional-button button top-row">{item.value}</div>
);

export default FunctionalTopRowButton;
