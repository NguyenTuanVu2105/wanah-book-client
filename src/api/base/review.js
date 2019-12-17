import {createAuthApiRequest} from '../index'

export const addReview = (data) => {
    return createAuthApiRequest({
        url: `/api/review/add`, 
        method: 'post',
        data: data
    })
}

export const getReviewByBook = (bookId) => {
    return createAuthApiRequest({
        url: `/api/review/bybook?id=${bookId}`, 
        method: 'get',
    })
}