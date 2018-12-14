import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  navHead:{
      0:'编程',
      1:'读书'
  },
  naVal:0,
}

var getters = {
    navHead(state){
        return state.navHead
    }
}

let mutations = {
    changeNav(state, val){
        state.naVal = val
    }
}

const store = new Vuex.Store({
    state,
    mutations
})
 
export default store