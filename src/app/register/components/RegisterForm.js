 import React from 'react';
 import "./RegisterForm.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="wrap-right">
          <div className="title-name">
            Chào mừng bạn đến với WannahBook
                </div>
          <div className="regiter-name">
            Tạo tài khoản
                </div>
          <div className="wrap-name">
            <div className="name-user first-name">
              <input placeholder="Họ" />
            </div>
            <div className="name-user last-name">
              <input placeholder="Tên" />
            </div>
          </div>
          <div className="wrap-email">
            <div className="email">
              <input placeholder="Email" />
              {/* <span>@gmail.com</span> */}
            </div>
          </div>
          <div className="message-register">
            <i>Bạn có thể sử dụng chữ cái, số và dấu chấm</i>
          </div>
          {/* <div className="wrap-email">
            <div className="email">
              <input placeholder="Địa chỉ" />
            </div>
          </div> */}
          <div className="wrap-name-column">
            <div className="password">
              <input type="password" placeholder="Mật khẩu"/>
            </div>
            <div className="message-register-password">
              <i>Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số và biểu tượng</i>
            </div>
            <div className="password">
              <input type="password" placeholder="Xác nhận" />
            </div>
          </div>
          
          <div className="footer-register">
            <div className="login">
              <a href="/login">Đăng nhập</a>
            </div>
            <div className="register">
              <span>Đăng ký</span>
            </div>
          </div>
        </div>
        <div className="wrap-left">
          <div className="logo-book"></div>
          <div className="message">
            <p>
              Hãy tạo một tài khoản để có những trải nghiệm tuyệt vời tại mạng xã hội
                    </p>
            <p className="name">WannahBook</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm;




