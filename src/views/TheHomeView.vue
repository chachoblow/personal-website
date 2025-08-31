<script setup lang="ts">
import { listProjects } from '@/content'
const projects = listProjects()
</script>

<template>
  <div class="home-view">
    <section class="home-view__section">
      <p>Wesley Klein is a maker based in Bay Area, California.</p>
      <p>
        His practice moves between engineering and art, spanning code, images,
        objects, and books, and branching into experiments with printing, wood,
        and interactive forms.
      </p>
      <p>
        This site collects selected works and ongoing experiments across
        disciplines, offered as a record and an open sketchbook.
      </p>
    </section>
    <section class="home-view__section">
      <div class="home-view__section-title">Contact:</div>
      <ul>
        <li><a href="mailto:wes@wesklein.com">Email</a></li>
        <li><a href="https://www.instagram.com/okimwes/">Instagram</a></li>
        <li><a href="https://github.com/chachoblow">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/wesleyklein">LinkedIn</a></li>
      </ul>
    </section>
    <section class="home-view__section">
      <div class="home-view__section-title">Work:</div>
      <ul>
        <li v-for="p in projects" :key="p.slug">
          <RouterLink :to="{ name: 'project', params: { slug: p.slug } }">
            {{ p.title }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

.home-view__section + .home-view__section {
  margin-top: 14px;
}

.home-view__section-title {
  margin-bottom: 4px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
