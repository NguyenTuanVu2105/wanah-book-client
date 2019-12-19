import { createAuthApiRequest } from ".."

export const getUserProfile = () => {
  return createAuthApiRequest({
      url: '/api/auth/profile',
      method: 'get'
  })
}

export const updateUserProfile = (data) => {
  return createAuthApiRequest({
    url: "/api/auth/editprofile",
    method: "put",
    data,
  })
}