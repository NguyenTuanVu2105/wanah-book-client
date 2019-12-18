import {createAuthApiRequest} from '../index'

export const getBookByReview = (limit, page) => {
    return createAuthApiRequest({
        url: `/api/books/byreview?limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const searchBook = (q) => {
    return createAuthApiRequest({
        url: `/api/books/search?q=${q}`, 
        method: 'get',
    })
}

export const getBookDetail = (bookid) => {
    return createAuthApiRequest({
        url: `/api/book/info?bookId=${bookid}`,
        method: 'get'
    })
}

export const addBookUser = (bookid) => {
    return createAuthApiRequest({
        url: '/api/own/book/add',
        method: 'post',
        data: {id: bookid}
    })
}

