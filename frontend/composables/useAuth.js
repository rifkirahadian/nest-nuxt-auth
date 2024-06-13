export const useAuth = () => {
  const isAuthenticated = () => {
    if (process.client) {
      return !!localStorage.getItem('auth')
    }
    return false
  }

  const getUser = () => {
    if (process.client) {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    }
    return null
  }

  const login = (token, user) => {
    if (process.client) {
      localStorage.setItem('auth', token)
      localStorage.setItem('user', JSON.stringify(user))
    }
  }

  const logout = () => {
    if (process.client) {
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
    }
  }

  return {
    isAuthenticated,
    getUser,
    login,
    logout
  }
}
