import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserByBook } from '../../api/base/user';
import UserDetail from '../users/UserDetail';
import { getBookDetail } from '../../api/base/book';
import { Button, Modal, InputNumber, notification, Empty } from 'antd';
import { addBorrowRequests } from '../../api/base/request';

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

    const handleBorrow = async (id) => {
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
            }
        }
    }

    useEffect(() => {
      _fetchData()
      _getBook()
    }, [])

    return (
        <div style={{paddingTop:'15px'}}>
            <h5 style={{padding:'20px 0'}}>Chủ sách <a href={`/book/${id}`} style={{color: 'blue'}}>{book ? book.name : null}</a></h5>
            {
                users.length > 0 ?
                users.map(user => (
                    <div>
                        <UserDetail 
                            user={user}
                            btn={
                                <div>
                                    <div><InputNumber id={`week-${user.book_users.id}`} min={1} max={10} defaultValue={1}/></div>
                                    {
                                        user.book_users.status === 'Đợi Mượn' ?
                                        (<Button onClick={() => handleBorrow(user.book_users.id)}>Mượn sách</Button>) : 
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