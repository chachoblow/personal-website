<script setup lang="ts"></script>

<template>
  <div class="header-section">
    <div class="header-section__name">Wesley Klein</div>
    <nav>
      <RouterLink key="work" to="/work"> Work </RouterLink>
      <RouterLink key="about" to="/about"> About </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.header-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 48px;
}

a {
  color: var(--color-text);
  text-decoration: none;
}

a + a {
  padding-left: 24px;
}
</style>
