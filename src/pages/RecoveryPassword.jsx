import React from 'react';
import { Link } from "react-router-dom";
import AppLogo from "@components/AppLogo";
import Input from "@components/Input";
import Button from "@components/Button";
import '@styles/login.scss'

const RecoveryPassword = () => {
  return (
    <div className='login'>
      <div className='form-container'>
        <AppLogo size={110} customStyle={{ marginBotton: '48px' }}></AppLogo>
        <h1 className='title'>Password recovery</h1>
        <h2 className='subtitle'>
          Inform the email address used to create your account
        </h2>
        <form action="/recovery-sent" className='form'>
          <Input type='email' hint='camilayokoo@gmail.com' 
          label='Email address' id='user-email'/>
          <Button text='Submit'/>
          <Link className='form__link' to={'/login'}>
            Back to log in
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RecoveryPassword;