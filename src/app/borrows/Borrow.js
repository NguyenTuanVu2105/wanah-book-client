import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserByBook } from '../../api/base/user';
import UserDetail from '../users/UserDetail';
import { getBookDetail } from '../../api/base/book';
import { Button, Modal, InputNumber, notification, Empty } from 'antd';
import { addBorrowRequests } from '../../api/base/request';
import '../borrows/Borrow.css'
import { addMessage } from '../../api/base/message';

const Borrow = () => {
    let {id} = useParams();
    const [users, setUsers] = useState([])
    const [book, setBook] = useState(null)
    const _fetchData = async () => {
        const result = await getUserByBook(id)
        if (result.success) {
            setUsers(result.data)
        }
    }

    const _getBook = async () => {
        const result = await getBookDetail(id)
        if (result.success) {
            setBook(result.data)
        }
    }  

    const handleBorrow = async (id, userId, message) => {
        const value = document.getElementById(`week-${id}`).value
        const result = await addBorrowRequests(id, value)
        if (result.success) {
            if (result.data.message) {
                notification['error']({
                    message: 'Mượn sách thất bại', 
                    description: result.data.message
                })
            } else {
                notification['success']({
                    message: 'Mượn sách thành công', 
                    description: 'Yêu cầu mượn sách của bạn đã được gửi đi. Đang chờ chủ sách chấp nhận'
                })
                await addMessage(userId, message)
            }
        }

    }

    useEffect(() => {
      _fetchData()
      _getBook()
    }, [])

    return (
        <div style={{paddingTop:'15px'}}>
            <h5 className="search-book-title">Người dùng có sách <b><i><a href={`/book/${id}`} style={{color: '#970690'}}>{book ? book.name : null}</a></i></b></h5>
            {
                users.length > 0 ?
                users.map(user => (
                    <div>
                        <UserDetail 
                            user={user}
                            btn={
                                <div>
                                    <div className="borrow-time">
                                        <InputNumber id={`week-${user.book_users.id}`} min={1} max={10} defaultValue={1} style={{width: '65px'}}/>
                                            <div style={{margin: '5px'}}>tuần</div>
                                        </div>
                                    {
                                        user.book_users.status === 'Đợi Mượn' ?
                                        (<Button onClick={() => {
                                            var message = `Chào ${user.profile.first_name + " " + user.profile.last_name}, Cho mình mượn quyển ${book.name} nha`
                                            handleBorrow(user.book_users.id, user.id, message) 
                                        }
                                        } 
                                        className="button-borrow">Mượn sách</Button>) : 
                                        (<Button disabled>Đợi mượn</Button>)
                                    }
                                </div>
                            } 
                        ></UserDetail>
                    </div>

                )) :
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} ></Empty>
            } 
        </div>    
    )
}

export default Borrow