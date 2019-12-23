import React, { useState, useEffect } from 'react'
import { getBookByReview } from '../../api/base/book'
import Books from './Books'
const BooksContainer = () => {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const _fetchData = async (value) => {
        const result = await getBookByReview(25, value)
        if (result.success) {
            if (result.data.length > 0){
                setBooks(books.concat(result.data))
            } else {
                setHasMore(false)
            }
        }
    }

    useEffect(() => {
        _fetchData(page)
    }, [])
    return (
        <div>
            <h3 className="book-suggest">Sách được gợi ý</h3>
            <Books books={books} 
                hasMore={hasMore} 
                page={page}
                next={() => {
                    _fetchData(page+1)
                    setPage(page+1)
                }}
            >
            </Books>
        </div>
    )
}

export default BooksContainer