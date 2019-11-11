import React from 'react';
import './LoginContainer.css';
import LoginForm from './LoginForm';

const LoginContainer = () => {
  return (
    <div className="login-container">
    <div className="login-wrap-content"></div>       
      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginContainer; 