import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 配置axios
axios.defaults.baseURL = 'http://localhost:5000/api'

const app = createApp(App)

// 全局配置axios
app.config.globalProperties.$http = axios

app.use(router)
app.use(store)
app.mount('#app') 