<script setup lang="ts">
import type { ProjectDoc, Block } from '@/content/types'

defineProps<{ project: ProjectDoc }>()

function is<K extends Block['type']>(
  b: Block,
  t: K,
): b is Extract<Block, { type: K }> {
  return b.type === t
}
</script>

<template>
  <div class="project-view">
    <template v-for="(b, i) in project.blocks" :key="i">
      <nav v-if="is(b, 'crumbs')" class="frame">
        <div v-for="(seg, j) in b.segments" :key="j">
          <RouterLink :to="seg.to" class="item">
            {{ seg.label }}
          </RouterLink>
          <span
            v-if="b.segments.length > 1 && j < b.segments.length - 1"
            class="nav-separator"
            >›</span
          >
        </div>
      </nav>

      <p v-else-if="is(b, 'text')" class="frame" :class="b.class">
        {{ b.content }}
      </p>

      <div v-else-if="is(b, 'list')" class="frame" :class="b.class">
        <ul>
          <li v-for="(it, k) in b.items" :key="k">{{ it }}</li>
        </ul>
      </div>

      <figure v-else-if="is(b, 'image')" class="frame">
        <img :src="b.src" :alt="b.alt" loading="lazy" class="ph" />
        <figcaption v-if="b.caption" class="caption">
          {{ b.caption }}
        </figcaption>
      </figure>

      <div
        v-else-if="is(b, 'spacer')"
        class="frame"
        :style="{
          'padding-top':
            b.size === 'lg' ? '48px' : b.size === 'md' ? '28px' : '14px',
        }"
      />
    </template>
  </div>
</template>

<style scoped>
.project-view {
  width: 100%;
  height: 100%;
}

ul {
  padding-left: var(--padding-page);
}

nav {
  display: flex;
}

.frame {
  width: 100%;
  max-width: 700px;
  padding: 0 0 var(--padding-page) 0;
}

.frame:last-child {
  padding-bottom: 0;
}

.info-padding-top {
  padding-top: calc(var(--padding-page) * 2);
}

.info-padding-bottom {
  padding-bottom: calc(var(--padding-page) * 3);
}

.nav-separator {
  padding: 0 4px;
}

.ph {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.caption {
  color: var(--muted);
  margin-top: 6px;
  font-size: 12px;
}
</style>
