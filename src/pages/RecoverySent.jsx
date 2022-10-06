import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "@components/AppLogo"
import Icon from "@components/Icon"
import '@styles/recoveryPassword.scss'

const RecoverySent = () => {
  return (
    <div className="login">
      <AppLogo size={150}/>
      <div className="form">
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <Icon name="email" size={90} color='primary'/>
        </div>
        <Link className="button login-button" to={'/login'}>
          Login
        </Link>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <Link className="form__link" to={'/recovery-sent'}>
            Resend
          </Link> 
        </p>
      </div>
    </div>
  );
};

export default RecoverySent;
