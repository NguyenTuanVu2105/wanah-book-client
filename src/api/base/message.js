import {createAuthApiRequest} from '../index'

export const getMessage = (to) => {
    return createAuthApiRequest({
        url: `/api/message?id=${to}`, 
        method: 'get',
    })
}

export const addMessage = (to, content) => {
    return createAuthApiRequest({
        url: `/api/message/add`, 
        method: 'post',
        data: {
            to, 
            content
        }
    })
}

export const getContacts = () => {
    return createAuthApiRequest({
        url: `/api/contacts`, 
        method: 'get',
    })
}