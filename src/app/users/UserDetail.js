import React from 'react';
import './UserDetail.scss'
import { parseImage, parseDistance } from '../../helper/parse/parser';
import { withRouter } from 'react-router-dom';


const UserDetail = (props) => {
    const {user, btn} = props
    return(
        <div className="user-detail">
            <div className="user-wrap">
                <img src={parseImage(user.profile.avatar)} className="image-avatar-user"></img>
                <div onClick={() => props.history.push(`/user/${user.id}/1`)} className="user-name hover-bolder">{user.profile.first_name + " " + user.profile.last_name}</div>
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

export default withRouter(UserDetail);