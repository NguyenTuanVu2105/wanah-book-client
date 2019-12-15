import React from 'react'
import './BookCell.css'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

/**
 * 
 * @param {Object} props 
 */
const View = (props) => (
  <div className="wrap-book">
    <div className="image">
      <img src={props.image} className="image-book"></img>
    </div>
    <div className="content-book">
      <label className="book-name">{props.name}</label>
      <i className="book-author">{props.author}</i>
      <div className="book-star">
        <StarRatings rating={props.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px" />
      </div>
    </div>
  </div>
)

/**
 * 
 * @param {Object} props 
 * @param {String} props.linkTo
 */
const BookCell = (props) => {
  if (props.linkTo) {
    return (
      <Link to={props.linkTo} className="book-cell">
        <View {...props} />
      </Link>
    )
  }
  return (
    <Link className="book-cell">
      <View {...props} />
    </Link>

  )
}

export default BookCell;