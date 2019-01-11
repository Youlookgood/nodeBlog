<template>
    <section class="g-admin" ref="admin">
        <el-container>
            <el-aside width="200px" class="aside">
                <h5 class="title"><span>Hi</span></h5>
                <div class="asideConter">
                    <div class="information">
                        <img src="http://wss12138.cn:8090/upload/2018/11/WechatIMG13420181205163145295.jpeg" alt="头像">
                        <div>
                            <p><span>{{this.userInfor.username}}</span></p>
                            <p><span class="person"></span><a href="javascript:;">个人资料</a></p>
                        </div>
                    </div>
                    <p class="splice">MENUS</p>
                    <div class="nav">
                        <ul class="outlayer">
                            <li :class="['li', actLi == index ? 'liact' : '']" v-for="(item, index) in asideList" :key="index" >
                                <label class="span" @click="showList(item, index)"><router-link :to="'/admin/'+item.path">{{item.name}}</router-link></label>
                                <div  v-if="shwoChilder" class="navChildre">
                                    <ul>
                                        <li v-for="(child,index) in item.children" :class="actRoute == index ? 'liRoute' : ''" :key="index" @click="routeGo(item, index)">
                                            <router-link :to="'/admin/'+child.path">{{child.name}}</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-aside>
            <el-main class="main">
                <ul class="head f-cb">
                    <li class="photo f-fr">
                         <a href="javascript:;">
                             <img src="http://wss12138.cn:8090/upload/2018/11/WechatIMG13420181205163145295.jpeg" alt="头像">
                            <span>{{this.userInfor.username}}</span>
                         </a>
                    </li>
                </ul>
                <section class="routeConten">
                    <el-main>
                        <div class="nav f-cb">
                            <div class="f-fl">
                                <span>
                                    {{navText}}
                                </span>
                                <el-button size="mini" type="primary" v-show="navText == '仪表盘'">
                                    按钮选项
                                </el-button>
                            </div>
                            <div class="f-fr">
                                <span><router-link to="/admin">首页&nbsp;</router-link></span>
                                <span>&gt;&nbsp;{{navText}}</span>
                            </div>
                        </div>
                        <router-view></router-view>
                    </el-main>
                </section>
            </el-main>
        </el-container>
        <alert-detail v-if="showDetail"/>
    </section>
</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex'
    import alertDetail from '../../components/alertDetail.vue'
    export default{
        name: 'admin',
        data(){
            return {
                asideList:[
                    {name:'仪表盘', path:''},
                    {name:'文章', path:'', children:[{name:'所有文章', path:'allarticle'}, {name:'写文章', path:'write'}, {name:'分类标签', path:'category'}]},
                    {name:'评论', path:'comments'},
                    {name:'附件', path:'attachment'},
                ],
                showNav:false,
                shwoChilder:false,
                actLi:0,
                actRoute:-1,
            }
        },
        computed:{
            ...mapState(['navText', 'showDetail','userInfor'])
        },
        methods:{
            ...mapMutations(['changeNavText']),
            showList(item, index){
                this.actLi = index;
                if(item.children){
                    this.shwoChilder = !this.shwoChilder
                }
                this.changeNavText(item.name)
            },
            routeGo(item, index){
                this.actRoute = index;
            },
            init(){
                this.getArticle()
                
            },
            getArticle(){
                const api = '/apis'
                this.$http(`${api}/article/getArticle`, {
                    params:{
                        userId: 'linzhiying'
                    },
                    methods:'get'
                })
            }
        },
        mounted(){
            const userId = localStorage.getItem('userId');
            if(!userId){
                this.$message('您还未登录，请先登录')
                setTimeout(()=>{
                    this.$router.push('/login')
                },2000)
            }
            this.init()
        },
        created(){
            
        },
        components:{
           alertDetail 
        }
    }
</script>

