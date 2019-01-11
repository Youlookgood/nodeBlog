<template>
    <section class="panel">
        <el-row class="f-cb">
            <div v-for="(item, index) in pathNav" :key="index" class="paneItem f-fl">
                <div :class="['nav'+index, nav]">
                    <h4>{{item.number}}</h4>
                    <p>{{item.text}}</p>
                    <a class="route" @click="checkNav">{{item.clickTxT}}</a>
                </div>
            </div>
        </el-row>
        
        <el-row>
            <el-col :span="10">
                <div class="article">
                    <h4 class="title"><span>文章</span></h4>
                    <el-table :data="artData">
                        <el-table-column label="标题">
                             <template slot-scope="scope">
                                 <a href="javascript:;">{{scope.row.title}}</a>
                             </template>
                        </el-table-column>
                        <el-table-column label="状态" prop="status">
                            <template slot-scope="scope">
                                 <el-button type="primary" href="javascript:;" size="mini">{{scope.row.status}}</el-button>
                             </template>
                        </el-table-column>
                        <el-table-column label="日期" prop="date">

                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="10" :offset="2">
                <div class="judge">
                    <h4 class="title"><span>评论</span></h4>
                    <el-table :data="judgeData">
                        <el-table-column label="评论者" prop="judger">
                        </el-table-column>
                        <el-table-column label="评论页面">
                            <template slot-scope="scope">
                                 <a href="javascript:;" class="page">{{scope.row.page}}</a>
                             </template>
                        </el-table-column>
                        <el-table-column label="评论内容" prop="content">
                            
                        </el-table-column>
                        <el-table-column label="状态" prop="status">
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary">{{scope.row.status}}</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="日期" prop="date">

                        </el-table-column>
                    </el-table>
                </div>

                <div class="log">
                    <h4 class="title"><span>日志</span></h4>
                    <el-table :data="logData">
                        <el-table-column label="事件" prop="event">

                        </el-table-column>
                        <el-table-column label="结果" prop="result">

                        </el-table-column>
                        <el-table-column label="IP" prop="address">

                        </el-table-column>
                        <el-table-column label="日期" prop="date">

                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    export default{
        name: 'panel',
        data(){
            return {
                pathNav:[
                    {number: 6, text: '文章', clickTxT:'查看所有', path: ''},
                    {number: 6, text: '评论', clickTxT:'查看所有', path: ''},
                    {number: 6, text: '附件', clickTxT:'上传图片', path: ''},
                    {number:13, text: '成立田鼠', clickTxT:'2018-12-05', path: ''}
                ],
                nav: 'nav',
                artData:[
                    {title:'mongodb数据库优化', status:'已发布', date:'3天前'},
                    {title:'mongodb数据库优化', status:'已发布', date:'3天前'},
                    {title:'mongodb数据库优化', status:'已发布', date:'3天前'},
                    {title:'mongodb数据库优化', status:'已发布', date:'3天前'}
                ],
                judgeData:[
                    {judger: 'jimlin', page:'h', content:'hello world', status:0, date:'11天前'},
                    {judger: 'jimlin', page:'h', content:'hello world', status:0, date:'11天前'},
                ],
                logData:[
                    {event: '登录后台', result: '登录成功', address: '192.168.0.1', date: '2018-12-17'},
                    {event: '登录后台', result: '登录成功', address: '192.168.0.1', date: '2018-12-17'},
                    {event: '登录后台', result: '登录成功', address: '192.168.0.1', date: '2018-12-17'},
                ]
            }
        },
        methods:{
            checkNav(){

            }
        }
    }
</script>

<style scoped lang="scss">
    .panel{
        .paneItem{
            width: 392px;
            margin-right: 20px;
            margin-bottom: 20px;
            .nav{
                position: relative;
                height:120px;
                border-radius: 2px;
                h4, p{
                    text-indent: 12px;
                    color:#fff;
                    font-size: 14px;
                }
                h4{
                    font-size: 30px;
                    margin-bottom: 10px;
                    padding-top: 10px;
                }
                .route{
                    display: block;
                    position: absolute;
                    bottom: 0;
                    width:100%;
                    height:26px;
                    line-height: 26px;
                    text-align: center;
                    color: #fff;
                    background-color: rgba(0,0,0,0.3);
                    &:hover{
                        background-color: rgba(0,0,0, 0.2);
                    }
                }
            }
            .nav0{
                background-color: #00c0ef;
            }
            .nav1{
                background-color: #00a65a;
            }
            .nav2{
                background-color: #f39c12;
            }
            .nav3{
                background-color: #dd4b39;
            }
        }
        .article{
            background-color: #fff;
            width: 809px;
            .title{
                height: 48px;
                line-height: 48px;
                border-bottom: 1px solid #f4f4f4;
                text-indent: 8px;
                span{
                    font-size: 18px;
                }
            }
        }
        .judge, .log{
           background-color: #fff;
           width: 803px;
           .title{
                height: 48px;
                line-height: 48px;
                border-bottom: 1px solid #f4f4f4;
                text-indent: 8px;
                span{
                    font-size: 18px;
                }
            }
        }
        .judge{
            margin-bottom: 20px;
        }
    }
</style>
