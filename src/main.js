import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
//导入router
import router from './router'
const pinia = createPinia()


const app = createApp(App)
// const pinia = createPinia()
app.use(router).use(pinia)
app.mount('#app')
