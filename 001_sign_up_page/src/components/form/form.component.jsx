import React from "react";

import "./form.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const Form = () => (
  <div className="form">
    <form>
      <div className="name-container">
        <div className="name-sub-container">
          <label htmlFor="full-name">Full Name</label> <br />
          <input type="text" id="full-name" name="full-name" required /> <br />
        </div>
        <div className="name-sub-container">
          <label htmlFor="user-name">User Name</label> <br />
          <input type="text" id="user-name" name="user-name" required /> <br />
        </div>
      </div>
      <label htmlFor="email">Email Address</label> <br />
      <input type="email" id="email" name="email" required /> <br />
      <label htmlFor="password">Password</label> <br />
      <input type="password" id="password" name="password" required /> <br />
      <CustomButton createAccount> Create Account </CustomButton>
    </form>
  </div>
);

export default Form;
