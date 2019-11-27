 import React from 'react';
 import "./RegisterForm.css";
import {Form, Input, Button} from 'antd'

class RegisterForm extends React.Component {
  state = {
    confirmDirty: false,
    messages: []
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('mật khẩu không trùng khớp');
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.setState({
            messages: ["asd"]
          })
        }
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <div className="wrap-right">
          <div className="title-name">
            Chào mừng bạn đến với WannahBook
                </div>
          <div className="regiter-name">
            Tạo tài khoản
                </div>
                {
        this.state.messages && this.state.messages.map(message => (
          <div className="error-submit">
          {message}
        </div>
        ))
      }
          <Form.Item style={{margin:"20px 0 0 0"}}>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
              {
                getFieldDecorator('first-name', {
                  rules: [
                    {
                      required: true,
                      message: "Nhập họ."
                    }
                  ]
                })(<Input placeholder="Họ"/>)
              }
            </Form.Item>
            <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}></span>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            {
                getFieldDecorator('last-name', {
                  rules: [
                    {
                      required: true,
                      message: "Nhập tên."
                    }
                  ]
                })(<Input placeholder="Tên"/>)
              }
            </Form.Item>
          </Form.Item>
            <Form.Item>
                {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'E-mail không hợp lệ.',
                  },
                  {
                    required: true,
                    message: 'Nhập E-mail.',
                  },
                ],
              })(<Input placeholder="Email"/>)}
            </Form.Item>
            <Form.Item hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Nhập Mật khẩu.',
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                  ],
                })(<Input.Password placeholder="Mật khẩu"/>)}
          </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Nhập Mật khẩu.',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password placeholder="Nhập lại mật khẩu" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
          
          <div className="footer-register">
            <div className="login">
              <a href="/login">Đăng nhập</a>
            </div>
              <Button type="primary" htmlType="submit" style={{ height:"35px", marginRight:"50px"}}>
                Đăng ký
            </Button> 
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
      </Form>
    )
  }
}

RegisterForm = Form.create({ name: 'register' })(RegisterForm);
export default RegisterForm;




