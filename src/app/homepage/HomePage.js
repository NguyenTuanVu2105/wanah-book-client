import React, { useState, useEffect, useContext } from 'react'
import './HomePage.scss'
import {Card} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import Paths from '../../routes/Paths'
import BookCell from '../books/component/BookCell'
import {reviews} from '../reviews/data/Review'
import ReviewCell from '../reviews/components/ReviewCell'
import { getBookByReview } from '../../api/base/user'
import AppContext from '../../AppContext'

const HomePage = () => {
    const context = useContext(AppContext)

    const [books, setBooks] = useState([])
    const _fetchData = async () => {
        const {data, success} = await getBookByReview(5, 1)
        if (success) {
            setBooks(data)
        }
    }

    useEffect(() => {
        _fetchData()
    }, [])
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
                        cover={<img alt="example" src="./asset/user.jpg"/>}
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
                <p>Sách được review nhiều</p>
                <Link className="show-more" to="/books">Xem thêm&nbsp;></Link>
            </div>
            <div className="homepage-book">
                {
                    books.map((book, index) => (
                            <BookCell key={index} id={book.id} image={book.image} name={book.name} star={book.star} author={book.authors.map(x => x.name).join(', ')}></BookCell>                        
                    ))
                }     
            </div>
            <div className="homepage-title flex-space">
                <p>Review</p>
                <Link className="show-more" to="/reviews">Xem thêm&nbsp;></Link>
            </div>
            <div className="homepage-review">
                {reviews.slice(0, 3).map((review,index) => (
                    <ReviewCell key={index} review={review}></ReviewCell>
                ))}
                
            </div>
        </div>
    )
}

export default withRouter(HomePage)