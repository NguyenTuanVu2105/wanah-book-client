import React from 'react'
import './Users.css'
import {Card, Avatar} from 'antd'
import User from './User'
import {Tabs, Button} from 'antd'
import {useParams} from 'react-router-dom'
import {users} from './data/user'
import {books} from '../books/data/Book'
import BookCase from './components/BookCase'
import Reviews from './components/Reviews'
import UserHeader from './UserHeader'
import {parseStringToList} from '../../helper/parse/parseString'
import UserDetail from './UserDetail'
import {userDatas} from './data/userDetail'
const { TabPane } = Tabs

const {Meta} = Card

const Users = () => {  
    return(
        <div>
            <div className="title">
                <div className="header-title"><b>Sắp xếp theo:</b></div>
                <div className="header-filter"> Mới nhất</div>  
            </div>
            {
                userDatas.map(userdata => (
                    <UserDetail userdata={userdata}></UserDetail>
                ))
            }    
        </div>   
    )
}

export default Users