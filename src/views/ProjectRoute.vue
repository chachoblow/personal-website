<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getProject } from '@/content'
import ProjectPage from '@/components/ProjectPage.vue'

const route = useRoute()
const router = useRouter()

const slug = String(route.params.slug)
const project = getProject(slug)

if (!project) router.replace({ name: 'not-found' })
</script>

<template>
  <ProjectPage v-if="project" :project="project" />
</template>
