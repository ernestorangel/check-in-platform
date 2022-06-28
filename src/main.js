import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Bank from '@/views/Bank.vue'
import Edit from '@/views/Edit.vue'
import { VueToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useRecoilState } from 'vue-recoil';
import { atomState } from './store/atom.js';

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
      component: Bank,
      beforeEnter: async (to, from) => {
        console.log(to.params)
      }
    },
    {
      path: '/edit', 
      name: 'Edit', 
      component: Edit
    }
  ]
})


const app = createApp(App)
.use(router)
.use(VueToast)
.mount('#app')
