import React, { useState, useEffect } from 'react'
import Books from './Books'
import { searchBookByAuthorName, searchBookByAuthorId } from '../../api/base/book'
import { useParams } from 'react-router-dom'
const Authors = () => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const _fetchData = async (id, value) => {
        const result = await searchBookByAuthorId({id: id, limit: 25, page:value})
        if (result.success) {
            if (page === 1) {
                setBooks(result.data)
                if (result.data.length < 25) setHasMore(false)
            } else {
                if (result.data.length > 0){
                    setBooks(books.concat(result.data))
                } else {
                    setHasMore(false)
                }
            }
        }
    }

    useEffect(() => {
        _fetchData(id, page)
    }, [id])

    return (
        <div>
            <h3 className="book-suggest">Kết quả tìm kiếm</h3>
            <Books books={books} 
                hasMore={hasMore} 
                page={page}
                next={() => {
                    _fetchData(id, page+1)
                    setPage(page+1)
                }}
            >
            </Books>
        </div>
    )
}

export default Authors