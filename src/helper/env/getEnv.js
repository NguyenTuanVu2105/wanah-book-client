export const getEnv = (name) => {
    const NAME = name.toString()
    return process.env[`REACT_APP_${NAME}`]
}