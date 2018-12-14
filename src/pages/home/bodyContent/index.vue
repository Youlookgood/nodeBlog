<template>
    <section class="g-content-wrap f-cb">
        <div class="f-cb">
            <article class="f-fl artZone">
            <!-- <h4>{{contentTitle}}</h4> -->
                <h4 class="typeTitle">{{navTitle}}</h4>
                <template>
                    <ul class="artShow">
                        <li v-for="(item, index) in articleList" :key="index" class="f-cb">
                            <div class="f-fl artImg">
                                <img src="https://cdn.liaoxuefeng.com/cdn/files/attachments/001525354340372c2bfb3745fd74066be9039bb6dd614b3000/s" alt="文章图片">
                            </div>
                            <div class="articleInfor f-fl">
                                <h6>{{item.artTitle}}</h6>
                                <p><span>{{item.author}}</span>/<span>{{navTitle}}</span>/{{item.time}}/{{item.views}}</p>
                                <p>{{item.abstract}}</p>
                                <p><router-link :to="'article/' + item.uid" ><el-button type="primary">阅读&nbsp;&gt;&gt;</el-button></router-link></p>
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
                    {artTitle: 'JDK11新特性解读', author: '林志颖', artType:'编程', time: '2018-12-12', views: 100, abstract:'这是尝试这是尝试这是尝试这是尝试', uid:123 },
                    {artTitle: 'JDK11新特性解读', author: '林志颖', artType:'编程', time: '2018-12-12', views: 100, abstract:'这是尝试这是尝试这是尝试这是尝试', uid:456 },

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
