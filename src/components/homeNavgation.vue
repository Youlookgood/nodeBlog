<template>
    <section class="g-navgation">
         <el-row>
            <el-col :span="4"><span class="logoName">林志颖的官方网站</span></el-col>
            <el-col :span="12" :offset="1">
                <ul class="f-cb">
                    <li class="f-fl u-li " :class="isActive == index ? 'active' : ''"  v-for="(item, index) in navContent" :key="index" @click="changeIndex(item, index)">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="4" :offset="2" class="login">
                <i class="el-icon-service"></i><router-link to="/login">登录</router-link>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    export default{
        name: 'indexNavigation',
        data(){
            return {
                navContent: [
                    {name:'编程', path:'/'},
                    {name:'读书', path:'/'},
                ],
                isActive:0,
            }
        },
        computed:{
            ...mapState(['naVal'])
        },
        methods:{
            ...mapMutations(['changeNav']),
            changeIndex(item, index){
                this.isActive = index;
                this.changeNav(index)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-navgation{
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #0593d3;
        color: #fff;
        font-size: 16px;
        height: 60px;
        line-height: 60px;
        .logoName{
            font-size: 28px;
            position: relative;
            left: 60px;
        }
        .u-li{
            margin-right: 2px;
            cursor: pointer;
            a{
                color: #fff;
                text-align: center;   
                display: inline-block;
                width: 60px;
                height: 100%;
            }
            &:hover{
                    background-color: #0482ba;
            }

        }
        .active{
             background-color: #0482ba;
         }
         .login{
             a{
                 color: #fff;
                 margin-left: 4px;
             }
         }
        
    }
</style>
