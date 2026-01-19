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
    {
      path: '/',
      component: AgricHome,
      meta: {
        title: '樂農智慧農業系統 - 慶奇科技',
        description: '樂農智慧農業系統，全台 200+ 場域使用中。提供環境監測、自動灌溉、溫室環控等解決方案，支援手機遠端操控，適合農戶、校園及 SI 整合商。'
      }
    },
    {
      path: '/home',
      component: AgricHome,
      meta: {
        title: '樂農智慧農業系統 - 慶奇科技',
        description: '樂農智慧農業系統，全台 200+ 場域使用中。提供環境監測、自動灌溉、溫室環控等解決方案，支援手機遠端操控，適合農戶、校園及 SI 整合商。'
      }
    },
    {
      path: '/integrator-register',
      component: IntegratorRegister,
      meta: {
        title: 'SI 整合商專區 - 樂農智慧農業',
        description: '樂農智慧農業 SI 整合商專區，提供完整設備規格、報價參考及技術支援，協助整合商快速導入智慧農業解決方案。'
      }
    },
    {
      path: '/education',
      component: AgricEducation,
      meta: {
        title: '食農教育 - 樂農智慧農業',
        description: '樂農食農教育方案，結合 SDGs 永續發展目標與智慧農業技術，適合校園與教育機構導入，培養學生科技農業素養。'
      }
    },
    {
      path: '/reference-planning',
      component: ReferencePlanning,
      meta: {
        title: '場域規劃方案 - 樂農智慧農業',
        description: '樂農場域規劃參考方案，提供溫室環控、自動灌溉、環境監測等系統配置建議，協助農戶規劃最適合的智慧農業方案。'
      }
    }
  ]
})

// 導航守衛：動態更新頁面 title 和 meta description
router.beforeEach((to, from, next) => {
  // 更新頁面標題
  const defaultTitle = '樂農智慧農業系統 - 慶奇科技'
  document.title = to.meta.title || defaultTitle

  // 更新 meta description
  const defaultDescription = '樂農智慧農業系統，全台 200+ 場域使用中。提供環境監測、自動灌溉、溫室環控等解決方案。'
  const descriptionEl = document.querySelector('meta[name="description"]')
  if (descriptionEl) {
    descriptionEl.setAttribute('content', to.meta.description || defaultDescription)
  }

  // 更新 Open Graph title 和 description
  const ogTitleEl = document.querySelector('meta[property="og:title"]')
  if (ogTitleEl) {
    ogTitleEl.setAttribute('content', to.meta.title || defaultTitle)
  }

  const ogDescriptionEl = document.querySelector('meta[property="og:description"]')
  if (ogDescriptionEl) {
    ogDescriptionEl.setAttribute('content', to.meta.description || defaultDescription)
  }

  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
