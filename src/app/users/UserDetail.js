import React from 'react';
import './UserDetail.scss'

const UserDetail = (props) => {
    const {userdata} = props
    return(
        <div className="user-detail">
            <p>
                {userdata.userName}
            </p>
        </div>
    )
}

export default UserDetail;