import React, { useContext, useState } from 'react'
import { Button, Icon, Layout, Row, Col, Input, Select, Dropdown, Avatar, Menu, AutoComplete } from 'antd';
import './AppHeader.scss'
import { logout } from '../../../api/auth/auth';
import AppContext from '../../../AppContext';
import { parseImage } from '../../../helper/parse/parser';
import Paths from '../../../routes/Paths';
import { searchBook, searchBookByAuthorName } from '../../../api/base/book';
import { withRouter } from 'react-router-dom';
import { getUserSearch } from '../../../api/base/user';

const { Header } = Layout
const { Option } = Select

const AppHeader = (props) => {
  const context = useContext(AppContext)
  const myUser = context.user 
  const [searchType, setSearchType] = useState('book')
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const menu = (
    <Menu style={{zIndex: 1000000000}}>
      <Menu.Item key="1">
        <a href={Paths.Profile}>
          Xem hô sơ
            </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href={Paths.UpdateProfile}>
          Chỉnh sửa thông tin cá nhân
            </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <div onClick={() => {logout()}}>Đăng xuất</div>
          </Menu.Item>
    </Menu>
  );
  const handleSearchType = (value) => {
    setSearchType(value)
  }
  const getBookResult = async(q) => {
    const result = await searchBook(q, 10, 1)
    if (result.success) {
      setData(result.data.map(x => {
        return {
          id: x.id,
          name: x.name
        }
      }
      ))
    }
  }

  const getAuthorResult = async (q) => {
    const result = await searchBookByAuthorName({q, limit:10, page:1})
    if (result.success) {
      setData(result.data.map(x => {
        return {
          id: x.id,
          name: x.name
        }
      }))
    }
  }

  const getUserResult = async (q) => {
    const result = await getUserSearch(q, 10, 1)
    if (result.success) {
      setData(result.data.map(x => {
        return {
          id: x.id,
          name: x.profile.first_name + ' ' + x.profile.last_name
        }
      }))
    }
  }
  
  const handleSearch = (value) => {
    setValue(x => value)
    switch (searchType) {
      case 'book': 
        getBookResult(value)
        break
      case 'author':
        getAuthorResult(value)
        break
      case 'user':
        getUserResult(value)
        break
    }
  }
  const handleSelect = (value) => {
      setValue('')
      switch (searchType) {
        case 'book': 
        props.history.push(`/book/${value}`)
        break
      case 'author':
        props.history.push(`/author/${value}`)
        break
      case 'user':
        props.history.push(`/search/user/${data.find(x => x.id === parseInt(value)).name}`)
        break
      }
      
  }
  const renderOptions = (item) => {
    return (<Option key={item.id}>{item.name}</Option>)
  }
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: "#8900d4" }}>
      <Row className="header" justify="space-between" align="middle" type="flex">
        <Col>
          <a href='/'><img src={parseImage("logo.png")} alt="" style={{ height: 64 }}></img></a>
        </Col>
        <Col xs={8} className="flex-center">
          <div className="search-type">
          <Select id="search-select" defaultValue="book" onChange={handleSearchType} showArrow={false} getPopupContainer={() => document.getElementById("search-select")}>
            <Option value="book">Sách</Option>
            <Option value="author">Tác giả</Option>
            <Option value="user">Người dùng</Option>
          </Select>
          </div>
          <AutoComplete
          id='header-search'
          style={{width: "80%"}}
          size="small"
          placeholder="Tìm kiếm"
          value={value}
          onSearch={handleSearch}
          onSelect={handleSelect}
          dataSource={data.map(renderOptions)}
        >
                    <Input
            suffix={
                <Icon type="search" />
            }
          />
         </AutoComplete>
        </Col>
        <Col>
          <Dropdown overlay={menu} placement="bottomLeft" getPopupContainer={() => document.getElementById("user-dropdown")}>
            <div id="user-dropdown" style={{height: 30, display: "flex", alignItems: "center"}}>
              <Avatar src={parseImage(myUser.avatar)} size="small">
              </Avatar>
              <strong style={{ marginLeft: "10px", color: "#ffffffc4" }}>{myUser.name}</strong>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default withRouter(AppHeader)