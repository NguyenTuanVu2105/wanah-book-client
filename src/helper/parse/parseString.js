export const parseStringToList = (str) => {
    let datas = str.split(", ")
    let res = datas.map(data => parseInt(data))
    return res
}