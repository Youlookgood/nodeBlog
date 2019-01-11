import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import admin from './admin'

const state={
  navHead:{
      0:'编程',
      1:'读书'
  },
  naVal:0,
  navText:'仪表盘',
  showDetail:false,
  userInfor:'null',
}

var getters = {
    navHead(state){
        return state.navHead
    }
}

let mutations = {
    changeNav(state, val){
        state.naVal = val
    },
    changeNavText(state, val){
        state.navText = val
    },
    showHide(state){
        state.showDetail = !state.showDetail
    },
    getUserInfor(state, val){
        this.state.userInfor = val
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    modules:{
        admin:admin        
    }
})
 
export default store