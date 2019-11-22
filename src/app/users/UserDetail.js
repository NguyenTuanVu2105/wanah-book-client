import React from 'react';
import './UserDetail.scss'
import ShowMore from 'react-show-more'
import StarRatings from 'react-star-ratings'
import { Button } from 'antd';

const UserDetail = (props) => {
    const {userdata} = props
    return(
        <div className="user-detail">
            <div className="user-wrap">
                <img src={userdata.userAvatar} className="image-avatar-user"></img>
                <div className="user-name">{userdata.userName}</div>
                <div>
                    <StarRatings rating={userdata.numberStars} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px">
                    </StarRatings>
                </div>

            </div>
            <div className="infor-user">
                <p className="user-message">{userdata.message}</p>
                <p className="user-address">{userdata.address}</p>
            </div>
            <div className="book-review">
                <Button type="danger" className="button-book">Tủ sách của tôi</Button>
                <Button type="shipped" className="button-review">Reviews</Button>
                
            </div>
        </div>
    )
}

export default UserDetail;