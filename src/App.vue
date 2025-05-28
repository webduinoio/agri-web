<template>
  <div id="app">
    <StagewiseToolbar v-if="isDevelopment" :config="stagewiseConfig" />
    <AgricHome />
  </div>
</template>

<script>
import AgricHome from './components/AgricHome.vue'
import { StagewiseToolbar } from '@stagewise/toolbar-vue'

export default {
  name: 'App',
  components: {
    AgricHome,
    StagewiseToolbar
  },
  setup() {
    // Stagewise配置 - 僅在開發模式使用
    const isDevelopment = process.env.NODE_ENV === 'development'
    const stagewiseConfig = {
      plugins: []
    }

    return {
      isDevelopment,
      stagewiseConfig
    }
  }
}
</script>

<style>
</style> 