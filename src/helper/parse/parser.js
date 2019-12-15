import { getEnv } from "../env/getEnv"

const host = getEnv("HOST")
console.log(host)
export const parseImage = (img) => {
    return host + img
}