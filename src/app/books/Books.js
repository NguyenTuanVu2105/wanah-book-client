import React from 'react'
import './Books.css'
import { books } from './data/Book.js'
import BookCell from './component/BookCell'


const Books = () => {
    return (
        <div>
            <h3 className="book-suggest">Sách được gợi ý</h3>
            <div className="book-row">
                {
                    books.map((book, index) => (
                            <BookCell 
                                image={book.image} 
                                name={book.name} 
                                star={book.star}
                                author={book.author} 
                            ></BookCell>                        
                    ))
                }           
            </div>
        </div>
    )
}

export default Books