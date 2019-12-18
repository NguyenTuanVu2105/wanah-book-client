import React from 'react';
import './UserDetail.scss'
import StarRatings from 'react-star-ratings'
import { parseImage, parseDistance } from '../../helper/parse/parser';


const UserDetail = (props) => {
    const {user, btn} = props
    return(
        <div className="user-detail">
            <div className="user-wrap">
                <img src={parseImage(user.profile.avatar)} className="image-avatar-user"></img>
                <div className="user-name">{user.profile.first_name + " " + user.profile.last_name}</div>
            </div>
            <div className="infor-user">
                <p className="user-message">{user.profile.description}</p>
                <p className="user-address">Địa chỉ: {user.profile.address_detail}</p>
                <p>{parseDistance(user.distance)}</p>
            </div>
            {btn}
        </div>
    )
}

export default UserDetail;