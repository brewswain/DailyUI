import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import PaymentForm from "./components/payment-form/payment-form.component";
import PaymentSummary from "./components/payment-summary/payment-summary.component";

function App() {
  return (
    <div className="credit-card-page">
      <Header />
      <div className="payment-container">
        <PaymentForm />
        <PaymentSummary />
      </div>
    </div>
  );
}

export default App;
