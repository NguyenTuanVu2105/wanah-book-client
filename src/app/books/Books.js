import React, { useState, useEffect } from 'react'
import './Books.css'
import BookCell from './component/BookCell'
import { getBookByReview } from '../../api/base/user'
import { parseImage } from '../../helper/parse/parser'

const Books = () => {
    const [books, setBooks] = useState([])
    const _fetchData = async () => {
        const result = await getBookByReview(20, 1)
        if (result.success) {
            setBooks(result.data)
        }
    }

    useEffect(() => {
        _fetchData()
    }, [])
    return (
        <div>
            <h3 className="book-suggest">Sách được gợi ý</h3>
            <div className="book-row">
                {
                    books.map((book, index) => (
                            <BookCell
                                key={index} 
                                id = {book.id}
                                image={parseImage(book.image)} 
                                name={book.name} 
                                star={book.star}
                                author={book.authors.map(x => x.name).join(', ')} 
                            ></BookCell>                        
                    ))
                }           
            </div>
        </div>
    )
}

export default Books