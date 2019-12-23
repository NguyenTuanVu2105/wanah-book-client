import React, { useState, useEffect, useContext, useRef } from 'react'
import { Modal, Button, Input, Form, Rate, Select, notification} from 'antd';
import './AddReviewModal.scss'
import { searchBook } from '../../../api/base/book';
import { parseImage } from '../../../helper/parse/parser';
import { addReview } from '../../../api/base/review';

const {Option} = Select;
const AddReviewModalWapper = (props) => {
    const {visible, setVisible, resetData} = props
    const [books, setBooks] = useState([])
    const handleCancel = () => {
        props.form.resetFields()
        setVisible(false)
    }
    
    const _addReview = async (values) => {
      const result = await addReview(values)
      if (result.success) {
        props.form.resetFields()
        resetData()
        setVisible(false)
        notification['success']({
          message: 'Tạo review thành công',
        });
      }
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            _addReview(values)
          }
        });
      };
 
    const { getFieldDecorator } = props.form;
    
    // const handleChange = (value) => {
    //   console.log(value)
    //   // _fetchData(value)
    // }

    const _fetchData = async (searchValue) => {
      let result = await searchBook(searchValue, 10, 1)
      if (result.success) {
        setBooks(books => result.data)
      }
    }
    const handleSearch = (value) => {
      _fetchData(value)
    }
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
                      <strong className="modal-label">Sách</strong>
                      <Form.Item>
                          {getFieldDecorator('bookId')(  
                          <Select
                            showSearch
                            style={{ width: 500 }}
                            onFocus={() => _fetchData('')}
                            placeholder="Chọn sách bạn muốn review"
                            onSearch={handleSearch}
                            filterOption={false}
                            // onChange={handleChange}
                            optionLabelProp="label"
                          >
                            {
                              books.map((book, index) => (
                              <Option key={index} value={book.id} label={book.name}>
                                <div className='flex'>
                                  <div className='review-book-image-container'>
                                    <img src={parseImage(book.image)} className='review-book-image'></img>
                                  </div>
                                  <div className='flex-space' style={{width:'100%', lineHeight:'70px'}}>
                                  <div>{book.name}</div>
                                  <i style={{fontSize: 12}}>{book.authors.map(x => x.name).join(', ')}</i>
                                  </div>
                                </div>
                                </Option>
                              ))
                            }
                          </Select>,)}
                      </Form.Item>
                  </div>
                  <div className="modal-input">
                      <strong className="modal-label">Đánh giá của bạn</strong>
                      <Form.Item>
                          {getFieldDecorator('star', {
                              initialValue: 0
                          })(<Rate />)}
                      </Form.Item>
                  </div>
                  <div className="modal-input">
                      <strong className="modal-label">Bình luận</strong>
                      <Form.Item>
                        {getFieldDecorator('content')(<Input.TextArea rows={5}></Input.TextArea>)}
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