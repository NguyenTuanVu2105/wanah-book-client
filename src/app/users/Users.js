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
    const [showToggle, setShowToggle] = useState(false)
    const [sortBy, setSortBy] = useState("Mới nhất")

    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [users, setUsers] = useState([])
    const onToggle = () => {
        setShowToggle(!showToggle)
    }

    const _fetchData = async (page) => {
        const result = await getUserNearest(15, page)
        if (result.success) {
            if (result.data.length > 0) {
                setUsers(users.concat(result.data))
            } else {
                setHasMore(false)
            }
        }
    }

    useEffect(() => {
        _fetchData(1)
    }, [])

    const onSetSortBy = (newSortBy) => {
        return () => {
            setSortBy(newSortBy);
            setShowToggle(!showToggle)
        }
    }

    const handleClick = (id, action) => {
        props.history.push(`/user/${id}/${action}`)
    }

    return (
        <div>
            <div className="title">
                <div className="header-title"><b>Sắp xếp theo:</b></div>
                <div className="header-filter" onClick={onToggle}> {sortBy} </div>
                <div className="button-down"></div>
                <div className="create-review">Tạo review</div>
            </div>
            {
                showToggle && (
                    <div className="show-filter">
                        <div className="filter-item" onClick={onSetSortBy("Mới nhất")}>Mới nhất</div>
                        <div className="filter-item" onClick={onSetSortBy("Mới nhì")}>Mới nhì</div>
                        <div className="filter-item" onClick={onSetSortBy("Mới ba")}>Mới ba</div>
                    </div>
                )
            }
            <InfiniteScroll
                dataLength={users.length}
                next={() => {
                    _fetchData(page + 1)
                    setPage(page + 1)
                }}
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
                                        <Button type="shipped" className="button-review-user" onClick={() => handleClick(userdata.id, 2)}>Reviews</Button>
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