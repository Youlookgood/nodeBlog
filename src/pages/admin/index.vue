<template>
    <section class="g-admin" ref="admin">
        <el-container>
            <el-aside width="200px" class="aside">
                <h5 class="title"><span>Hi</span></h5>
                <div class="asideConter">
                    <div class="information">
                        <img src="http://wss12138.cn:8090/upload/2018/11/WechatIMG13420181205163145295.jpeg" alt="头像">
                        <div>
                            <p><span>林志颖</span></p>
                            <p><span class="person"></span><a href="javascript:;">个人资料</a></p>
                        </div>
                    </div>
                    <p class="splice">MENUS</p>
                    <div class="nav">
                        <ul class="outlayer">
                            <li :class="['li', actLi == index ? 'liact' : '']" v-for="(item, index) in asideList" :key="index" @click="showList(item, index)">
                                <span class="span">{{item.name}}</span>
                                <div  v-show="shwoChilder" class="navChildre">
                                    <ul>
                                        <li v-for="(child,index) in item.children" :class="actRoute == index ? 'liRoute' : ''" :key="index" @click="routeGo(item, index)">
                                            <span>{{child.name}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-aside>
            <el-main>main</el-main>
        </el-container>
    </section>
</template>

<script>
    export default{
        name: 'admin',
        data(){
            return {
                asideList:[
                    {name:'仪表盘', path:''},
                    {name:'文章', path:'', children:[{name:'所有文章', path:''}, {name:'写文章', path:''}, {name:'分类标签', path:''}]},
                    {name:'评论', path:''},
                    {name:'附件', path:''},
                ],
                showNav:false,
                shwoChilder:false,
                actLi:-1,
                actRoute:-1,
            }
        },
        methods:{
            showList(item, index){
                this.actLi = index;
                if(item.children){
                    this.shwoChilder = !this.shwoChilder
                }
            },
            routeGo(item, index){
                this.actRoute = index; 
                console.log(1111111)
            }
        },
        mounted(){

            
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
                min-height: 960px;
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
                            padding: 20px 0;
                            text-indent: 20px;
                            font-size: 14px;
                            position: relative;
                            border-left-color: #3c8dbc;
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
                                color: #fff;
                                
                            }
                            .navChildre{
                                margin-top: 20px;
                                li{
                                    height: 40px;
                                    line-height: 40px;
                                    text-indent: 40px;
                                    
                                    &:hover{
                                        background-color: #367fa9;
                                    }
                                }
                                .liRoute{
                                    background-color: #367fa9;
                                }
                            }
                        }
                        li:nth-of-type(2){
                            border: 0;
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
    }
</style>
