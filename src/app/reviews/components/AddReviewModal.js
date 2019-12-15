import React, { useState, useEffect, useContext, useRef } from 'react'
import { Modal, Button, Tabs, Input, Card, Badge, Avatar, Form, Divider, Checkbox, Icon} from 'antd';
import './AddReviewModal.scss'

const AddReviewModalWapper = (props) => {
    const {visible, setVisible} = props
    const handleCancel = () => {
        props.form.resetFields()
        setVisible(false)
    }

    const addReview = async (values) => {

    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            addReview(values)
          }
        });
      };
 
    const { getFieldDecorator } = props.form;

    return(
        <Modal
        visible={visible}
        title="Tạo Review"
        onCancel={handleCancel}
        className="review-modal"
        footer={null}
        width={700}
      >
          <Form onSubmit={handleSubmit}>
          <div>
              <div>
                  <div className="modal-input">
                      <strong className="modal-label">Tên nhóm</strong>
                      <Form.Item>
                          {getFieldDecorator('name', {
                              rules: [
                                { required: true, message: 'Please input group name'},
                              ]
                          })(<Input></Input>)}
                      </Form.Item>
                  </div>
                  <div className="modal-input">
                      <strong className="modal-label">Bình luận</strong>
                      <Form.Item>
                        {getFieldDecorator('description')(<Input.TextArea rows={5}></Input.TextArea>)}
                      </Form.Item>
                  </div>
              </div>         
          </div>
          <Form.Item>
             <Button type="primary" htmlType="submit">Tạo</Button>
          </Form.Item>
          </Form>
      </Modal>
    )
}

const AddReviewModal = Form.create()(AddReviewModalWapper)
export default AddReviewModal