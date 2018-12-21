import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/index'
import admin from '@/pages/admin/index'
import bodyConten from '@/pages/home/bodyContent/index'
import bodyDetail from '@/pages/home/bodyDetails/index'
import login from '@/pages/admin/login'

import panel from '@/modules/panel/index'
import comment from '@/modules/comment/index'
import attachment from '@/modules/attachment/index'
import allarticle from '@/modules/article/all.vue'
import category from '@/modules/article/classify.vue'
import write from '@/modules/article/write.vue'

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
      component: admin,
      children:[
        {
          path:'/',
          name:'panel',
          component:panel         
        },
        {
          path:'comments',
          name:'comment',
          component:comment
        },
        {
          path:'attachment',
          name: 'attachment',
          component: attachment
        },
        {
          path: 'allarticle',
          name:'allarticle',
          component: allarticle
        },
        {
          path: 'category',
          name: 'category',
          component: category
        },
        {
          path: 'write',
          name: 'write',
          component: write
        }
      ]
    }    
  ]
})
