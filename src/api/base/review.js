import {createAuthApiRequest} from '../index'

export const addReview = (data) => {
    return createAuthApiRequest({
        url: `/api/review/add`, 
        method: 'post',
        data: data
    })
}

export const getReviewByBook = (bookId, limit, page) => {
    return createAuthApiRequest({
        url: `/api/review/bybook?bookId=${bookId}&limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const getLatestReview = (limit, page) => {
    return createAuthApiRequest({
        url: `/api/reviews/new?limit=${limit}&page=${page}`, 
        method: 'get',
    })
}

export const addVote = (reviewId, is_upvote) => {
    return createAuthApiRequest({
        url: `/api/vote/add`, 
        method: 'post',
        data: {
            reviewId,
            is_upvote
        }
    })
}