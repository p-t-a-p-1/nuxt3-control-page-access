<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
  <h1>{{ id }} - 管理者限定ページ</h1>
</template>
