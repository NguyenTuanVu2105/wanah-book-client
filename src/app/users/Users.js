import React, {useState} from 'react'
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
    const [showToggle, setShowToggle] = useState(false)
    const [sortBy, setSortBy] = useState("Mới nhất")
    const onToggle = () => {
        setShowToggle(!showToggle)
    }

    const onSetSortBy = (newSortBy) => {
        return () => {
            setSortBy(newSortBy);
            setShowToggle(!showToggle)
        }
    }
    return(
        <div>
            <div className="title">
                <div className="header-title"><b>Sắp xếp theo:</b></div>
                <div className="header-filter" onClick={onToggle}> {sortBy} </div>
                <div className="button-down"></div>
                <div className="create-review">Tạo review</div>
            </div>
            {
                showToggle && (
                    <div className="show-filter">
                        <div className="filter-item" onClick={onSetSortBy("Mới nhất")}>Mới nhất</div>
                        <div className="filter-item" onClick={onSetSortBy("Mới nhì")}>Mới nhì</div>
                        <div className="filter-item" onClick={onSetSortBy("Mới ba")}>Mới ba</div>
                    </div>
                )
            }
            {
                userDatas.map(userdata => (
                    <UserDetail userdata={userdata}></UserDetail>
                ))
            }    
        </div>   
    )
}

export default Users