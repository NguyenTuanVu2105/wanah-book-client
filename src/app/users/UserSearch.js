import React, { useState, useEffect } from 'react'
import './Users.css'
import { getUserNearest, getUserSearch } from '../../api/base/user'
import { withRouter, useParams } from 'react-router-dom'
import Users from './Users'

const UserContainer = (props) => {
    const { query } = useParams()
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [users, setUsers] = useState([])

    const _fetchData = async (page) => {
        const result = await getUserSearch(query, 10, page)
        if (result.success) {
            if (page === 1) {
                setUsers(result.data) 
                if (result.data.length < 15) setHasMore(false)
            }
            else {
                if (result.data.length > 0) {
                    setUsers(users.concat(result.data))
                } else {
                    setHasMore(false)
                }
            }
        }
    }

    useEffect(() => {
        _fetchData(1)
    }, [query])

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