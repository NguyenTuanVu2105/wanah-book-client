import React from 'react'
import './UserHeader.scss'
import {Card, Avatar} from 'antd'

const UserHeader = (props) => {
    const {user, grbtn} = props
    return (
        <Card style={{background: "#237EB10F"}}>
            <div className="flex">
                <div className="col-3 user-avatar">
                    <Avatar size={96} src={user.avatar}></Avatar>
                    <p className="user-name">{user.name}</p>
                </div>
                <div className="col-7 user-info"> 
                    <p className="user-description">{user.description}</p>
                    <p className="user-address">Địa chỉ: &nbsp;{user.address}</p>
                </div>
                <div className="col-2"> 
                    {grbtn}
                </div>
            </div>
        </Card>
    )
}

export default UserHeader