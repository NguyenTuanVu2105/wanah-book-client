import React from 'react'
import './BookCell.css'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

const BookCell = (props) => {
  return (
    <Link to={`/book/${props.id}`} className="book-cell">
      <div className="wrap-book">
        <div className="image">
          <img src={props.image} alt={props.name} className="image-book"></img>
        </div>
        <div className="content-book">
          <label className="book-name">{props.name}</label>
          <i className="book-author">{props.author}</i>
          <div className="book-star">
            <StarRatings rating={props.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px"/>
            <div> ( {props.reviewCount} reviews)</div>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default BookCell;