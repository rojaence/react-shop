import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import AppLogo from '@components/AppLogo';
import Button from '@components/Button';
import Input from '@components/Input';
import "@styles/login.scss";

const Login = () => {
  
  const loginForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm.current);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(userData);
  };

  return (
    <div className='login'>
      <div className='form-container'>
        <AppLogo size={150}/>
        <form action='/' className='form' ref={loginForm}>
          <Input type='email' name='email' hint='camilayokoo@gmail.com' label='Email address'/>
          <Input type='password' name='password' hint='*********' label='Password'/>
          <span className='error-message'>Invalid user ID and password combination</span>
          <Button text='Log in' submit onClick={handleSubmit}/>
          <Link className='form__link' to={'/recovery-password'}>
            Forgot my password
          </Link>
        </form>
        <Button text='Log in' block outlined/>
      </div>
    </div>
  )
}

export default Login;