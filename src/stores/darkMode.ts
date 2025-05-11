import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import iconMoonWhite from '@/assets/iconMoonWhite.png'
import iconMoonBlack from '@/assets/iconMoonBlack.png'
import { darkTheme } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDarkMode = ref(true)

  const naiveUiTheme = computed(() => {
    return isDarkMode.value ? darkTheme : null
  })

  // Keep inline with '--vt-c-text-dark-1'. Consider an automatic way to do so.
  const darkThemeTextColor = '#ffffff'
  const naiveUiDarkThemeOverrides: GlobalThemeOverrides = {
    common: {
      textColor1: darkThemeTextColor,
      textColor2: darkThemeTextColor,
    },
  }

  const naiveUiLightThemeOverrides: GlobalThemeOverrides = {}

  const naiveUiThemeOverrides = computed(() => {
    return isDarkMode.value
      ? naiveUiDarkThemeOverrides
      : naiveUiLightThemeOverrides
  })

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

  return {
    isDarkMode,
    naiveUiTheme,
    naiveUiThemeOverrides,
    icon,
    apply,
    toggle,
  }
})
