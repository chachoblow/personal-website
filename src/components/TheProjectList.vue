<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface ProjectInfo {
  route: string
  title: string
}

const projects = ref<ProjectInfo[]>([
  { route: '/beacon', title: 'Beacon' },
  { route: '/branches', title: 'Branches' },
  { route: '/cyclux', title: 'Cyclux' },
  { route: '/porttownsend', title: 'Port Townsend' },
])
</script>

<template>
  <nav>
    <div v-for="project in projects" :key="project.route" class="project-item">
      <RouterLink :to="project.route">
        <img
          class="project-item__image"
          src="@/assets/Beacon/CloudyBeach-03.png"
        />
      </RouterLink>
      <div class="project-item__info">
        <RouterLink :to="project.route">
          <div class="project-item__info-title">{{ project.title }}</div>
        </RouterLink>
        <div class="project-item_-info-description">
          A device that pings other with their own device to enable connection
          whilst long distance.
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.project-item {
  display: flex;
  flex-direction: row;
}

.project-item + .project-item {
  margin-top: 48px;
}

.project-item__image {
  width: 100%;
  height: auto;
  max-width: 600px;
}

.project-item__info {
  color: var(--color-text);
  display: flex;
  width: 100%;
  height: auto;
  max-width: 600px;
  padding-top: 24px;
}

.project-item__info-title {
  padding-right: 48px;
  color: var(--color-text);
  text-decoration: none;
}
</style>
