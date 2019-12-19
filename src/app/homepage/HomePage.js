import React, { useState, useEffect, useContext } from 'react'
import './HomePage.scss'
import {Card} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import Paths from '../../routes/Paths'
import BookCell from '../books/component/BookCell'
import ReviewCell from '../reviews/components/ReviewCell'
import { getBookByReview } from '../../api/base/book'
import AppContext from '../../AppContext'
import { getLatestReview } from '../../api/base/review'

const HomePage = () => {
    const context = useContext(AppContext)

    const [books, setBooks] = useState([])
    const [reviews, setReviews] = useState([])
    const _fetchData = async () => {
        const result = await getBookByReview(5, 1)
        if (result) {
            if (result.success) {
                setBooks(result.data)
            }
        }
    }
    const _getReviews = async () => {
        const result = await getLatestReview(5, 1)
        if (result) {
            if (result.success) {
                setReviews(result.data)
            }
        }
    }
    useEffect(() => {
        _fetchData()
        _getReviews()
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
                            <BookCell key={index} id={book.id} image={book.image} name={book.name} star={book.star} reviewCount={book.ReviewCount} author={book.authors.map(x => x.name).join(', ')}></BookCell>                        
                    ))
                }     
            </div>
            <div className="homepage-title flex-space">
                <p>Review</p>
                <Link className="show-more" to="/reviews">Xem thêm&nbsp;></Link>
            </div>
            <div className="homepage-review">
                {reviews.map((review,index) => (
                    <ReviewCell showImageBook={true} key={index} review={review}></ReviewCell>
                ))}
                
            </div>
        </div>
    )
}

export default withRouter(HomePage)