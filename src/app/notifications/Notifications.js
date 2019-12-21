import React, { useEffect, useContext } from 'react'
import './Notifications.css'
import { Card, Avatar, Button } from 'antd';
import { useState } from 'react';
import { getRequests, acceptRequest, denyRequest } from '../../api/base/request';
import { parseImage } from '../../helper/parse/parser'
import { withRouter } from 'react-router-dom';
import AppContext from '../../AppContext';

const { Meta } = Card;

const Notifications = (props) => {
    const context = useContext(AppContext)
    const [requests, setRequests] = useState([])
    const _fetchData = async () => {
        const res = await getRequests()
        if (res.success) {
            setRequests(res.data)
        }
    }

    useEffect(() => {
        _fetchData()
    }, [])
   
    const handleUser = (id) => {
        props.history.push(`/user/${id}/1`)
    }

    const handleAccept = async (id) => {
        const result = await acceptRequest(id)
        _fetchData()
    }

    const handleDeny = async (id) => {
        const result = await denyRequest(id)
        _fetchData()
    }

    return (
        <div>
            {
                requests.map(request => {
                    const isIncoming = context.user.id !== request.user.id
                    const user = isIncoming ? request.user : request.book_user.user
                    const message = isIncoming ? 
                    `Yêu cầu mượn sách " ${request.book_user.book.name} " từ bạn` :
                    `Nhận yêu cầu mượn sách " ${request.book_user.book.name} " từ bạn`
                    const status = request.book_user.status === 'Đợi Mượn' ? 'Đang chờ chấp nhận' :
                                    (request.book_user.status === 'Liên lạc' ? (request.is_accept ? 'Đang liên lạc' : (isIncoming ? 'Sách đã cho mượn' : 'Sách đã được mượn')) 
                                    : (request.is_accept ? 'Đã mượn' : 'Sách đã được mượn')
                                    )
                    const description = (
                        <div className="notification-content">
                            <p>{message}</p>
                            <p>Thời gian: {request.time_borrow} tuần</p>
                            <p>Trạng thái: <strong>{status}</strong></p>
                            {isIncoming ?                                         
                                status === 'Đang liên lạc' || status === 'Đã mượn' ? 
                                (
                                    <Button style={{background: '#46b3e6', color:'#000'}} onClick={() => handleDeny(request.id)}>Xem chi tiết</Button>
                                ) :
                                (<div>
                                    <Button 
                                        style={{background: status === 'Sách đã cho mượn' ? '#9595fd' : '#6decb9', color:'#000', marginRight:'10px'}}
                                        disabled={status === 'Sách đã cho mượn'}
                                        onClick={() => handleAccept(request.id)}
                                    >
                                        Chấp nhận
                                    </Button>
                                    <Button style={{background: '#f6da63', color:'#000'}} onClick={() => handleDeny(request.id)}>Từ chối</Button>
                                </div>) : 
                                (
                                    status === 'Đang liên lạc' || status === 'Đã mượn' ? 
                                    (
                                        <Button style={{background: 'green', color:'white'}} onClick={() => handleDeny(request.id)}>Xem chi tiết</Button>
                                    ) :
                                    (
                                        <Button style={{background: 'red', color:'white'}} onClick={() => handleDeny(request.id)}>Hủy yêu cầu</Button>
                                    )
                                )
                            }
                        </div>
                    )
                    return (
                        <div className="notification-raw">
                            <Card 
                                className="notification-row"
                            >
                                <Meta
                                    avatar={<Avatar src={parseImage(user.profile.avatar)} />}
                                    title={
                                        (<span onClick={() => handleUser(user.id)} className='hover-bolder'>{user.profile.first_name + " " + user.profile.last_name}</span>)
                                    }
                                    description={description}
                                />      
                            </Card>,
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withRouter(Notifications)