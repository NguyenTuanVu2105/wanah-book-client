 import React from 'react';
 import "./RegisterForm.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <div class="form">
        <div class="wrap-right">
          <div class="title-name">
            Chào mừng bạn đến với WannahBook
                </div>
          <div class="regiter-name">
            Tạo tài khoản
                </div>
          <div class="wrap-name">
            <div class="name-user first-name">
              <input placeholder="Họ" />
            </div>
            <div class="name-user last-name">
              <input placeholder="Tên" />
            </div>
          </div>
          <div class="wrap-email">
            <div class="email">
              <input placeholder="Email" />
              {/* <span>@gmail.com</span> */}
            </div>
          </div>
          <div class="message-register">
            <i>Bạn có thể sử dụng chữ cái, số và dấu chấm</i>
          </div>
          {/* <div class="wrap-email">
            <div class="email">
              <input placeholder="Địa chỉ" />
            </div>
          </div> */}
          <div class="wrap-name-column">
            <div class="password">
              <input placeholder="Mật khẩu" />
            </div>
            <div class="message-register-password">
              <i>Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số và biểu tượng</i>
            </div>
            <div class="password">
              <input placeholder="Xác nhận" />
            </div>
          </div>
          
          <div class="footer-register">
            <div class="login">
              <a href="#">Đăng nhập</a>
            </div>
            <div class="register">
              <span>Đăng ký</span>
            </div>
          </div>
        </div>
        <div class="wrap-left">
          <div class="logo-book"></div>
          <div class="message">
            <p>
              Hãy tạo một tài khoản để có những trải nghiệm tuyệt vời tại mạng xã hội
                    </p>
            <p class="name">WannahBook</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm;




