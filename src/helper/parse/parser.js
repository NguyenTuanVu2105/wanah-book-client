import { getEnv } from "../env/getEnv"

const host = getEnv("HOST")
console.log(host)
export const parseImage = (img) => {
    return host + img
}

export const parseDistance = (distance) => {
    if (distance > 1000) {
        return Math.round(distance/10)/100 + ' km'
    } else {
        return Math.round(distance*100)/100 + ' m'
    }
}