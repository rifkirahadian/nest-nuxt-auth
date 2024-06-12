<!-- pages/index.vue -->
<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96 text-center">
      <h1 class="text-2xl mb-6">Authenticated Page</h1>
      <p class="mb-6">Welcome, you are logged in!</p>
      <button @click="handleLogout" class="w-full bg-red-500 text-white p-2 rounded">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'

const { logout } = useAuth()
const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}

definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped>
/* Add your styles here if needed */
</style>
