import React, { useState, useEffect } from 'react'
import './BookDetail.css'
import StarRatings from 'react-star-ratings'
import { FaBluetooth } from 'react-icons/fa'
import ShowMore from 'react-show-more'
import { useParams, withRouter } from 'react-router-dom'
import { getBookDetail, addBookUser } from '../../api/base/book'
import { parseImage } from '../../helper/parse/parser'
import { Tabs, notification } from 'antd'
import { getReviewByBook } from '../../api/base/review'
import ReviewCell from '../reviews/components/ReviewCell'
const { TabPane } = Tabs


const BookDetail = (props) => {
  let { id } = useParams();
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
      setReviews(res.data)
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
  const handleBorrow = () => {
    props.history.push(`/book/${id}/borrow`)
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
                <img src={parseImage(book.image)} />
              </div>
              <div className="book-detail-wrapper">
                <h3 style={{ fontWeight: 500, color: '#b643cd' }}>{book.name}</h3>
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
                  <StarRatings rating={book.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="16px" starSpacing="5px"></StarRatings>
                  <b style={{ margin: '10px' }}> {Math.round(book.star * 10) / 10} </b>
                </div>
                <div>
                  <button style={{ background: '#0000ff94', color: 'white', height: '34px', lineHeight: '17px', borderRadius: '5px' }} onClick={_addBookUser}>Thêm vào tủ sách</button>
                  <button style={{ background: '#19b187', color: 'white', height: '34px', lineHeight: '17px', borderRadius: '5px' }} onClick={handleBorrow}>Mượn sách</button>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="book-detail-info">
              <div>
                <strong>Nội dung sách</strong>
                <div style={{ margin: '10px 0 30px 0' }}>
                  <ShowMore lines={2} more={<div style={{fontWeight: 500, textDecoration: 'none'}}><i>-> xem thêm</i></div>} less={<div style={{fontWeight: 500}}><i>-> rút gọn</i></div>}>                    
                    {book.description}
                  </ShowMore>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <strong style={{ display: 'block', marginBottom: '30px' }}>Review</strong>
      {
        reviews.map(review => <ReviewCell review={review} showBookImage={false}></ReviewCell>)
      }
    </div>

  )
}

export default withRouter(BookDetail)