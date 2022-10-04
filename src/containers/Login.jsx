import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppLogo from '@components/AppLogo';
import Button from '@components/Button';
import Input from '@components/Input';
import "@styles/login.scss";

const Login = () => {
  const [validationForm, setValidationForm] = useState({
    error: false,
    message: ''
  });
  const [validEmail, setValidEmail] = useState({
    valid: true,
    message: ''
  })
  const navigate = useNavigate();
  const loginForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm.current);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    validateForm(userData);
  };
  
  const validateForm = (data) => {
    if (!validateEmail(data.email) || data.password === '') {
      setValidationForm({
        error: true,
        message: 'Invalild user ID and password combination'
      });
      loginForm.current.classList.add('form--error');
    } else {
      setValidationForm({
        error: false,
        message: ''
      });
      loginForm.current.classList.remove('form--error');
      navigate('/')
    }
  }

  const validateEmail = (email) => {
    let v = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    console.log(`Email: ${v}`)
    if (!v) {
      setValidEmail({valid: false, message: 'Invalid email'})
    } else {
      setValidEmail({valid: true, message: ''})
    }
    return v;
  }

  return (
    <div className='login'>
      <div className='form-container'>
        <AppLogo size={150} customStyle={{ marginBottom: '48px' }}/>
        <form action='/' className='form' ref={loginForm}>
          <Input error={validationForm.error || !validEmail.valid} errorMessage={validEmail.message} type='email' name='email' hint='camilayokoo@gmail.com' label='Email address' id='user-email'/>
          <Input error={validationForm.error} type='password' name='password' hint='*********' label='Password' id='user-password'/>
          {
            validationForm.error && <span className='error-message'>{validationForm.message}</span>
          }
          <Button text='Log in' submit onClick={handleSubmit} customClass={'login-button'}/>
          <Link className='form__link' to={'/recovery-password'}>
            Forgot my password
          </Link>
        </form>
        <Button text='Sign in' block outlined/>
      </div>
    </div>
  )
}

export default Login;