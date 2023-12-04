<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const handleLoginClick = () => {
  authStore.login()
  navigateTo('/')
}
</script>

<template>
  <h1>ログイン</h1>
  <button type="button" @click="handleLoginClick()">ログイン</button>
</template>
