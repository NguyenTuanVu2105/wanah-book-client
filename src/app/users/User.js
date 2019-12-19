import React from 'react'
import './User.scss'
import {Tabs, Button} from 'antd'
import {useParams} from 'react-router-dom'
import {users} from './data/user'
import BookCase from './components/BookCase'
import Reviews from './components/Reviews'
import UserHeader from './UserHeader'
import {parseStringToList} from '../../helper/parse/parseString'
const { TabPane } = Tabs

const User = () => {
    let {id, action} = useParams();
    let user = users.find(user => user.id === parseInt(id))

    const buttons = (
        <div className="user-btn-group">
            <Button type="primary" size="large" style={{width: "200px"}}>Nhắn tin</Button>
        </div>
    )
    return (
        <div className="user">
            <UserHeader user={user} grbtn={buttons}></UserHeader>
            <Tabs defaultActiveKey={action}>
                <TabPane tab="Tủ sách" key="1">
                    {/* <BookCase books={_books}></BookCase> */}
                </TabPane>
                <TabPane tab="Reviews" key="2">
                    <Reviews></Reviews>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default User