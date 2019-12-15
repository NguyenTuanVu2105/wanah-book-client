import React from 'react';
import './LoginContainer.css';
import LoginForm from './LoginForm';
import { checkAuth } from '../../../api/auth/auth';
import { withRouter} from 'react-router-dom'

const LoginContainer = (props) => {
  if (checkAuth()) {
    props.history.push('/')
  }
  return (
    <div className="login-container">
    <div className="login-wrap-content"></div>       
      <LoginForm></LoginForm>
    </div>
  )
}

export default withRouter(LoginContainer); 