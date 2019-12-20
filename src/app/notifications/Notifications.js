import React from 'react'
import { Card, Avatar, Button } from 'antd';
import {users} from './data/User'
import '../notifications/Notifications.css'

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
                            {/* <Button style={{background: '#6decb9', color:'white', marginRight:'10px'}}>Chấp nhận</Button>
                            <Button style={{background: '#fa877f', color:'white'}}>Từ chối</Button> */}
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className="accept" >Chấp nhận</div>
                                <div className="refuse">Từ chối</div>
                            </div>    
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