import React from "react";
import AppLogo from "@components/AppLogo";
import Button from "@components/Button";
import Input from "@components/Input";
import "@styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <AppLogo size={150} />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <Input type="password" hint="*********" label='Password'/>
          <Input type="password" hint="*********" label='Repeat password'/>
          <Button text="Confirm" />
        </form>
      </div>
    </div>
  );
};

export default Login;


