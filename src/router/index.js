import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CicloM from '@/components/CicloM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/CicloM',
      name: 'CicloM',
      component: CicloM
    }
  ]
})
