<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  padding: var(--padding-page);
  line-height: 1.15;
}
</style>
