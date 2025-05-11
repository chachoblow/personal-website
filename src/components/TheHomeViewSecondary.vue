<script setup lang="ts">
import { useDarkModeStore } from '@/stores/darkMode'
import { NCollapse, NCollapseItem } from 'naive-ui'

const darkModeStore = useDarkModeStore()
</script>

<template>
  <div class="column column-right-align">
    <div class="column-section mode">
      <button class="row icon" @click="darkModeStore.toggle">
        <img :src="darkModeStore.icon" />
      </button>
    </div>
    <div class="column-section info">
      <NCollapse arrow-placement="right">
        <NCollapseItem title="Interests" name="1">
          <div class="row">3D printing</div>
          <div class="row">Art</div>
          <div class="row">Design</div>
          <div class="row">Photography</div>
          <div class="row">Software</div>
          <div class="row">Zines</div>
        </NCollapseItem>
      </NCollapse>
    </div>
    <div class="column-section info">
      <NCollapse arrow-placement="right">
        <NCollapseItem title="Contact" name="1">
          <div class="row">wes@wesklein.com</div>
          <div class="row">adropletfalls</div>
        </NCollapseItem>
      </NCollapse>
    </div>
  </div>
</template>

<style>
.column-right-align {
  align-items: flex-start;
}

.column-section.mode {
  order: 3;
  margin-top: 48px;
  margin-bottom: 0;
}

button {
  all: unset;
  cursor: pointer;
}

.row.icon {
  width: 14px;
  height: 14px;

  img {
    width: 100%;
    height: 100%;
  }
}

.n-collapse-item__content-inner {
  padding: 14px 0 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
}

.n-collapse-item__header {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
}

@media (min-width: 1100px) {
  .column-right-align {
    align-items: flex-end;
  }

  .column-section.mode {
    order: 0;
    margin-top: 0;
    margin-bottom: 48px;
  }

  .n-collapse-item__content-inner {
    align-items: flex-end !important;
  }

  .n-collapse-item__header {
    align-items: flex-end !important;
  }
}
</style>
