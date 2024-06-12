<template>
  <div>
    <h1>Authenticated Page</h1>
    <p>Welcome, you are logged in!</p>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'auth'
})

const { logout } = useAuth()
const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
/* Add your styles here */
</style>