<style scoped lang="scss">
    .g-admin{
        .aside{
           .title{
            width: 100%;
            height:50px;
            text-align: center;
            line-height: 50px;
            background-color: #367fa9;
                span{
                    color: #fff;
                    font-size: 16px;
                    font-weight: 500;
                }
                &:hover{
                    background-color: #357ca5;
                }
            }
            .asideConter{
                padding-top: 20px;
                min-height: 980px;
                background-color: #222d32;
                color: #fff;
                .information{
                    width:100%;
                    position: relative;
                    margin-bottom: 10px;
                    img{
                        width:100%;
                        max-width: 45px;
                        border-radius: 50%;
                        margin-left: 30px;
                    }
                    div{
                        position: absolute;
                        top: 6px;
                        left: 88px;
                        p{
                            margin-bottom: 8px;
                        }
                        p:nth-of-type(1){
                            text-indent: 8px;
                        }
                        span{
                            color: #fff;
                        }
                        a{
                            color:#fff;
                        }
                        .person{
                            display: inline-block;
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background: green;
                            margin-right: 4px;
                        }
                    }
                    
                }
                .splice{
                    height: 36px;
                    line-height: 36px;
                    color: #4b646f;
                    background-color: #1a2226;
                    text-indent: 16px;
                }
                .nav{
                    .outlayer{
                        .li{
                            cursor: pointer;
                            height: 54px;
                            line-height: 54px;
                            font-size: 14px;
                            position: relative;
                            border-left-color: #3c8dbc;
                            overflow: hidden;
                            .light{
                                width: 6px;
                                height: 100%;
                                position: absolute;
                                left: 0;
                                top: 0;
                                background-color: #3c8dbc;
                            }
                            &:hover{
                                background-color: #1e282c;
                            }
                            .span{
                                display: inline-block;
                                color: #fff;
                                width:100%;
                                text-indent: 20px;
                                a{
                                    color: #fff;
                                    display: inline-block;
                                    width: 100%;
                                    height: 100%;
                                }
                                
                            }
                            .navChildre{
                                margin-top: 20px;
                                li{
                                    height: 40px;
                                    line-height: 40px;
                                    &:hover{
                                        background-color: #367fa9;
                                    }
                                    a{
                                        display: inline-block;
                                        width: 100%;
                                        height: 100%;
                                        color: #fff;
                                        text-indent: 40px;
                                    }
                                }
                                .liRoute{
                                    background-color: #367fa9;
                                }
                            }
                        }
                        li:nth-of-type(2){
                            border: 0;
                            height: auto;
                        }
                        .liact{
                            border-left: 4px solid;
                            border-left-color: #3c8dbc;
                            background-color: #1e282c;
                        }
                    }
                }
            }
        }
        .main{
            padding: 0;
            .head{
                height: 50px;
                line-height: 50px;
                background-color: #3c8dbc;
                overflow: hidden;
                .photo{
                    margin-right: 20px;
                    height: 50px;
                    line-height: 50px;
                    a{
                        display: inline-block;
                        height: 100%;
                        width: 120px;
                        text-align: center;
                        img{
                            max-width: 36px;
                            border-radius: 50%;
                            margin-top: 6px;
                        }
                        span{
                            color: #fff;
                            font-size: 12px;
                            margin-bottom: 6px;
                            position: relative;
                            top: -10px;
                        }
                        &:hover{
                            background-color: #23527c;
                        }
                    }
                }
            }
            .routeConten{
                min-height: 1000px;
                background-color: #ecf0f5;
                .nav{
                    margin-bottom: 20px;
                    height: 30px;
                    line-height: 30px;
                    div:nth-of-type(1){
                        span{
                            font-size: 20px;
                            font-weight: bold;
                        }
                    }
                    div:nth-of-type(2){
                        span{
                            font-size: 14px;
                        }
                        span:nth-of-type(2){
                            color:#777;
                        }
                    }
                }
            }
        }
    }
</style>
