import {createAuthApiRequest} from '../index'

export const addReview = (data) => {
    return createAuthApiRequest({
        url: `/api/review/add`, 
        method: 'post',
        data: data
    })
}