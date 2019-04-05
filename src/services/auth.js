export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const fakehandleLogin = ({ username, password }) => {
  if (username === `admin` && password === `pass`) {
    return setUser({
      username: `admin`,
      name: `Admin`,
      email: `admin@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  // to safeguard the localstorage called in the getuser fucntion
  if (!isBrowser) return false 
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}