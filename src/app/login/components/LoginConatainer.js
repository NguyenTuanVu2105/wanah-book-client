<<<<<<< HEAD
import React,{Component} from 'react'

class LoginConatainer extends Component{
    render() {
        return (
            <div></div>
        )
    }
}

export default LoginConatainer
=======
import React from 'react';
import './LoginContainer.css';
import LoginForm from './LoginForm';

class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-wrap-content"></div>       
        <LoginForm></LoginForm>
      </div>
    )
  }
}

export default LoginContainer; 
>>>>>>> 14d1949f0f11e15f8aeba457d850b229d4b50b1a
