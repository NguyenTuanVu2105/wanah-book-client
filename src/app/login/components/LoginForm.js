import React from 'react';
import "./LoginForm.css";
import { FaEye } from 'react-icons/fa'

const LoginForm = (props) => {
  return (
    <div>
      <div className="form-login">
      <div className="login-title">
        <div className="logo">
          <img src="/logo.png" alt="Logo"/>
        </div>
        <div className="login-form-title">
          Đăng nhập
        </div>
        <div className="title-message">
          Đăng nhập để vào mạng xã hội <p>WannahBook</p> 
        </div>
      </div>  
      <div className="login__form__alige">          
        <div className="wrap-input">     
          <div className="validate-input">
            <input className="input" type="text" name="email" placeholder="Email" />
          </div>                                 
        </div>
        <div className="wrap-input">
          <div className="validate-input">
            <input className="input" type="text" name="email" placeholder="Mật khẩu" />
            {/* <span className="btn-show-pass">
              
            </span> */}
            <FaEye className="icon-eye" />
          </div>             
        </div>    
             
      </div>    
      <div className="wrap-login-form-btn">
        <div className="login-form-bgbtn"></div>
        <button className="login-form-btn">
          Đăng ký
          </button>
      </div>        
      <div className="text-center">
        <span className="txt1">
          Bạn không có tài khoản?
        </span>

        <a className="txt2" href="/register">
          Tạo tài khoản
        </a>
      </div>
    </div>
    </div>
  )
}
export default LoginForm;
