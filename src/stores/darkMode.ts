import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import iconMoonWhite from '@/assets/iconMoonWhite.png'
import iconMoonBlack from '@/assets/iconMoonBlack.png'

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDarkMode = ref(true)

  const icon = computed(() => {
    return isDarkMode.value ? iconMoonWhite : iconMoonBlack
  })

  const userPreference = localStorage.getItem('darkMode')
  if (userPreference !== null) {
    isDarkMode.value = JSON.parse(userPreference)
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function apply() {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }

  function toggle() {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', isDarkMode.value.toString())
    apply()
  }

  return { isDarkMode, icon, apply, toggle }
})
