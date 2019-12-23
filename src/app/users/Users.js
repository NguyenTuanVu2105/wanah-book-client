import React, { useState, useEffect } from 'react'
import './Users.css'
import { userDatas } from './data/userDetail'
import UserDetail from './UserDetail'
import { Button, Icon, Empty } from 'antd'
import { getUserNearest } from '../../api/base/user'
import { Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { withRouter } from 'react-router-dom'

const Users = (props) => {
    const {hasMore, users, page ,next} = props
    const handleClick = (id, action) => {
        props.history.push(`/user/${id}/${action}`)
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={users.length}
                next={next}
                hasMore={hasMore}
                loader={<Spin style={{ margin: 'auto 0', width: '100%' }} tip="Loading..."></Spin>}

            >
                {
                    users.length > 0 ?
                        users.map(userdata => (
                            <UserDetail
                                btn={(
                                    <div className="book-review">
                                        <Button type="danger" className="button-book" onClick={() => handleClick(userdata.id, 1)}>Tủ sách <Icon type="read" /> {userdata.BookCount}</Button>
                                <Button type="shipped" className="button-review-user" onClick={() => handleClick(userdata.id, 2)}>Reviews <Icon type="form" /> {userdata.ReviewCount}</Button>
                                    </div>
                                )}
                                user={userdata}></UserDetail>
                        )) :
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
            </InfiniteScroll>
        </div>
    )
}

export default withRouter(Users)