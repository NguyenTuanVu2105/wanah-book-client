import React, {useState} from 'react';
import "./LoginForm.scss";
import {Form, Icon, Input} from 'antd'
import {withRouter} from 'react-router-dom'
import { login } from '../../../api/base/auth';
import Paths from '../../../routes/Paths';
import {setUserCookies} from '../../../api/auth/auth'

const LoginFormWrapper = (props) => {
  const { getFieldDecorator } = props.form;
  const [messages, setMessages] = useState('')
  const handleLogin = (data) => {
      if (data.Success) {
        setUserCookies(data.accessToken)
      }
  }
  const submitLogin = async (values) => {
    const {success, data} = await login(values)
    console.log(data.Success)
    if (success) {
      handleLogin(data)
      props.history.push(Paths.HomePage)
    } else {
      setMessages(data)
    }
  } 

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        submitLogin(values)
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
        messages && (
          <div className="error-submit">
          {messages}
        </div>
        )
      }
      <div className="login-form">
      <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Nhập email!' }],
          })(
            <Input
              prefix={<Icon type="mail" className="login-input" />}
              placeholder="Email"
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
        <button className="login-form-btn" type="submit">
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

export default withRouter(LoginForm);
