// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import jquery from 'jquery'
import axios from 'axios'
import './assets/css/reset.css'
import 'animate.css'

import store from './pages/store/home'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(ElementUI)
function changeTime(param) { 
  if(param < 10){
    return '0'+ param
  }
  return param
 }
Vue.filter('timeChange', (value)=>{
  if(!value) return '';
  var date = new Date(value),
      year = date.getFullYear(),
      month = date.getMonth()+1,
      day = date.getDay(),
      hours = date.getHours(),
      min = date.getMinutes(),
      secen = date.getSeconds(),
      end = `${year}-${changeTime(month)}-${changeTime(day)}-${changeTime(hours)}:${changeTime(min)}:${changeTime(secen)}`
  return end;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
