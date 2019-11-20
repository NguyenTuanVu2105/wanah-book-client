import React from 'react'
import './HomePage.scss'
import {Card} from 'antd'
import {Link} from 'react-router-dom'
import Paths from '../../routes/Paths'
import {books} from '../books/data/Book'
import BookCell from '../books/component/BookCell'

const HomePage = () => {
    return (
        <div className="homepage"> 
            <p className="homepage-title">Khám Phá</p>
            <div className="homepage-header">
                <Link to={Paths.Books} className="homepage-header-card"> 
                    <Card
                        hoverable
                        cover={<img alt="example" src="./asset/book.jpg"/>}
                        style={{textAlign: 'center'}}
                    >
                            <strong>Sách</strong>
                    </Card>
                </Link>
                <Link to={Paths.Users} className="homepage-header-card">
                    <Card
                        hoverable
                        cover={<img alt="example" src="./asset/review.jpg"/>}
                        style={{textAlign: 'center'}}
                    >
                        <strong>User</strong>
                    </Card>
                </Link>

                <Link to={Paths.Reviews} className="homepage-header-card">
                    <Card
                    hoverable
                    cover={<img alt="example" src="./asset/review.jpg"/>}
                    style={{textAlign: 'center'}}
                    >
                        <strong>Review</strong>
                    </Card>
                </Link>
            </div>
            <div className="homepage-title flex-space">
                <p>Sách được mượn nhiều</p>
                <Link className="show-more" to="/books">Xem thêm&nbsp;></Link>
            </div>
            <div className="homepage-book">
                {
                    books.map((book, index) => (
                            <BookCell image={book.image} name={book.name} star={book.star} author={book.author}></BookCell>                        
                    ))
                }     
            </div>
            <div className="homepage-title flex-space">
                <p>Review</p>
                <Link className="show-more" to="/books">Xem thêm&nbsp;></Link>
            </div>

        </div>
    )
}

export default HomePage