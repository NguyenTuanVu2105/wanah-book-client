import React from 'react'
import './BookCell.css'
import StarRatings from 'react-star-ratings'

const BookCell = (props) => {
  return (
      <div className="wrap-book">
        <img src={props.image} className="image-book"></img>
        <div className="content-book">
          <p className="book-name">
            {
              props.name
            }
          </p>
          <p>
            <StarRatings rating={props.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px">

            </StarRatings>
          </p>
        </div>
      </div>
  )
}

export default BookCell;