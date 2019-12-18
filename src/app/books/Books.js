import React, { useState, useEffect } from 'react'
import './Books.css'
import BookCell from './component/BookCell'
import { getBookByReview } from '../../api/base/book'
import { parseImage } from '../../helper/parse/parser'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin } from 'antd'

const Books = () => {
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
            
            <InfiniteScroll
                    dataLength={books.length}
                    next={() => {
                        _fetchData(page+1)
                        setPage(page+1)
                    }}
                    hasMore={hasMore}
                    loader={<Spin style={{margin: 'auto 0', width: '100%'}} tip="Loading..."></Spin>}
                    >
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
                                reviewCount ={book.ReviewCount}
                            ></BookCell>                        
                    ))
                }      
            </div>

            </InfiniteScroll>     
        </div>
    )
}

export default Books