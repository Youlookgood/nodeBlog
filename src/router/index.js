import Vue from 'vue'
import Router from 'vue-router'
import APP from './../App'
import home from '@/pages/home/index'
import admin from '@/pages/admin/index'
import bodyConten from '@/pages/home/bodyContent/index'
import bodyDetail from '@/pages/home/bodyDetails/index'
import login from '@/pages/admin/login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      children:[
        {
          path: '/',
          name:'bodyConten',
          component: bodyConten
        },
        {
          path: '/article/:id',
          name:'bodyDetail',
          component: bodyDetail
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path:'/admin',
      name:'admin',
      component: admin
    }    
  ]
})
