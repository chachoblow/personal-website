<script setup lang="ts">
import { onMounted } from 'vue'
import iconCloseWhite from '@/assets/iconCloseWhite.png'
import iconCloseBlack from '@/assets/iconCloseBlack.png'
import { register } from 'swiper/element/bundle'
import { useDarkModeStore } from '@/stores/darkMode'

defineProps<{ images: string[] }>()

const emit = defineEmits<{ (e: 'galleryOverlayClose'): void }>()

const darkModeStore = useDarkModeStore()

register()

onMounted(() => {
  const swiperEl = document.querySelector('swiper-container')

  const params = {
    // array with CSS styles
    injectStyles: [
      `
      .swiper-button-next,
      .swiper-button-prev {
        color: var(--color-text);
        --swiper-navigation-size: 28px;
      }
      `,
    ],

    // array with CSS urls
    injectStylesUrls: ['swiper/element/css/effect-fade'],
  }

  Object.assign(swiperEl!, params)

  swiperEl!.initialize()
})
</script>

<template>
  <div class="modal">
    <button class="icon close-button" @click="emit('galleryOverlayClose')">
      <img :src="darkModeStore.isDarkMode ? iconCloseWhite : iconCloseBlack" />
    </button>
    <div class="swiper-container">
      <swiper-container
        :init="false"
        class="my-swiper"
        navigation="true"
        :effect="'fade'"
        :fadeEffect="{ crossFade: true }"
      >
        <swiper-slide v-for="image in images" :key="image">
          <img :src="image" />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style>
@import 'swiper/element/css/effect-fade';

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
}

.close-button {
  position: absolute;
  top: 24px;
  right: 24px;
}

.close-button:hover {
  cursor: pointer;
}

.swiper-container {
  width: 100%;
  height: 100%;
  padding: 76px;
}

.my-swiper {
  width: 100%;
  height: 100%;
}

.swiper-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
