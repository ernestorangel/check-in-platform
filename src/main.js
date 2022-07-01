import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Bank from '@/views/Bank.vue'
import { useRecoilState } from 'vue-recoil';
import { atomState } from './store/atom.js';
import { VueToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const [count, setCount] = useRecoilState(atomState);

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
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  console.log(to.name, from.name, count.name)
  if(to.name === 'Bank' && from.name === undefined) {
    next({
      name: 'Home'
    })
  } else {
    next()
  }
})


createApp(App)
.use(router)
.use(VueToast)
.mount('#app')
