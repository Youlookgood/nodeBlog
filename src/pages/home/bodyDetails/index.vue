<template>
    <section class="g-content-wrap f-cb">
        <div class="f-cb">
            <article class="f-fl artZone">
            <!-- <h4>{{contentTitle}}</h4> -->
                <h4 class="typeTitle">{{detailData.title}}</h4>
                <template>
                    <!-- <div class="titleImg">
                        <img src="../../../assets/aisi.jpg" alt="导图" style="width:200px;height:200px;">
                    </div> -->
                    <section class="textContent" ref="textContent">
                    </section>
                    <div class="bottom">
                        <p><span>{{detailData.author}}</span>/<span>暂无类型</span>/<span>{{detailData.upTime | timeChange}}</span>/<span>暂无阅读量</span></p>
                    </div>    
                </template>
                <div class="comments f-cb">
                    <div class="u-img f-fl">
                        <img src="../../../assets/aisi.jpg" alt="评论图" class="u-img">
                    </div>
                    <div class="f-fl u-area">
                        <p>
                            <input type="text"  v-model="comments.name" placeholder="昵称(必填)">
                            <input type="text" v-model="comments.email" placeholder="邮箱(选填)">
                            <input type="text" v-model="comments.address" placeholder="网址(选填)">
                        </p>
                        <div class="f-cb">
                            <textarea v-model="comments.text" placeholder="赶快评论一个吧">
                            </textarea>
                            <el-button @click="submit" size="mini" class="f-fr">提交</el-button>
                        </div>
                    </div>
                </div>
                <div class="m-vistor">
                    <p>{{showComments.length}}评论</p>
                    <ul>
                        <li class="f-cb" v-for="item in showComments" :key="item.serial">
                            <div class="img f-fl">
                                <img src="../../../assets/vistor.png" alt="游客">
                            </div>
                            <div class="f-fl">
                                <p>{{item.name}}</p>
                                <p>{{item.content}}</p>
                                <p><span class="time">2019-01-11:43</span>  <el-button type="danger" size="mini" v-show="false">回复</el-button></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </article>

            <article class="f-fl artSize">
                右边的
            </article>
        </div>
    </section>
</template>

<script>
    
    export default{
        name: 'bodyContent',
        props:{
            contentTitle:{
                type:String
            }
        },
        data(){
            return {
                detailData:{title:'', author:'', upTime:''},
                comments:{
                    name:'',
                    email:'',
                    address:'',
                    text:'',
                    relation:1
                },
                showComments:[]
            }
        },
        computed:{
           endComments(){
               return {
                   name: this.comments.name,
                   email: this.comments.email,
                   address: this.comments.address,
                   text: this.comments.text,
                   relation: this.comments.relation
               }
           } 
        },
        methods:{
            init(){
              return  new Promise((resolve, reject)=>{
                  this.$http({
                    url:'/apis/article/getArticle',
                    method:'get',
                    params:{
                        serial:Number(this.$route.params.id),
                        page:'detail'
                    }
                    }).then(async (res) => {
                        this.detailData = res.data.data;
                        this.comments.relation = this.detailData.serial;
                        this.$refs.textContent.innerHTML = this.detailData.content;
                        resolve(this.comments.relation)
                    }).catch((err)=>{
                        reject(err)
                    })
                })
                
            },
            submit(){
                if(!this.comments.name){
                    this.$message('评论时用户名称必须填哦')
                    return 
                }
                this.$http({
                    url:'/apis/comments/createOroperation',
                    method:'post',
                    data:{
                        content:this.endComments,
                        status:1
                    }
                }).then((res) => {
                    this.getComment()
                    this.$message(res.data.message)
                })
            },
            getComment(){
                this.$http({
                    url:'/apis/comments/getArticleComment',
                    method:'get',
                    params:{
                        relation:this.comments.relation
                    }
                }).then((res) => {
                    this.showComments = res.data.data
                })
            }
        },
        mounted(){
            this.init().then((res)=>{
                console.log('promise', res)
                this.getComment()
            })
        },
        created(){
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
            .comments{
                width: 1100px;
                margin: 20px auto;
                .u-img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    margin-right: 20px;
                }
                .u-area{
                    margin-bottom: 20px;
                    box-sizing: border-box;
                    padding: 10px;
                    border: 1px solid #f4f4f4;
                    min-height: 265px;
                    min-width: 950px;
                    p{
                        input{
                            padding: 10px 0;
                            margin-right: 4px;
                            border-left: none;
                            border-top: none;
                            border-right: none;
                            width: 300px;
                            border-bottom: 1px dashed #dedede;
                            font-size: 14px;
                            &:focus{
                                border-bottom: 1px dashed red;
                            }
                        }
                    }
                    div{
                        margin-top: 20px;
                        textarea{
                            width: 100%;
                            min-height: 200px;
                            font-size: 16px;
                            border: none;
                        }
                    }
                }

            }
            .m-vistor{
                margin-left: 140px;
                img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    margin-right: 20px; 
                }
                p{
                    margin-bottom: 8px;
                    min-width: 900px;
                    font-size: 14px;
                }
                div{
                    p:nth-of-type(1){
                        font-size: 16px;
                    }
                    p:nth-of-type(2){
                        margin: 18px 0;
                    }
                    p:nth-of-type(3){
                        padding-bottom: 20px;
                        border-bottom: 1px solid #f5f5f5;
                        .time{
                            color: #b3b3b3;
                        }
                    }
                }
                li{
                    margin-bottom: 10px;
                }
            }
            .typeTitle{
                 margin-bottom: 20px;
                 text-align: center;
            }
            .textContent{
                box-sizing: content-box;
                margin: 20px;
                background: #f5f5f5;
                min-height: 800px;
                padding: 20px 10px;
                box-shadow: -4px 7px 46px 2px rgba(0,0,0,0.1);
            }   
            .bottom{
              text-align: right;
              margin-right: 20px;  
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
