import React from 'react';
import { Link } from "react-router-dom";
import AppLogo from "@components/AppLogo";
import Input from "@components/Input";
import Button from "@components/Button";
import '@styles/login.scss'

const RecoveryPassword = () => {
  return (
    <div className='login'>
      <AppLogo size={150} customStyle={{ marginBotton: '48px' }}></AppLogo>
      <div className='form-container'>
        <h1 className='title'>Password recovery</h1>
        <h2 className='subtitle'>
          Inform the email address used to create your account
        </h2>
        <form action="/recovery-sent" className='form'>
          <Input type='email' hint='camilayokoo@gmail.com' 
          label='Email address' id='user-email'/>
          <Link className='button' style={{ marginTop: '1.5rem' }} to='/recovery-sent'>
            Submit
          </Link>
          <Link className='form__link' to={'/login'}>
            Back to log in
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RecoveryPassword;