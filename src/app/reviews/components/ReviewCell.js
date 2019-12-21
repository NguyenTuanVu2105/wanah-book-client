import React from 'react'
import "./ReviewCell.scss"
import { VoteUpDown } from '../../common/updownvote/VoteUpDown'
import ShowMore from 'react-show-more'
import StarRatings from 'react-star-ratings'
import { parseImage } from '../../../helper/parse/parser'

const ReviewCell = (props) => {
    const {review} = props
    return (
        <div>
            {
                review &&  <div className="review-wrap">
                <div className="review-content">
                    <div className="column">
                        <img src={parseImage(review.user.profile.avatar)} alt="name" className="image-avatar-review"></img>
                        <div>
                            <p>{review.user.profile.first_name + ' ' + review.user.profile.last_name}</p>
                            
                            <StarRatings rating={review.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px">
        
                            </StarRatings>
                        </div>
                        {/* <p>{review.reviewDate}</p> */}
                    </div>                                
                    <div className="content-book-review">
                        <ShowMore lines={4} more='Xem thêm' less='Rút gọn'>
                            {
                                review.content
                            }
                        </ShowMore>
                        
                    </div>                           
                </div>
                { !props.showBookImage && <img src={review.book ?parseImage(review.book.image): ''} alt="" className="image-book-review"></img>}
                 <VoteUpDown currentScore={review.VoteCount} id={review.id} voted={review.voted}></VoteUpDown>      
            </div> 
            }
        </div>
    )
}

export default ReviewCell