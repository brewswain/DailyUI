import React from "react";

import "./FunctionalSideRowButton.styles.scss";

const FunctionalSideRowButton = (item) => (
  <div className="functional-button button side-row">{item.value}</div>
);

export default FunctionalSideRowButton;
