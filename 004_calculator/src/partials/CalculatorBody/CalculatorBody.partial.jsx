import React from "react";

import { Display } from "../index";
import {
  NUMERICAL_DATA,
  FUNCTIONAL_TOP_ROW,
  FUNCTIONAL_SIDE_ROW,
} from "../../data";
import {
  FunctionalTopRowButton,
  FunctionalSideRowButton,
  NumericalButton,
} from "../../components";

import "./CalculatorBody.styles.scss";

const CalculatorBody = () => {
  const { numericalItems } = NUMERICAL_DATA;
  const { topRowItems } = FUNCTIONAL_TOP_ROW;
  const { sideRowItems } = FUNCTIONAL_SIDE_ROW;

  return (
    <div className="calculator-body">
      <Display />
      <div className="buttons-container">
        <div className="body-top-section">
          <div className="functional-top-bar-container">
            {topRowItems.map((item) => (
              <FunctionalTopRowButton key={item.id} value={item.value} />
            ))}
          </div>
        </div>
        <div className="body-bottom-section">
          <div className="numerical-button-container">
            {numericalItems.map((item) => (
              <NumericalButton key={item.id} value={item.value} />
            ))}
          </div>
          <div className="functional-side-bar-container">
            {sideRowItems.map((item) => (
              <FunctionalSideRowButton key={item.id} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorBody;
