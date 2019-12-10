import Paths from '../../routes/Paths'
import {getCookie, removeCookie, setCookie} from '../storage/cookies'
import {COOKIE_KEY} from '../storage/sessionStorage'

export const logout = () => {
    removeCookie(COOKIE_KEY.TOKEN);
    removeCookie(COOKIE_KEY.AVATAR);
    removeCookie(COOKIE_KEY.NAME);
    removeCookie(COOKIE_KEY.USER_ID);
    window.location.href = Paths.Login
}

export const getUser = () => {
    let token = getCookie(COOKIE_KEY.TOKEN)
    return token ? {
        token: token,
        name: getCookie(COOKIE_KEY.NAME),
        id: getCookie(COOKIE_KEY.USER_ID),
        avatar: getCookie(COOKIE_KEY.AVATAR)
    } : null
}

export const checkAuth = () => {
    return getCookie(COOKIE_KEY.TOKEN) ? true : false
}

export const setUserCookies = (token, userId, name, avatar) => {
    setCookie(COOKIE_KEY.TOKEN, token);
    setCookie(COOKIE_KEY.USER_ID, userId);
    setCookie(COOKIE_KEY.NAME, name);
    setCookie(COOKIE_KEY.AVATAR, avatar);
}