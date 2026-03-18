<script setup lang="ts">
import { computed } from 'vue'
import { listProjects } from '@/content'
import { PhArrowUpRight } from '@phosphor-icons/vue'
import { ref } from 'vue'
import {
  type DisciplineType,
  DISCIPLINES,
  resolveDisciplineTypes,
} from '@/content/disciplines'

const projects = listProjects()
const activeFilter = ref<DisciplineType | null>(null)
const disciplines = DISCIPLINES

const filteredProjects = computed(() =>
  activeFilter.value
    ? projects.filter(p => p.disciplineTypes.includes(activeFilter.value!))
    : projects,
)

function toggleFilter(type: DisciplineType) {
  activeFilter.value = activeFilter.value === type ? null : type
}

const contact = [
  { label: 'wes@wesklein.com', href: 'mailto:wes@wesklein.com' },
  { label: 'ofidlebit', href: 'https://www.instagram.com/ofidlebit/' },
]
</script>

<template>
  <div class="home">
    <header class="home__header">
      <h1>Wesley Klein</h1>
    </header>

    <section class="home__info" aria-label="About">
      <p>A record and open sketchbook</p>
    </section>

    <section class="home__contact" aria-label="Contact">
      <p>Based in the Bay Area</p>
      <ul>
        <li v-for="c in contact" :key="c.href">
          <a :href="c.href" target="_blank" rel="noopener noreferrer">
            {{ c.label }}
            <PhArrowUpRight
              :size="12"
              aria-hidden="true"
              class="icon icon--sup"
            />
          </a>
        </li>
      </ul>
    </section>

    <section class="home__projects" aria-label="Projects">
      <div class="home__subheader">
        <h2>Projects</h2>
      </div>
      <div class="home__disciplines">
        <button
          v-for="d in disciplines"
          :key="d.type"
          :class="{ active: activeFilter === d.type }"
          @click="toggleFilter(d.type)"
        >
          <component :is="d.icon" :size="16" aria-hidden="true" />
          {{ d.label }}
        </button>
      </div>
      <TransitionGroup name="project" tag="ul">
        <li v-for="p in filteredProjects" :key="p.slug" class="project">
          <div class="project__title">
            <RouterLink :to="{ name: 'project', params: { slug: p.slug } }">
              {{ p.title }}
            </RouterLink>
            <component
              v-for="(discipline, i) in resolveDisciplineTypes(
                p.disciplineTypes,
              )"
              :key="i"
              :is="discipline.icon"
              :size="16"
              aria-hidden="true"
              class="icon"
            />
          </div>
          <p class="project__summary">{{ p.summary }}</p>
        </li>
      </TransitionGroup>
    </section>
  </div>
</template>

<style scoped>
h1,
h2 {
  all: unset;
  font-weight: 500;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.icon {
  vertical-align: middle;
}

.icon--sup {
  font-size: 0.75em;
}

.icon--last {
  margin-right: 0;
}

.home {
  width: min(var(--page-width-medium), 100%);
  margin-left: auto;
  margin-right: auto;
}

.home__header {
  margin-bottom: var(--margin-small);
}

.home__subheader {
  margin-bottom: var(--margin-small);
}

.home__info {
  margin-bottom: var(--margin-small);
}

.home__contact {
  margin-bottom: var(--margin-large);
}

.home__disciplines {
  display: flex;
  align-items: center;
  gap: var(--gap-medium);
  flex-wrap: wrap;
  margin-bottom: var(--margin-medium);
}

.project + .project {
  margin-top: var(--margin-small);
}

.project__title {
  display: flex;
  align-items: center;
  gap: var(--gap-medium);
}

.project-enter-active,
.project-leave-active {
  transition:
    opacity 200ms ease-out,
    transform 200ms ease-out;
}

.project-leave-active {
  position: absolute;
}

.project-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.project-leave-to {
  opacity: 0;
}

.project-move {
  transition: transform 150ms ease-out;
}

button {
  cursor: pointer;
  background: var(--color-background);
  border: 1px solid var(--color-link);
  border-radius: 40px;
  padding: 4px 12px;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  transition:
    background 0.2s ease-out,
    color 0.2s ease-out;
  display: flex;
  align-items: center;
  gap: var(--gap-medium);
}

button.active {
  background: var(--color-link);
}

button:hover:not(.active) {
  background: var(--color-link);
}
</style>
