import React from "react";
import GoogleSignIn from "../../assets/google_signin.png";
import TwitterSignIn from "../../assets/twitter_signin.png";
import GithubSignIn from "../../assets/github_signin.png";

import "./sign-up.styles.scss";

import Form from "../../components/form/form.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const SignUp = () => (
  <div className="sign-up-page">
    <span className="sign-in-link">
      Already a member? <a href="#">Sign in</a>
    </span>
    <div className="sidebar">
      <h2 className="site-header">Flow.io</h2>
      <span>
        Sign up for our free <br />
        code mentorship <br /> program!
      </span>
    </div>
    <div className="form-container">
      <h2 className="sign-up-header"> Sign up to flow</h2>

      <div className="button-container">
        <img
          className="sign-in-button"
          src={GoogleSignIn}
          alt="Google Sign in button"
        />
        <CustomButton>
          <img className="sign-in-image" src={TwitterSignIn} alt="" />
        </CustomButton>
        <CustomButton>
          <img className="sign-in-image" src={GithubSignIn} alt="" />
        </CustomButton>
      </div>

      <div className="line-break-container">
        <div className="horizontal-rule"></div>
        <span>or</span>
        <div className="horizontal-rule"></div>
      </div>

      <Form />
    </div>
  </div>
);

export default SignUp;
