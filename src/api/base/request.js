import { createAuthApiRequest } from "../index"

export const getRequests = () => {
  return createAuthApiRequest({
      url: '/api/requests',
      method: 'get'
  })
}

export const addBorrowRequests = (book_user_id, time_borrow) => {
  return createAuthApiRequest({
      url: '/api/own/request/borrow',
      method: 'post',
      data: {
        book_user_id,
        time_borrow
      }
  })
}

export const acceptRequest = (request_id) => {
  return createAuthApiRequest({
      url: '/api/request/accept',
      method: 'post',
      data: {
        request_id
      }
  })
}

export const denyRequest = (request_id) => {
  return createAuthApiRequest({
      url: '/api/request/deny',
      method: 'post',
      data: {
        request_id
      }
  })
}

export const getRequestDetail = (request_id) => {
  return createAuthApiRequest({
      url: `/api/request?request_id=${request_id}`,
      method: 'get',
  })
}

export const convertHavedBorrow = (book_user_id, time_borrow) => {
  return createAuthApiRequest({
    url: '/api/own/convert/borrow',
    method: 'post',
    data: {
      book_user_id,
      time_borrow
    }
})
}

export const convertReturn = (book_user_id) => {
  return createAuthApiRequest({
    url: '/api/own/convert/return',
    method: 'post',
    data: {
      book_user_id,
    }
})
}
 
