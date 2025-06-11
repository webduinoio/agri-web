<template>
  <div id="app">
    <component 
      v-if="isDevelopment && StagewiseToolbar" 
      :is="StagewiseToolbar" 
      :config="stagewiseConfig" 
    />
    <router-view />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const StagewiseToolbar = ref(null)
    const isDevelopment = process.env.NODE_ENV === 'development'
    const stagewiseConfig = {
      plugins: []
    }

    onMounted(async () => {
      // 只在開發環境動態載入 Stagewise Toolbar
      if (isDevelopment) {
        try {
          const { StagewiseToolbar: Toolbar } = await import('@stagewise/toolbar-vue')
          StagewiseToolbar.value = Toolbar
        } catch (error) {
          console.warn('無法載入 Stagewise Toolbar:', error)
        }
      }
    })

    return {
      StagewiseToolbar,
      isDevelopment,
      stagewiseConfig
    }
  }
}
</script>

<style>
</style> 