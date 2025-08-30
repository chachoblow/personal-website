<script setup lang="ts"></script>

<template>
  <div class="container">
    <RouterLink to="/" class="back-button"> &#8592; </RouterLink>
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
}

.back-button {
  font-size: 28px;
  margin-bottom: 48px;
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
}

h1,
h2,
p,
li {
  font-size: 14px;
}

h1,
h2 {
  font-weight: bold;
}

p,
li {
  line-height: 1.7;
}

p + p,
p + ul {
  margin-top: 0.5rem;
}

h1 {
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1.1rem;
}

section + section {
  margin-top: 2rem;
}

ul {
  padding-left: 1.5rem;
}

.images {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.image-container {
  margin: 0;
  transition: transform 0.3s ease;
}

.image-container + .image-container {
  margin-top: 2rem;
}

.gallery-image {
  width: 100%;
  height: auto;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  object-fit: contain;
}
</style>
