export const loginStatus = (name) => localStorage.getItem(name)
export const setLoginToken = (name,value) => localStorage.setItem(name,value)