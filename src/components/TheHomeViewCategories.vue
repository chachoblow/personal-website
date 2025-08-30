<script setup lang="ts">
import { useProjectStore } from '@/stores/projects'

const itemHovered = defineModel<string>('itemHovered')

const projectStore = useProjectStore()

function updateItemHovered(menuImage?: string) {
  itemHovered.value = menuImage ?? ''
}
</script>

<template>
  <div class="column">
    <div
      v-for="category in projectStore.categories"
      :key="category.name"
      class="column-section category"
    >
      <div class="category__name">{{ category.name }}</div>
      <ul>
        <li
          v-for="item in category.items"
          :key="item.name"
          class="row"
          @mouseenter="updateItemHovered(item.menuImage)"
          @mouseleave="updateItemHovered()"
        >
          <RouterLink :to="item.route" class="item">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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
