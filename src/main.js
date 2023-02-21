import { createApp } from 'vue'
import App from './App.vue';
import { configureCompat } from 'vue'

import router from "./route/index"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKC1He9I_xZmNs61VALSI6LLXNnLrlysg",
  authDomain: "food-app-de1c6.firebaseapp.com",
  projectId: "food-app-de1c6",
  storageBucket: "food-app-de1c6.appspot.com",
  messagingSenderId: "18104406601",
  appId: "1:18104406601:web:c395ac67cd859f4f6ea598"
};

initializeApp(firebaseConfig);

configureCompat({
    MODE: 2,
  })
createApp(App)
.use(BootstrapVue)
.use(IconsPlugin)
.use(router).mount('#app')

