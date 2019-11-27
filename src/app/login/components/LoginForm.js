import React, {useState} from 'react';
import "./LoginForm.scss";
import { FaEye } from 'react-icons/fa'
import {Form, Icon, Input} from 'antd'

const LoginFormWrapper = (props) => {
  const { getFieldDecorator } = props.form;
  const [messages, setMessages] = useState([])
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        setMessages(["sad"])
        console.log('Received values of form: ', values);
      }
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
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
      {
        messages && messages.map(message => (
          <div className="error-submit">
          {message}
        </div>
        ))
      }
      <div className="login-form">
      <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Nhập email!' }],
          })(
            <Input
              prefix={<Icon type="user" className="login-input" />}
              placeholder="Username"
              size="large"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Nhập Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" className="login-input" />}
              type="password"
              placeholder="Password"
              size="large"
            />,
          )}
        </Form.Item>
      </div>   
      <div className="wrap-login-form-btn">
        <div className="login-form-bgbtn"></div>
        <button className="login-form-btn" htmlType="submit">
          Đăng nhập
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
    </Form>
  )
}

const LoginForm = Form.create({ name: 'normal_login' })(LoginFormWrapper);

export default LoginForm;
