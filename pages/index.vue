<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useUserStore } from '~/store/user'

const authStore = useAuthStore()
const userStore = useUserStore()

const isLogin = computed(() => authStore.isLogin)

const handleLogoutClick = () => {
  authStore.logout()
  navigateTo('/login')
}
</script>

<template>
  <h1>管理画面トップ</h1>
  <NuxtLink to="/admin">管理者限定ページ</NuxtLink>

  <div v-if="isLogin">
    <p>ようこそ、{{ userStore.userName }}さん</p>
    <button type="button" @click="handleLogoutClick">ログアウト</button>
  </div>
</template>
