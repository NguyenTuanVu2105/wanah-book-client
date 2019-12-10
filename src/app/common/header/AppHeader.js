import React, { useContext } from 'react'
import { Layout, Row, Col, Input, Select, Dropdown, Avatar, Menu } from 'antd';
import './AppHeader.scss'
import { logout } from '../../../api/auth/auth';
import AppContext from '../../../AppContext';

const { Header } = Layout
const { Search } = Input;
const { Option } = Select

const AppHeader = () => {
  const context = useContext(AppContext)
  const myUser = context.user

  const menu = (
    <Menu style={{zIndex: 1000000000}}>
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
        <div onClick={logout}>Đăng xuất</div>
          </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: "#8900d4" }}>
      <Row className="header" justify="space-between" align="middle" type="flex">
        <Col>
          <img src="./asset/logo.png" alt="" style={{ height: 64 }}></img>
        </Col>
        <Col xs={8} className="flex-center">
          <Select id="search-select" defaultValue="book" showArrow={false} getPopupContainer={() => document.getElementById("search-select")}>
            <Option value="book">Sách</Option>
            <Option value="author">Tác giả</Option>
            <Option value="user">Người dùng</Option>
          </Select>
          <Search
            placeholder="Tìm kiếm"
            onSearch={value => console.log(value)}
            style={{ width: '80%', borderRadius: "0" }}
            size="small"
          />
        </Col>
        <Col>
          <Dropdown overlay={menu} placement="bottomLeft" getPopupContainer={() => document.getElementById("user-dropdown")}>
            <div id="user-dropdown" style={{height: 30, display: "flex", alignItems: "center"}}>
              <Avatar src={myUser.avatar} size="small">
              </Avatar>
              <strong style={{ marginLeft: "10px", color: "#ffffffc4" }}>{myUser.name}</strong>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader