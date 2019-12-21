import React, { useEffect, useContext } from 'react'
import './Notifications.css'
import { Card, Avatar, Button, Steps, Divider, PageHeader } from 'antd'
import { useState } from 'react'
import { parseImage } from '../../helper/parse/parser'
import { withRouter, useParams } from 'react-router-dom'
import { getRequestDetail } from '../../api/base/request'
import AppContext from '../../AppContext'
import StarRatings from 'react-star-ratings'
import './Request.scss'
import moment from 'moment'

const { Meta } = Card
const { Step } = Steps

const Request = (props) => {
    const context = useContext(AppContext)
    const [current, setCurrent] = useState(0)
    const [request, setRequest] = useState(null)
    const { id } = useParams() 
    const onChange = (current) => {
        setCurrent(current)
    }
    const _fetchData = async () => {
        const result = await getRequestDetail(id)
        if (result.success) {
            setRequest(result.data)
            if (result.data.book_user.status === 'Liên Lạc') {
                setCurrent(0)
            } else {
                if (result.data.book_user.status === 'Đã Mượn') {
                    setCurrent(1)
                } 
            }
        }
    }

    useEffect(() => {
        _fetchData()
    }, [])
    return (
        <div>
            {
                request && 
                <div>
                    <h4 style={{marginTop: '15px'}}>Yêu cầu mượn sách</h4>
                {
                    request.user.id !== context.user.id ? 
                    ( <div>
                        <Card style={{margin: '20px 0'}}>
                            <Meta
                            avatar={<Avatar src={parseImage(request.user.profile.avatar)} />}
                            title={request.user.profile.first_name + " " + request.user.profile.last_name}
                            description={request.user.profile.address_detail}
                            />
                            <a style={{margin: '15px 0 0 40px', display:'block'}} href='/'>Nhắn tin với {request.user.profile.first_name + " " + request.user.profile.last_name}</a>
                        </Card>
                        <div>Gửi yêu cầu mượn sách đến bạn</div>
                    </div> ) : 
                    ( <div> Bạn đã gửi yêu cầu mượn sách </div>)
                }
                    <Card style={{marginTop: '20px'}}>
                        <div className="flex">
                            <div className="book-case-image">
                                <img src={parseImage(request.book_user.book.image)} alt={request.book_user.book.name}></img>
                            </div>
                            <div className="col-8 book-case-content">
                                <a className="book-case-name" href={`/book/${request.book_user.book.id}`}>{request.book_user.book.name}</a>
                                <div className="flex book-case-author">Tác giả:&nbsp;&nbsp;<a className="inline" href="/">{request.book_user.book.authors.map(x => x.name).join(' ')}</a></div>
                                <StarRatings rating={request.book_user.book.star} starRatedColor="#ffdc34" numberOfStars={5} starDimension="14px" starSpacing="3px"/>
                            </div>
                        </div>    
                    </Card> 
                    <p>Thời gian mượn: {request.time_borrow} tuần</p>
                    <p>Ngày yêu cầu: {new Date(request.createdAt).toLocaleDateString()}</p>
                    {
                        current >= 2 && (
                            <div>
                                <p>Ngày mượn: {request.request_date}</p>
                                <p>Ngaỳ trả: {request.return_date}</p>
                            </div>
                        )
                    }
                    {
                        request.user.id === context.user.id &&
                        ( <Card style={{margin: '20px 0'}}>
                        <Meta
                        avatar={<Avatar src={parseImage(request.book_user.user.profile.avatar)} />}
                        title={request.book_user.user.profile.first_name + " " + request.book_user.user.profile.last_name}
                        description={request.book_user.user.profile.address_detail}
                        />
                    </Card>)
                    }
                <Divider></Divider>
                <Steps current={current} onChange={onChange} direction="vertical">
                    <Step title="Liên lạc"  />
                    <Step title="Mượn sách"  />
                    <Step title="Trả sách"  />
                </Steps>
                </div>
            }
        </div>
    )
}

export default withRouter(Request)