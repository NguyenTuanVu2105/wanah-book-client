import Paths from '../../routes/Paths'
import {getCookie, removeCookie, setCookie} from '../storage/cookies'
import {COOKIE_KEY} from '../storage/sessionStorage'
import { getUserProfile } from '../base/profile';

export const logout = () => {
    console.log('logout')
    removeCookie(COOKIE_KEY.TOKEN);
    window.location.href = Paths.Login
}

export const getUser = async () => {
    let token = getCookie(COOKIE_KEY.TOKEN)
    let user = {}
    if (token) {
        const result = await getUserProfile()
        if (result.success) {
            user = result.data
            console.log(user)
        } else {
            return null
        }
    }
    return token ? {
        token: token,
        name: user.first_name + " " + user.last_name,
        id: user.id,
        avatar: user.avatar
    } : null
}

export const checkAuth = () => {
    return getCookie(COOKIE_KEY.TOKEN) ? true : false
}

export const setUserCookies = (token) => {
    setCookie(COOKIE_KEY.TOKEN, token);
}