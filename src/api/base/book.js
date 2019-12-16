import {createAuthApiRequest} from '../index'

export const getBookByReview = (limit, page) => {
    return createAuthApiRequest({
        url: `/api/books/byreview?limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const searchBook = (limit, q) => {
    return createAuthApiRequest({
        url: `/api/books/search?limit=${limit}&q=${q}`, 
        method: 'get',
    })
}
