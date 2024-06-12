export const useAuth = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true'
  }

  const logout = () => {
    localStorage.removeItem('auth')
  }

  return {
    isAuthenticated,
    logout
  }
}
