<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ProjectItem } from '@/models/ProjectCategory'
import TheGalleryOverlay from '@/components/TheGalleryOverlay.vue'
import TheHomeViewTitle from '@/components/TheHomeViewTitle.vue'
import TheHomeViewCategories from '@/components/TheHomeViewCategories.vue'
import TheHomeViewSecondary from '@/components/TheHomeViewSecondary.vue'

const itemHovered = ref('')
const itemClicked = ref<null | ProjectItem>(null)

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
    <div class="column-group">
      <TheHomeViewTitle />
      <TheHomeViewCategories
        v-model:item-hovered="itemHovered"
        v-model:item-clicked="itemClicked"
      />
    </div>
    <div class="column-group">
      <TheHomeViewSecondary />
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
  display: none;
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
  justify-content: unset;
  flex-direction: column;
}

.column-group {
  display: flex;
  flex-direction: column;
}

.column-group + .column-group {
  margin-top: 48px;
}

.column {
  display: flex;
  flex-direction: column;
}

.column + .column {
  margin-left: 0;
  margin-top: 48px;
}

.row {
  width: fit-content;
}

@media (min-width: 1100px) {
  .background {
    display: flex;
  }

  .container {
    justify-content: space-between;
    flex-direction: row;
  }

  .column-group {
    flex-direction: row;
  }

  .column-group + .column-group {
    margin-top: 0;
  }

  .column + .column {
    margin-left: 48px;
    margin-top: 0;
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
