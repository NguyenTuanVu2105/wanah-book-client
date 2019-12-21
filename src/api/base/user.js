import {createAuthApiRequest} from '../index'

export const getUserByBook = (bookId) => {
    return createAuthApiRequest({
        url: `/api/user/bybook?bookId=${bookId}`, 
        method: 'get',
    })
}

export const getUserNearest = (limit, page) => {
    return createAuthApiRequest({
        url: `/api/auth/contact?limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const getUserDetail = (userId) => {
    return createAuthApiRequest({
        url: `/api/user?userId=${userId}`, 
        method: 'get',
    })
}
