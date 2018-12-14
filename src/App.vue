<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from './pages/home/index'
export default {
  name: 'App',
  components:{
    index
  }
}
</script>

<style>
#app {
   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
