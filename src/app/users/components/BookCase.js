import React from 'react' 
import { Card, Button } from 'antd'
import {Link} from 'react-router-dom'
import "./BookCase.scss"
import StarRatings from 'react-star-ratings'

const BookCase = (props) => {
    let {books} = props
    return (
        <div className="bookcase">
            {
                books.map(book => (
                    <Card style={{border: "0px", borderBottom:"1px solid #e6e6e6"}}>
                        <div className="flex">
                            <div className="col-2 book-case-image">
                                <img src={book.image}></img>
                            </div>
                            <div className="col-10 book-case-content">
                                <a className="book-case-name" href="#">{book.name}</a>
                                <div className="flex book-case-author">Tác giả:&nbsp;&nbsp;<a className="inline" href="/">{book.author}</a></div>
                                <StarRatings rating={book.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px"/>
                            </div>
                        </div>
                        <Button></Button>
                    </Card> 
                ))
            }
        </div>
    )
}

export default BookCase