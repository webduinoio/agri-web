<template>
  <div id="app">
    <StagewiseToolbar v-if="isDevelopment" :config="stagewiseConfig" />
    <router-view />
  </div>
</template>

<script>
import { StagewiseToolbar } from '@stagewise/toolbar-vue'

export default {
  name: 'App',
  components: {
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