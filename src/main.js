import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AgricHome from './components/AgricHome.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AgricHome }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') 