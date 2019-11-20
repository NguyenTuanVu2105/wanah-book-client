import React, { useState } from 'react'
import './Reviews.css'
import StarRatings from 'react-star-ratings'
import { reviews } from './data/Review'
import { VoteUpDown } from '../common/updownvote/VoteUpDown'
import ShowMore from 'react-show-more'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reviews = () => {
    const [showToggle, setShowToggle] = useState(false)
    const onClick = () => {
        setShowToggle(!showToggle)
    }

    return (
        <div>
            <div className="title">
                <div className="header-title"><b>Sắp xếp theo:</b></div>
                <div className="header-filter" onClick={onClick}>Mới nhất</div>
                <div className="button-down"></div>
                <div className="create-review">Tạo review</div>
            </div>
            {
                showToggle && (
                    <div className="show-filter">
                        <div className="filter-item">Mới nhất</div>
                        <div className="filter-item">Mới nhất</div>
                        <div className="filter-item">Mới nhất</div>
                    </div>
                )
            }
            {
                reviews.map((review, index)=>(
                    <div className="review-wrap">
                        <div className="review-content">
                            <div class="column">
                                <img src={review.reviewAvatarUser} className="image-avatar-review"></img>
                                <div>
                                    <p>{review.reviewUserName}</p>
                                    <p>
                                        <StarRatings rating={review.reviewStar} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px">

                                        </StarRatings>
                                    </p>
                                </div>
                                <p>{review.reviewDate}</p>
                            </div>                                
                            <p className="content-book-review">
                                <ShowMore lines={5} more='Xem thêm' less='Rút gọn'>
                                    {
                                        review.reviewContent
                                    }
                                </ShowMore>
                                
                            </p>                           
                        </div>
                        <img src={review.reviewBook} className="image-book-review"></img>
                         <VoteUpDown></VoteUpDown>      
                    </div>                   
                ))
            }
            
        </div>
    )
}

export default Reviews