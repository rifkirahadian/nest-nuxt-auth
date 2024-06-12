<!-- pages/login.vue -->
<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl mb-6">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block mb-2">Username:</label>
          <input type="text" v-model="username" required class="w-full p-2 border rounded">
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password:</label>
          <input type="password" v-model="password" required class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (username.value === 'user' && password.value === 'pass') {
    localStorage.setItem('auth', 'true')
    router.push('/')
  } else {
    alert('Invalid credentials')
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
