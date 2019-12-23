import React, { useState, useEffect } from 'react'
import './Books.css'
import BookCell from './component/BookCell'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin } from 'antd'

const Books = (props) => {
    const {books, page, hasMore, next} = props
    console.log(books)
    return (
        <div>     
            <InfiniteScroll
                    dataLength={books.length}
                    next={next}
                    hasMore={hasMore}
                    loader={<Spin style={{margin: 'auto 0', width: '100%'}} tip="Loading..."></Spin>}
                    >
                        <div className="book-row">
                {
                    books.map((book, index) => (
                            <BookCell
                                key={index} 
                                id = {book.id}
                                image={book.image} 
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