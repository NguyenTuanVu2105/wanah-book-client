import React from 'react'
import './Books.css'
import { books } from './data/Book.js'
import StarRatings from 'react-star-ratings'
import BookCell from './component/BookCell'

const Books = () => {
    return (
        <div>
            <div className="book-suggest">Sách được gợi ý</div>
            <div className="book-row">
                {
                    books.map((book, index) => (
                        <BookCell image={book.image} name={book.name} star={book.star} ></BookCell>
                    ))
                }           
            </div>
            
        </div>
    )
}

export default Books