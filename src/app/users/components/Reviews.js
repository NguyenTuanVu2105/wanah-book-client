import React from 'react' 
import ReviewCell from '../../reviews/components/ReviewCell'
import { Empty } from 'antd'

const Reviews = (props) => {
    let {reviews} = props
    return (
        <div>
            {
                reviews.length > 0 ?
            reviews.map(review => 
                <ReviewCell showImageBook={false} review={review}></ReviewCell>
            ) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
            }
        </div>
    )
}

export default Reviews