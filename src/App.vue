<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useDarkModeStore } from './stores/darkMode'
import { NConfigProvider } from 'naive-ui'

const darkModeStore = useDarkModeStore()

onMounted(() => {
  darkModeStore.apply()
})
</script>

<template>
  <main>
    <NConfigProvider
      :theme="darkModeStore.naiveUiTheme"
      :theme-overrides="darkModeStore.naiveUiThemeOverrides"
    >
      <RouterView />
    </NConfigProvider>
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
