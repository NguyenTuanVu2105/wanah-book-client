import React from 'react'
import './UserHeader.scss'
import {Card, Avatar} from 'antd'
import { parseImage } from '../../helper/parse/parser'

const UserHeader = (props) => {
    const {user, grbtn} = props
    return (
        <Card style={{background: "#237EB10F"}}>
            <div className="flex">
                <div className="col-3 user-avatar">
                    <Avatar size={96} src={user ? parseImage(user.avatar): ''}></Avatar>
                    <p className="user-name">{user ? user.first_name + ' ' + user.last_name: ''}</p>
                </div>
                <div className="col-6 user-info"> 
                    <p className="user-description">{user ? user.description: ''}</p>
                    <p className="user-address">Địa chỉ: &nbsp;{user ? user.address_detail: ''}</p>
                </div>
                <div className="col-3"> 
                    {grbtn}
                </div>
            </div>
        </Card>
    )
}

export default UserHeader