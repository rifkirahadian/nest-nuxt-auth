import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated() && to.path !== '/login') {
      return navigateTo('/login')
    }
  }
})
