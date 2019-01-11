<template>
    <section class="g-content-wrap f-cb">
        <div class="f-cb">
            <article class="f-fl artZone">
            <!-- <h4>{{contentTitle}}</h4> -->
                <h4 class="typeTitle">{{navTitle}}</h4>
                <template>
                    <ul class="artShow">
                        <li v-for="(item, index) in articleList" :key="item.serial" class="f-cb">
                            <div class="f-fl artImg">
                                <img src="../../../assets/aisi.jpg" alt="文章图片">
                            </div>
                            <div class="articleInfor f-fl">
                                <h6>{{item.title}}</h6>
                                <p><span>{{item.author}}</span>/<span>标签暂无</span>/{{item.upTime | timeChange}}/观看次数暂无</p>
                                <p>这里会是文章简介</p>
                                <p><router-link :to="'article/' + item.serial" ><el-button type="primary">阅读&nbsp;&gt;&gt;</el-button></router-link></p>
                            </div>
                        </li>
                    </ul>
                </template>
            </article>

            <article class="f-fl artSize">
                右边的
            </article>
        </div>
        <footer class="f-cb pagination">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            class="pgnation"
            ></el-pagination>
        </footer>
    </section>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex'
    
    export default{
        name: 'bodyContent',
        props:{
            contentTitle:{
                type:String
            }
        },
        data(){
            return {
                articleList: [
                ]
            }
        },
        computed:{
            ...mapState(["naVal"]),
            navTitle(){
                switch(this.naVal){
                    case 0:
                        return '编程';
                        break;
                    case 1:
                        return '读书';
                        break;    
                }
            }
        },
        methods:{
            init(){
                this.$http({
                    url:'/apis/article/getArticle',
                    method:'get',
                    params:{
                        userName:'linzhiying',
                        page:'home'
                    }
                }).then((res)=>{
                    this.articleList = res.data.data;
                })
            }
        },
        created(){
            this.init()
        }
    }
</script>

<style lang="scss" scoped>
    .g-content-wrap{
        width: 100%;
        .artZone{
            width: 80%;
            border-right: 1px solid #ccc;
            min-height: 1000px;
            .typeTitle{
                 margin-bottom: 20px;
            }   
            .artShow{
                li{
                    margin-bottom: 40px;
                    max-height: 150px;
                }
                .artImg{
                    img{
                        width: 160px;
                        height: 90px;   
                    }  
                }
                .articleInfor{
                    margin-left: 16px;
                    h6{
                        font-size: 20px;
                    }
                    p{
                        margin-top: 16px;
                    }
                }
            }
        }
        .artSize{
            margin-left: 20px;
        }
        .pagination{
            width:100%;
            height: 80px;
            line-height: 80px;
            text-align: center;
            .pgnation{
                position: relative;
                top: 80px;
            }
        }
    }
</style>
