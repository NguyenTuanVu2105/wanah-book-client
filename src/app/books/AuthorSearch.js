import React, { useState, useEffect } from 'react'
import Books from './Books'
import { searchBookByAuthorName } from '../../api/base/book'
import { useParams } from 'react-router-dom'
const AuthorSearch = () => {
    const {query} = useParams()
    console.log(query)
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const _fetchData = async (query, value) => {
        const result = await searchBookByAuthorName({q: query, limit: 25, page:value})
        if (result.success) {
            if (result.data.length > 0){
                setBooks(books.concat(result.data.map(x => x.books).reduce((accumulator, currentValue) => [...accumulator, ...currentValue], []) ))
            } else {
                setHasMore(false)
            }
        }
    }

    useEffect(() => {
        _fetchData(query, page)
    }, [query])
    return (
        <div>
            <h3 className="book-suggest">Kết quả tìm kiếm</h3>
            <Books books={books} 
                hasMore={hasMore} 
                page={page}
                next={() => {
                    console.log(query, page + 1)
                    _fetchData(query, page+1)
                    setPage(page+1)
                }}
            >
            </Books>
        </div>
    )
}

export default AuthorSearch