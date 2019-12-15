import {createApiRequest} from '../index'

export const login = (data) => {
    return createApiRequest({
        url: '/api/auth/signin', 
        method: 'post',
        data: data
    })
}

export const register = (data) => {
    return createApiRequest({
        url: '/api/auth/signup', 
        method: 'post',
        data: data
    })
}