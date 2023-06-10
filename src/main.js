import './assets/main.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/', component: App, name: 'home' },
  { path: '/about', component: App, name: 'about' },
  { path: '/experience', component: App, name: 'experience' },
  { path: '/education', component: App, name: 'education' },
  { path: '/projects', component: App, name: 'projects' },
  { path: '/contact', component: App, name: 'contact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    //console.log("scrollBehavior() > ", to, from, savedPosition);

    if (!to.hash) {
      return false
    }

    const el = document.getElementById(to.name)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        el: el,
        top: 10,
        behavior: 'smooth'
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
