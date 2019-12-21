import React, { useState, useEffect, useContext } from 'react'
import {Tabs, Button} from 'antd'
import Reviews from '../users/components/Reviews'
import UserHeader from '../users/UserHeader'
import { getUserDetail } from '../../api/base/user'
import BookCase from '../users/components/BookCase'
import AppContext from '../../AppContext'
import Paths from '../../routes/Paths'
const { TabPane } = Tabs


const Profile = () => {
    const context = useContext(AppContext)
    const [user, setUser] = useState(null)
    const fetchData = async () => {
        const result = await getUserDetail(context.user.id)
        if (result.success) {
            console.log(result.data)
            setUser(result.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [context.user])

    const buttons = (
        <div className="user-btn-group">
            <a href={Paths.UpdateProfile}>
            <Button type="primary" size="large" style={{width: "150px"}}>Chỉnh sửa</Button>
            </a>
        </div>
    )
    return (
        <div className="user">
            <UserHeader user={user ? user.profile : null} grbtn={buttons}></UserHeader>
            <Tabs defaultActiveKey={1}>
                <TabPane tab={`Tủ sách (${user ? user.books.length: 0})`} key="1">
                    <BookCase books={user ? user.books: []}></BookCase>
                </TabPane>
                <TabPane tab={`Reviews (${user ? user.reviews.length: 0})`} key="2">
                    <Reviews reviews={user ? user.reviews: []}></Reviews>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Profile