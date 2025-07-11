import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AgricHome from './components/AgricHome.vue'
import IntegratorRegister from './components/IntegratorRegister.vue'
import AgricEducation from './components/AgricEducation.vue'
import ReferencePlanning from './components/ReferencePlanning.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AgricHome },
    { path: '/home', component: AgricHome },
    { path: '/integrator-register', component: IntegratorRegister },
    { path: '/education', component: AgricEducation },
    { path: '/reference-planning', component: ReferencePlanning }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') 