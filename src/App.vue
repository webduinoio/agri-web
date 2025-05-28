<template>
  <div id="app">
    <StagewiseToolbar v-if="isDevelopment" :config="stagewiseConfig" />
    <div class="container">
      <h1>農業Web應用</h1>
      <button @click="showHelloWorld" class="hello-btn">
        {{ showMessage ? '隱藏訊息' : '顯示Hello World' }}
      </button>
      <div v-if="showMessage" class="message">
        <HelloWorld />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { StagewiseToolbar } from '@stagewise/toolbar-vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StagewiseToolbar
  },
  setup() {
    const showMessage = ref(false)
    
    // Stagewise配置 - 僅在開發模式使用
    const isDevelopment = process.env.NODE_ENV === 'development'
    const stagewiseConfig = {
      plugins: []
    }

    const showHelloWorld = () => {
      showMessage.value = !showMessage.value
    }

    return {
      showMessage,
      showHelloWorld,
      isDevelopment,
      stagewiseConfig
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #42b983;
  margin-bottom: 30px;
}

.hello-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.hello-btn:hover {
  background-color: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.message {
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #42b983;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 