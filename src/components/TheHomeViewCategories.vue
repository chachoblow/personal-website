<script setup lang="ts">
import type { ProjectItem } from '@/models/ProjectCategory'
import { useProjectStore } from '@/stores/projects'

const itemHovered = defineModel<string>('itemHovered')
const itemClicked = defineModel<null | ProjectItem>('itemClicked')

const projectStore = useProjectStore()

function updateItemHovered(menuImage?: string) {
  itemHovered.value = menuImage ?? ''
}

function updateItemClicked(item: ProjectItem) {
  itemHovered.value = ''
  itemClicked.value = item
}
</script>

<template>
  <div class="column">
    <div
      v-for="category in projectStore.categories"
      :key="category.name"
      class="column-section category"
    >
      <div class="category__name">
        {{ category.name }}
      </div>
      <ul>
        <li
          v-for="item in category.items"
          :key="item.name"
          class="row"
          @mouseenter="updateItemHovered(item.menuImage)"
          @mouseleave="updateItemHovered()"
        >
          <div class="item" @click="updateItemClicked(item)">
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.category + .category {
  margin-top: 24px;
}

.category__name {
  font-weight: bold;
}

ul {
  list-style-type: none;
  list-style-position: outside;
  padding: 0;

  .item {
    text-decoration: none;
    color: var(--color-text);
    cursor: pointer;
  }

  .item:hover {
    text-decoration: underline;
  }
}
</style>
