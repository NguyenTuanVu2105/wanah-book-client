import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {Input, Select, Avatar, Menu, Dropdown} from 'antd'
import {Link, useRouteMatch} from 'react-router-dom'
import './AppHeader.scss'

const {Search} = Input
const {Option} = Select

const AppHeader = () => {
    let {url} = useRouteMatch()
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              Xem hô sơ
            </a>
          </Menu.Item>
          <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              Cài đặt
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            Đổi mật khẩu
          </Menu.Item>
          <Menu.Item key="4">
            Đăng xuất
          </Menu.Item>
        </Menu>
      );

    return (
            <Row className="header">
                <Col xs={2} className="flex-center">
                  <Link to="/">
                    <img src={`${url}asset/logo.png`} style={{maxWidth:"100%", maxHeight:"100%"}}></img>
                  </Link>
                    
                </Col>
                <Col xs={8} className="flex-center">
                    <Select defaultValue="book" showArrow={false}>
                        <Option value="book">Sách</Option>
                        <Option value="author">Tác giả</Option>
                        <Option value="user">Người dùng</Option>
                    </Select>
                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={value => console.log(value)}
                        style={{ width: '50%', borderRadius:"0" }}
                        size="small"
                    />
                </Col>
                <Col xs={2}  className="flex-end">
                  <Dropdown overlay={menu} placement="bottomLeft">     
                  <div>
                      <Avatar style={{ backgroundColor: "orange", verticalAlign: 'middle' }} size="small">
                          N
                      </Avatar>
                      <strong style={{marginLeft:"10px", color:"#ffffffc4"}}>Ngoc Trinh</strong>
                  </div>     
                  </Dropdown>   
                </Col>     
            </Row>
    )
}

export default AppHeader