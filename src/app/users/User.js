import React, { useState, useEffect } from 'react'
import './User.scss'
import {Tabs, Button} from 'antd'
import {useParams} from 'react-router-dom'  
import Reviews from './components/Reviews'
import UserHeader from './UserHeader'
import { getUserDetail } from '../../api/base/user'
import BookCase from './components/BookCase'
const { TabPane } = Tabs


const User = () => {
    let {id, action} = useParams();
    const [user, setUser] = useState(null)
    const fetchData = async () => {
        const result = await getUserDetail(id)
        if (result.success) {
            setUser(result.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [id])

    const buttons = (
        <div className="user-btn-group">
            <Button type="primary" size="large" style={{width: "200px"}}>Nhắn tin</Button>
        </div>
    )
    
    return (
        <div className="user">
            <UserHeader user={user ? user.profile : null} grbtn={buttons}></UserHeader>
            <Tabs defaultActiveKey={action}>
                <TabPane tab={`Tủ sách (${user ? user.books.length: 0})`} key="1">
                    <BookCase books={user ? user.books: []} isBtn={true}></BookCase>    
                </TabPane>
                <TabPane tab={`Reviews (${user ? user.reviews.length: 0})`} key="2">
                    <Reviews reviews={user ? user.reviews: []}></Reviews>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default User