import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AgricHome from './components/AgricHome.vue'
import IntegratorRegister from './components/IntegratorRegister.vue'
import AgricEducation from './components/AgricEducation.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: IntegratorRegister },
    { path: '/home', component: AgricHome },
    { path: '/integrator-register', component: IntegratorRegister },
    { path: '/education', component: AgricEducation }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') 