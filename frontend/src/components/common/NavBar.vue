<template>
  <header class="bg-green-700/80 text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
    <div class="px-4 lg:px-8 py-3 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold cursor-pointer">慶奇科技</router-link>
      <nav class="hidden md:flex space-x-6 items-center text-lg">
        <router-link class="hover:text-green-200" to="/education">食農教育</router-link>
        <router-link class="hover:text-green-200" to="/reference-planning">參考規劃</router-link>
        <a class="hover:text-green-200" :href="installationsLink">場域實績</a>
        <a class="hover:text-green-200 inline-flex items-center gap-0.5" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0" target="_blank" rel="noopener noreferrer">產品介紹<span class="material-icons text-base">open_in_new</span></a>
        <a class="hover:text-green-200 inline-flex items-center gap-0.5" href="https://md.webduino.io/s/22TOZk5pV" target="_blank" rel="noopener noreferrer">使用教學<span class="material-icons text-base">open_in_new</span></a>
        <a class="hover:text-green-200" :href="contactLink">聯絡我們</a>
      </nav>
      <button class="md:hidden text-white" @click="toggleMobileMenu">
        <span class="material-icons">menu</span>
      </button>
      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="absolute top-full left-0 right-0 bg-green-700 md:hidden">
        <nav class="flex flex-col space-y-2 p-4">
          <router-link class="hover:text-green-200 py-2" to="/education" @click="closeMobileMenu">食農教育</router-link>
          <router-link class="hover:text-green-200 py-2" to="/reference-planning" @click="closeMobileMenu">參考規劃</router-link>
          <a class="hover:text-green-200 py-2" :href="installationsLink" @click="closeMobileMenu">場域實績</a>
          <a class="hover:text-green-200 py-2 inline-flex items-center gap-0.5" href="https://docs.google.com/presentation/d/1cAhRIjyeO9gIdUx1NNDx5akyijlQkPgEJWQmGHGgLdk/edit?slide=id.g2c779aded82_1_0#slide=id.g2c779aded82_1_0" target="_blank" rel="noopener noreferrer">產品介紹<span class="material-icons text-base">open_in_new</span></a>
          <a class="hover:text-green-200 py-2 inline-flex items-center gap-0.5" href="https://md.webduino.io/s/22TOZk5pV" target="_blank" rel="noopener noreferrer">使用教學<span class="material-icons text-base">open_in_new</span></a>
          <a class="hover:text-green-200 py-2" :href="contactLink" @click="closeMobileMenu">聯絡我們</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showMobileMenu = ref(false)

// 根據當前頁面決定連結行為
const isHomePage = computed(() => route.path === '/' || route.path === '/home')

const installationsLink = computed(() => {
  return isHomePage.value ? '#installations' : '/#installations'
})

const contactLink = computed(() => {
  return isHomePage.value ? '#contact' : '/#contact'
})

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>
