import {createApiRequest} from '../index'

export const test = () => {
    return createApiRequest({
        url: '/api', 
        method: 'get'
    })
}