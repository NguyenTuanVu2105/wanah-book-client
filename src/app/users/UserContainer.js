import React, { useState, useEffect } from 'react'
import './Users.css'
import { getUserNearest } from '../../api/base/user'
import { withRouter } from 'react-router-dom'
import Users from './Users'

const UserContainer = (props) => {
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [users, setUsers] = useState([])

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

    return (
        <div>
            <div style={{fontWeight: 'bold', fontSize: '20px', margin: '15px'}}>Người dùng gần bạn</div>
            <Users
                page={page}
                hasMore={hasMore}
                next={() => {
                    _fetchData(page + 1)
                    setPage(page + 1)
                }}
                users={users}
            >
            </Users>
        </div>
    )
}

export default withRouter(UserContainer)