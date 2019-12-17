import React, { useState, useEffect } from 'react'
import './BookDetail.css'
import StarRatings from 'react-star-ratings'
import { FaBluetooth } from 'react-icons/fa' 
import { useParams } from 'react-router-dom'
import { getBookDetail, addBookUser } from '../../api/base/book'
import { parseImage } from '../../helper/parse/parser'
import { Tabs, notification } from 'antd'
import { getReviewByBook } from '../../api/base/review'
import ReviewCell from '../reviews/components/ReviewCell'
const { TabPane } = Tabs

const BookDetail = () => {
    let {id} = useParams();
    const [book, setBook] = useState(null)
    const [reviews, setReviews] = useState([])
    const _fetchData = async () => {
      const result = await getBookDetail(id)
      const res = await getReviewByBook(id)
      console.log(res)
      if (result.success) {
        setBook(result.data)
      }
      if (res.success) {
        setReviews(res.data.reviews)
      }
    }
    const _addBookUser = async () => {
      const result = await addBookUser(id)
      console.log(result)
      if (result.success) {
        notification['success']({
          message: 'Thêm sách thành công',
          description: `Bạn đã thêm sách ${book.name} vào tủ sách của mình`
        })
      } else {
        if (result.message) {
          notification['error']({
            message: result.message,
          })
        }
      }
    }
    useEffect(() => {
      _fetchData()
    }, [])
    return (
      <div>
       {
         book && (
          <div className="book-detail">
                    <div className="book-detail-header">
            <div className="book-detail-image">
              <img src={parseImage(book.image)}  />
            </div>
            <div className="book-detail-wrapper">
              <h3>{book.name}</h3>
              <div className="book-detail-author">
                <p className='text-bold'>Tác giả</p>
                <a href="/">{book.authors.map(x => x.name).join(', ')}</a>
              </div>
              <div className="book-detail-author">
                <p className='text-bold'>Thể loại</p>
                {book.categories.map(x => x.name).join(', ')}
              </div>
              <div className="book-detail-author">
                <p className='text-bold'>Nhà xuất bản</p>
                {book.publisher}
              </div>
              <div className="flex-start">
              <StarRatings rating={5} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px"></StarRatings>
              <b style={{margin:'10px'}}> 5.0 </b>
              <a href="/" style={{color:'blue'}}>(Xem 100 bài review)</a>
              </div>
              <div>
               <button style={{background:'#0000ff94', color:'white'}} onClick={_addBookUser}>Thêm vào tủ sách</button>
               <button style={{background: '#19b187', color:'white'}}>Mượn sách</button>
            </div>
            </div>
          </div>
          <hr></hr>
          <div className="book-detail-info">
            <div>
              <strong>Nội dung sách</strong>
            <div style={{margin: '10px 0 30px 0'}}>{book.description}</div>
               </div>
            </div>
            </div>
         )
       }
          {/* <strong>Review</strong>
            {
              reviews.map(review => <ReviewCell review={review} showBookImage={false}></ReviewCell>)
            } */}
         </div> 
    
    )
}

export default BookDetail