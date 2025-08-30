<script setup lang="ts">
import { ref } from 'vue'
import TheHomeViewTitle from '@/components/TheHomeViewTitle.vue'
import TheHomeViewCategories from '@/components/TheHomeViewCategories.vue'
import TheHomeViewSecondary from '@/components/TheHomeViewSecondary.vue'

const itemHovered = ref<string>('')

const getAltText = (src: string) => `Hover item: ${src}`
</script>

<template>
  <div class="background">
    <Transition mode="out-in">
      <img
        v-if="itemHovered"
        :src="itemHovered"
        :alt="getAltText(itemHovered)"
        loading="lazy"
      />
    </Transition>
  </div>
  <div class="container">
    <div class="column-group">
      <TheHomeViewTitle />
      <TheHomeViewCategories v-model:item-hovered="itemHovered" />
    </div>
    <div class="column-group">
      <TheHomeViewSecondary />
    </div>
  </div>
</template>

<style>
/* Background styling */
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
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

/* Container and layout styling */
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

/* Transition effects */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
