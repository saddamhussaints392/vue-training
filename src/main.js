import { createApp } from 'vue'
import App from './App.vue';
import { configureCompat } from 'vue'

import router from "./route/index"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'


configureCompat({
    MODE: 2,
  })
createApp(App)
.use(BootstrapVue)
.use(IconsPlugin)
.use(router).mount('#app')

