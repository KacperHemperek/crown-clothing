import React, { Component } from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sing-in-and-sign-up-page.styles.scss";

const SignInandSignUpPage = () => {
  return (
    <div className="sing-in-and-sign-up-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInandSignUpPage;
