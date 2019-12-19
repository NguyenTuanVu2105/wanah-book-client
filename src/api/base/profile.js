import { createAuthApiRequest } from ".."

export const getUserProfile = () => {
  return createAuthApiRequest({
      url: '/api/auth/profile',
      method: 'get'
  })
}