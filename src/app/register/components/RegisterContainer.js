import React from 'react';
import './RegisterContainer.css';
import RegisterForm from './RegisterForm';

class RegisterContainer extends React.Component {
  render() {
    return (
      <div className="register-container">
        <div className="wrap-content"></div>
          <RegisterForm></RegisterForm>
      </div>
    )
  }
}

export default RegisterContainer; 