<script setup lang="ts">
import { resolveDisciplineTypes } from '@/content/disciplines'
import { type ProjectDoc, BlockType } from '@/content/types'
import { PhArrowArcRight } from '@phosphor-icons/vue'

const { project } = defineProps<{ project: ProjectDoc }>()
const disciplines = resolveDisciplineTypes(project.disciplineTypes)
</script>

<template>
  <div class="project-view">
    <nav aria-label="Breadcrumb">
      <template v-for="(seg, j) in project.crumbs.segments" :key="j">
        <RouterLink :to="seg.to">{{ seg.label }}</RouterLink>
        <PhArrowArcRight
          v-if="j < project.crumbs.segments.length - 1"
          :size="16"
          aria-hidden="true"
        />
      </template>
    </nav>

    <header>
      <h1>{{ project.title }}</h1>
      <p class="disciplines">
        <template v-for="d in disciplines" :key="d.type">
          <component :is="d.icon" :size="16" aria-hidden="true" />
        </template>
      </p>
    </header>

    <template v-for="(block, i) in project.blocks" :key="i">
      <p v-if="block.type === BlockType.Text">
        {{ block.text }}
      </p>

      <ul v-else-if="block.type === BlockType.List">
        <li v-for="(item, k) in block.items" :key="k">{{ item }}</li>
      </ul>

      <div v-else-if="block.type === BlockType.ImageGroup" class="images">
        <img
          v-for="(img, k) in block.images"
          :key="k"
          :src="img.src"
          :alt="img.alt"
          loading="lazy"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
h1 {
  all: unset;
  font-weight: 500;
}

p {
  margin: 0;
}

.project-view > * {
  width: min(var(--page-width-medium), 100%);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margin-small);
}

nav {
  display: flex;
  align-items: center;
  gap: var(--gap-small);
  margin-bottom: var(
    --margin-medium
  ) !important; /* overrides project-view > * */
}

.disciplines {
  display: flex;
  align-items: center;
  gap: var(--gap-medium);
  flex-wrap: wrap;
}

.images {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-medium);
  align-items: flex-start;
  justify-content: center;
  width: min(var(--page-width-large), 100%);
}

.images img {
  width: auto;
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  display: block;
}

p + p {
  margin-top: var(--margin-small);
}

p + ul {
  margin-top: var(--margin-small);
}

p + .images {
  margin-top: var(--margin-medium);
}

ul + ul {
  margin-top: var(--margin-small);
}

ul + p {
  margin-top: var(--margin-small);
}

ul + .images {
  margin-top: var(--margin-medium);
}

.images + p {
  margin-top: var(--margin-medium);
}

.images + ul {
  margin-top: var(--margin-medium);
}

.images + .images {
  margin-top: var(--margin-small);
}

img + img {
  margin-top: var(--margin-small);
}
</style>
