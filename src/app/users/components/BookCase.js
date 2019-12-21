import React from 'react' 
import { Card, Button, Empty } from 'antd'
import "./BookCase.scss"
import StarRatings from 'react-star-ratings'
import { parseImage } from '../../../helper/parse/parser'

const BookCase = (props) => {
    let {books, isBtn} = props
    return (
        <div className="bookcase">
            {
                books.length > 0 ?
                books.map(book => (
                    <Card style={{border: "0px", borderBottom:"1px solid #e6e6e6"}}>
                        <div className="flex">
                            <div className="book-case-image">
                                <img src={parseImage(book.image)} alt={book.name}></img>
                            </div>
                            <div className="col-8 book-case-content">
                                <a className="book-case-name" href={`/book/${book.id}`}>{book.name}</a>
                                <div className="flex book-case-author">Tác giả:&nbsp;&nbsp;<a className="inline" href="/">{book.authors.map(x => x.name).join(' ')}</a></div>
                                <StarRatings rating={book.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px"/>
                                
                            </div>  
                            <div className="borrow-book">
                                    {isBtn && <Button className="button-borrow">Mượn sách</Button>}
                                </div>                        
                        </div>    
                    </Card> 
                )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
            }
        </div>
    )
}

export default BookCase