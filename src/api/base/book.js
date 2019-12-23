import {createAuthApiRequest} from '../index'

export const getBookByReview = (limit, page) => {
    return createAuthApiRequest({
        url: `/api/books/byreview?limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const searchBook = (q, limit, page) => {
    return createAuthApiRequest({
        url: `/api/books/search?q=${q}&limit=${limit}&page=${page}`, 
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

export const searchBookByCategoryName = (q) => {
    return createAuthApiRequest({
        url: `/api/books/search/bycategoryname?q=${q}`, 
        method: 'get',
    })
}

export const searchBookByCategoryId = (id) => {
    return createAuthApiRequest({
        url: `/api/books/search/bycategoryid?id=${id}`, 
        method: 'get',
    })
}

export const searchBookByAuthorName = ({q, limit, page}) => {
    return createAuthApiRequest({
        url: `/api/books/search/byauthorname?q=${q}&limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const searchBookByAuthorId = ({id, limit, page}) => {
    return createAuthApiRequest({
        url: `/api/books/search/byauthorid?id=${id}&limit=${limit}&page=${page}`, 
        method: 'get',
    })
}
