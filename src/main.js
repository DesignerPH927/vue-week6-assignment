import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/all.scss'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App)


app.component('Loading', Loading)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
