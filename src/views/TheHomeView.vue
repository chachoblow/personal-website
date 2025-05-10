<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ProjectCategory, ProjectItem } from '@/models/ProjectCategory'
import { useProjectStore } from '@/stores/projects'
import TheGalleryOverlay from '@/components/TheGalleryOverlay.vue'
import { useDarkModeStore } from '@/stores/darkMode'

const projectStore = useProjectStore()
const darkModeStore = useDarkModeStore()

const itemHovered = ref('')

function updateItemHovered(menuImage?: string) {
  itemHovered.value = menuImage ?? ''
}

const itemClicked = ref<null | ProjectItem>(null)

function updateItemClicked(item: ProjectItem) {
  itemHovered.value = ''
  itemClicked.value = item
}

const showGallery = ref(false)

function openGallery() {
  if (!itemClicked.value) {
    return
  }

  showGallery.value = true
}

function closeGallery() {
  showGallery.value = false
  itemClicked.value = null
}

const galleryImages = computed(() => {
  return itemClicked.value?.images ?? []
})

function categoryIcon(category: ProjectCategory) {
  return darkModeStore.isDarkMode ? category.iconLight : category.iconDark
}
</script>

<template>
  <div class="background">
    <Transition @leave="openGallery">
      <img v-if="itemHovered" :src="itemHovered" />
    </Transition>
  </div>
  <Transition>
    <TheGalleryOverlay
      v-show="showGallery"
      :images="galleryImages"
      @gallery-overlay-close="closeGallery"
    />
  </Transition>
  <div class="container">
    <div class="column info">
      <div class="row title">Wesley Klein</div>
      <div class="row">Software & Design</div>
      <div class="row">San Fransisco</div>
    </div>
    <div
      v-for="category in projectStore.categories"
      :key="category.name"
      class="column category"
    >
      <div class="row title">
        <img :src="categoryIcon(category)" />{{ category.name }}
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
    <div class="column info right">
      <div class="row title">Interests</div>
      <div class="row">3D printing</div>
      <div class="row">Art</div>
      <div class="row">Design</div>
      <div class="row">Photography</div>
      <div class="row">Software</div>
      <div class="row">Zines</div>
    </div>
    <div class="column info right">
      <div class="row title">Contact</div>
      <div class="row">wes@wesklein.com</div>
      <div class="row">adropletfalls</div>
    </div>
    <div class="column mode">
      <button class="row icon" @click="darkModeStore.toggle">
        <img :src="darkModeStore.icon" />
      </button>
    </div>
  </div>
</template>

<style>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media (min-width: 1100px) {
    display: block;
  }
}

.background img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  object-fit: contain;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
}

.column {
  display: flex;
  flex-direction: column;
}

.column + .column {
  margin-top: 48px;

  @media (min-width: 1100px) {
    margin-top: 0 !important;
  }
}

.column.category {
  flex-grow: 1;
}

.column.category + .column.category {
  margin-top: 24px;
}

.column.info {
  flex-grow: 2;
}

.column.right {
  align-items: flex-start;

  @media (min-width: 1100px) {
    align-items: flex-end;
  }
}

.column.mode {
  @media (min-width: 1100px) {
    padding-left: 48px;
  }
}

.row {
  width: fit-content;
}

button {
  all: unset;
  cursor: pointer;
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

.row.title {
  padding-bottom: 12px;

  img {
    width: 14px;
    height: 14px;
    margin-right: 14px;
    margin-left: -28px;
  }
}

.icon {
  width: 14px;
  height: 14px;

  img {
    width: 100%;
    height: 100%;
  }
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
