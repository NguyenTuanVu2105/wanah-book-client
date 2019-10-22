import React from 'react';
import "./LoginForm.css";
import { FaEye } from 'react-icons/fa'
class LoginForm extends React.Component {
  render() {
    return (
     <div>
        <div className="form-login">
          <div className="login-title">
            <div className="logo">
              <img src="/logo.png"/>
            </div>
            <div class="login-form-title">
              Đăng nhập
					  </div>
            <div className="title-message">
              Đăng nhập để vào mạng xã hội <p>WannahBook</p> 
            </div>
          </div>  
          <div className="login__form__alige">          
            <div class="wrap-input">     
              <div className="validate-input">
                <input class="input" type="text" name="email" placeholder="Email" />
              </div>                                 
            </div>
            <div class="wrap-input">
              <div className="validate-input">
                <input class="input" type="text" name="email" placeholder="Mật khẩu" />
                {/* <span className="btn-show-pass">
                  
                </span> */}
                <FaEye className="icon-eye" />
              </div>             
            </div>    
                 
          </div>    
          <div class="wrap-login-form-btn">
            <div class="login-form-bgbtn"></div>
            <button class="login-form-btn">
              Đăng ký
							</button>
          </div>        
          <div class="text-center">
            <span class="txt1">
              Bạn không có tài khoản?
						</span>

            <a class="txt2" href="#">
              Tạo tài khoản
						</a>
          </div>
        </div>
     </div>
    )
  }
}

export default LoginForm;
