import React, { useEffect, useContext } from 'react'
import './Notifications.css'
import { Card, Avatar, Button, Steps, Divider, PageHeader, Icon, Modal, notification } from 'antd'
import { useState } from 'react'
import { parseImage } from '../../helper/parse/parser'
import { withRouter, useParams } from 'react-router-dom'
import { getRequestDetail, convertHavedBorrow , convertReturn} from '../../api/base/request'
import AppContext from '../../AppContext'
import StarRatings from 'react-star-ratings'
import './Request.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Meta } = Card
const { Step } = Steps

const Request = (props) => {
    const context = useContext(AppContext)
    const [current, setCurrent] = useState(0)
    const [request, setRequest] = useState(null)
    const { id } = useParams()
    const handleReturn = async() => {
        if (request.user.id !== context.user.id && current===2) {
            const result = await convertReturn(request.book_user.id)
            if (result.success) {
                notification['success']({
                    message: 'Trả sách thành công',
                    description: `Bạn đã được trả cuốn sách ${request.book_user.book.name}.
                    Giở đây bạn có thể cho người khác mượn cuốn này rồi...`
                })
                setCurrent(3)
            }
        }
    }

    const handleBorrow = async() => {
        if (request.user.id !== context.user.id && current===1) {
            const result = await convertHavedBorrow(request.book_user.id, request.time_borrow)
            if (result.success) {
                notification['success']({
                    message: 'Mượn sách thành công',
                    description: `Bạn đã cho mượn cuốn sách ${request.book_user.book.name}.
                    Ngày mượn là ${new Date(request.request_date).toLocaleDateString()}
                    và Ngày trả là ${new Date(request.return_date).toLocaleDateString()}`
                })
                setCurrent(2)
            }
        }
    }
    const _fetchData = async () => {
        const result = await getRequestDetail(id)
        if (result.success) {
            setRequest(result.data)
            if (result.data.book_user.status === 'Liên Lạc') {
                setCurrent(0)
            } else {
                if (result.data.book_user.status === 'Đã Mượn') {
                    setCurrent(2)
                }
                else if (request.is_exprired) {
                    setCurrent(3)
                }
            }
        }
    }

    useEffect(() => {
        _fetchData()
    }, [])
    const style = {
        background: 'blue',
        color: 'white'
    }
    return (
        <div>
            {
                request &&
                <div>
                    <div style={{ marginTop: '15px', fontSize: '18px' }}>Yêu cầu mượn sách</div>
                    {
                        request.user.id !== context.user.id ?
                            (<div>
                                <Card style={{ margin: '8px 0' }}>
                                    <Meta
                                        avatar={<Avatar src={parseImage(request.user.profile.avatar)} />}
                                        title={request.user.profile.first_name + " " + request.user.profile.last_name}
                                        description={request.user.profile.address_detail}
                                    />
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginLeft: '110px' }}>
                                        <div style={{ marginRight: '40px', display: 'flex', alignItems: 'center' }}>
                                            <FontAwesomeIcon style={{ width: '40px', height: '30px', color: '#7CC677' }} icon="book-open"></FontAwesomeIcon>
                                            <div style={{ color: '#8c8c8c', marginLeft: '9px' }}>{request.user.books.length}</div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FontAwesomeIcon style={{ width: '40px', height: '25px', color: '#EBAD93' }} icon="file-alt"></FontAwesomeIcon>
                                        <div style={{ color: '#8c8c8c', marginLeft: '1px' }}>{request.user.books.length}</div>
                                        </div>
                                    </div>  

                                    <a style={{ margin: '15px 0 0 40px', display: 'block' }} href={`/message/${request.user.id}`}><Icon type="message" theme="filled" /> Nhắn tin với {request.user.profile.first_name + " " + request.user.profile.last_name}</a>
                                </Card>
                                <div>Gửi yêu cầu mượn sách đến bạn</div>
                            </div>) :
                            (<div> Bạn đã gửi yêu cầu mượn sách </div>)
                    }
                    <Card style={{ marginTop: '7px', padding: '15px' }} className="require-book">
                        <div style={{ display: 'flex', margin: '0 25px' }}>
                            <div className="book-case-image">
                                <img src={parseImage(request.book_user.book.image)} alt={request.book_user.book.name}></img>
                            </div>
                            <div className="col-8 book-case-content">
                                <a className="book-case-name" href={`/book/${request.book_user.book.id}`}>{request.book_user.book.name}</a>
                                <div className="flex book-case-author">Tác giả:&nbsp;&nbsp;<a className="inline" href={`/author/${request.book_user.book.id}`}>{request.book_user.book.authors.map(x => x.name).join(' ')}</a></div>
                                <StarRatings rating={request.book_user.book.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px" />
                            </div>
                        </div>
                    </Card>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%', margin: '10px 0px 1px 0px' }}>Thời gian mượn: {request.time_borrow} tuần</div>
                        <div style={{ margin: '10px 0px 1px 0px' }}>Ngày yêu cầu: {new Date(request.createdAt).toLocaleDateString()}</div>
                    </div>

                    {
                        current >= 2 && (
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '50%', margin: '1px' }}>Ngày mượn:  {new Date(request.request_date).toLocaleDateString()}</div>
                                <div>Ngày trả:  {new Date(request.return_date).toLocaleDateString()}</div>
                            </div>
                        )
                    }
                    {
                        request.user.id === context.user.id &&
                        (<Card style={{ margin: '20px 0' }}>
                            <Meta
                                avatar={<Avatar src={parseImage(request.book_user.user.profile.avatar)} />}
                                title={request.book_user.user.profile.first_name + " " + request.book_user.user.profile.last_name}
                                description={request.book_user.user.profile.address_detail}
                            />
                        </Card>)
                    }
                    <Divider></Divider>
                    <Steps current={current} className="step-borrow" direction="vertical" style={{marginTop: '15px'}}>
                        <Step title={<div style={current>0 ? style:null} onClick={() => {if (current === 0 && request.user.id !== context.user.id) setCurrent(1)}} className='step'>Liên lạc</div>}/>
                        <Step title={<div style={current>1 ? style:null} onClick={handleBorrow} className='step'>Mượn sách</div>}/>
                        <Step title={<div style={current>2 ? style:null} onClick={handleReturn} className='step'>Trả sách</div>} />
                    </Steps>
                </div>
            }
        </div>
    )
}

export default withRouter(Request)