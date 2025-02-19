<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useDarkModeStore } from './stores/darkMode'

onMounted(() => {
  useDarkModeStore().apply()
})
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
