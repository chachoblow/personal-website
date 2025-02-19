<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <header>
    <nav><RouterLink to="/">Back</RouterLink></nav>
    <div class="info">Beacon</div>
  </header>
  <swiper-container navigation="true" :pagination="{ type: 'fraction' }">
    <swiper-slide>Swiper slide 1</swiper-slide>
    <swiper-slide>Swiper slide 2</swiper-slide>
    <swiper-slide>Swiper slide 3</swiper-slide>
  </swiper-container>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 48px;
}

nav a {
  text-decoration: none;
  color: var(--color-text);

  :hover {
    text-decoration: underline;
  }
}

swiper-container {
  width: 100%;
  height: 100%;
  flex-grow: 2;
}
</style>
