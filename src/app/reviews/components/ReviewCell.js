import React from 'react'
import "./ReviewCell.scss"
import { VoteUpDown } from '../../common/updownvote/VoteUpDown'
import ShowMore from 'react-show-more'
import StarRatings from 'react-star-ratings'

const ReviewCell = (props) => {
    const {review} = props
    return (
        <div className="review-wrap">
        <div className="review-content">
            <div className="column">
                <img src={review.reviewAvatarUser} alt="name" className="image-avatar-review"></img>
                <div>
                    <p>{review.reviewUserName}</p>
                    
                    <StarRatings rating={review.reviewStar} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px">

                    </StarRatings>
                </div>
                <p>{review.reviewDate}</p>
            </div>                                
            <div className="content-book-review">
                <ShowMore lines={4} more='Xem thêm' less='Rút gọn'>
                    {
                        review.reviewContent
                    }
                </ShowMore>
                
            </div>                           
        </div>
        <img src={review.reviewBook} alt="" className="image-book-review"></img>
         <VoteUpDown></VoteUpDown>      
    </div>   
    )
}

export default ReviewCell