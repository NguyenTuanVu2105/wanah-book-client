import React from 'react'
import "./ReviewCell.scss"
import { VoteUpDown } from '../../common/updownvote/VoteUpDown'
import ShowMore from 'react-show-more'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatings from 'react-star-ratings'

const ReviewCell = (props) => {
    const {review} = props
    return (
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
                <ShowMore lines={4} more='Xem thêm' less='Rút gọn'>
                    {
                        review.reviewContent
                    }
                </ShowMore>
                
            </p>                           
        </div>
        <img src={review.reviewBook} className="image-book-review"></img>
         <VoteUpDown></VoteUpDown>      
    </div>   
    )
}

export default ReviewCell