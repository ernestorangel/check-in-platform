import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Bank from '@/views/Bank.vue'
import Edit from '@/views/Edit.vue'
import { VueToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      name: 'Home', 
      component: Home
    },
    {
      path: '/bank', 
      name: 'Bank', 
      component: Bank
    },
    {
      path: '/edit', 
      name: 'Edit', 
      component: Edit
    }
  ]
})


createApp(App)
.use(router)
.use(VueToast)
.mount('#app')
