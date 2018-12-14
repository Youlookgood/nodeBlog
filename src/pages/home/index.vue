<template>
    <section class="g-index">
       <el-container>
           <div class="m-header">   
                <navgation/>
           </div>
            <el-container class="m-body">
                <router-view></router-view>
            </el-container>

            <el-footer class="m-footer">
                <hr>
                    <el-row>
                        <el-col :span="6" :offset="1">
                            <div class="descript1">
                                <p><a href="javascript:;">林志颖的官方博客</a></p>
                                <p>Powered by <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a></p>
                                <p>本网站运行在阿里云上</p>
                            </div>
                        </el-col>
                        <el-col :span="8">这里是图标链接</el-col>
                        <el-col :span="8">
                            <p>意见反馈</p>
                            <p>使用许可</p>
                        </el-col>
                    </el-row>
                <hr>
                <el-row class="beian">
                    <p>备案号<a href="javascript:;">@闽666666</a></p>
                </el-row>
            </el-footer>
       </el-container>
    </section>
</template>

<script>
    import navgation from '@/components/homeNavgation.vue'

    export default{
        name: 'indexPage',
        components: {
            navgation
        }
    }
</script>

<style lang="scss" scoped>
    .g-index{
       
        font-size:16px;
        .m-header{
            width: 100%;
        }
        .m-body{
            min-height: 1000px;
            width: 90%;
            margin: 100px auto;
        }
        .m-footer{
            width: 96%;
            margin: 0 auto;
            hr{
                margin: 20px 0;
            }
            .descript1{
                p{
                    margin-bottom: 8px;
                    a{
                        color: #409ffe;
                    }
                }
            }
            .beian{
                text-align: center;
            }
        }
    }
</style>
