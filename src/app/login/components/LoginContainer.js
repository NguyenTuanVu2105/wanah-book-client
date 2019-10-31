import React from 'react';
import './LoginContainer.css';
import LoginForm from './LoginForm';

// class LoginContainer extends React.Component {
//   render() {
//     return (
//       <div className="login-container">
//         <div className="login-wrap-content"></div>       
//         <LoginForm></LoginForm>
//       </div>
//     )
//   }
// }

const LoginContainer = () => {
  return (
    <div className="login-container">
    <div className="login-wrap-content"></div>       
      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginContainer; 