<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 5rem 1rem 2.5rem;
}

.page-enter-active {
  transition:
    opacity 150ms ease-out,
    transform 150ms ease-out;
}

.page-leave-active {
  transition: opacity 100ms ease-in;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
}
</style>
