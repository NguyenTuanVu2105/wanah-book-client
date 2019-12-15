import React from 'react'
import './Notifications.css'
import { Card, Avatar, Button } from 'antd';
import {users} from './data/User'

const { Meta } = Card;

const Notifications = () => {
    return (
        <div>
            {
                users.map(user => {
                    const message = `Yêu cầu mượn sách ${user.book} từ bạn`
                    const description = (
                        <div>
                            <p>{message}</p>
                            <Button style={{background: 'blue', color:'white', marginRight:'10px'}}>Chấp nhận</Button>
                            <Button style={{background: 'red', color:'white'}}>Từ chối</Button>
                        </div>
                    )
                    return (
                        <div className="notification-raw">
                            <Card 
                                className="notification-row"
                            >
                                <Meta
                                    avatar={<Avatar src={user.avatar} />}
                                    title={user.name}
                                    description={description}
                                />      
                            </Card>,
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notifications