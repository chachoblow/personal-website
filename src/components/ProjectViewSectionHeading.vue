<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  level: {
    type: Number,
    required: true,
  },
})

const tag = computed(() => {
  return `h${props.level.toString()}`
})
</script>

<template>
  <component :is="tag"><slot></slot></component>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5 {
  font-size: 14px;
  font-weight: bold;
}

h1 {
  margin-bottom: 2rem;
}

h2,
h3,
h4,
h5 {
  margin-bottom: 1.1rem;
}
</style>
