import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserByBook } from '../../api/base/user';
import UserDetail from '../users/UserDetail';
import { getBookDetail } from '../../api/base/book';
import { Button } from 'antd';

const Borrow = () => {
    let {id} = useParams();
    const [users, setUsers] = useState([])
    const [book, setBook] = useState(null)
    const [reviews, setReviews] = useState([])
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
    useEffect(() => {
      _fetchData()
      _getBook()
    }, [])

    return (
        <div style={{paddingTop:'15px'}}>
            <h5 style={{padding:'20px 0'}}>Chủ sách <a href={`/book/${id}`} style={{color: 'blue'}}>{book ? book.name : null}</a></h5>
            {
                users.map(user => (
                    <UserDetail 
                    user={user}
                    btn={(
                        <Button>Mượn sách</Button>
                    )} 
                    ></UserDetail>
                ))  
            }
        </div>    
    )
}

export default Borrow