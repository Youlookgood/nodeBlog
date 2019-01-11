<template>
    <section class="g-write f-cb">
        <section class="main f-fl">
            <h4><input class="title" type="text" placeholder="请输入文章标题" v-model="title"></h4>
            <p>固定链接<a href="javascript:;">http://linzhiying.com</a><el-button size="mini" type="info" >编辑</el-button></p>
            <article class="pape">
                <div id="editor" ref="editor">
                </div>
            </article>
        </section>
        <section class="unit f-fr">
            <unit title="发布">
                <section class="slot" slot="content">
                    <div class="content">
                        <p class="titles">开启评论:</p>
                        <div class="pick">
                            <el-select v-model="comment" placeholder="请选择" style="width:100%;">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <p class="titles">发布时间:</p>
                        <div class="pick">
                            <el-date-picker v-model="time" type="datetime" placeholder="选择日期时间" style="width:100%;" value-format="timestamp">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="bottom f-cb">
                        <el-button size="mini" class="f-fl" @click="saveArticle">保存草稿</el-button>
                        <el-button size="mini" type="primary" class="f-fr" @click="publish">{{ isEditor ? '更新' : '发布'}}</el-button>
                    </div>
                </section>
            </unit>

            <unit title="分类目录">
                <section slot="content" class="subject">
                        <el-checkbox-group v-model="choiceList">
                            <p v-for="logo in choice" :key="logo"><el-checkbox  :label="logo" :key="logo">{{logo}}</el-checkbox></p>
                        </el-checkbox-group>
                </section>
            </unit>

            <unit title="标签">
                <section slot="content" class="tag">
                    <div class="box">
                        <div class="show">
                            <input class="input" type="text" v-model="writeTag" v-show="allTag.length < 1">
                            <ul v-show="allTag.length >= 1" class="f-cb tags">
                                <li v-for="(item, index) in allTag" :key="index" class="f-fl">
                                    <label class="item">{{item}}<span @click="remove(item,index)">x</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="choice">
                        <el-select v-model="tagValue" placeholder="选择标签" clear="choi" style="width:100%;" @change="addTag">
                            <el-option v-for="(item, index) in tagOptions" :key="index" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </section>
            </unit>

            <unit title="缩略图">
                <section class="thumb" slot="content">
                    <div class="imgBox">
                        <img src="http://wss12138.cn:8090/upload/2018/11/homepage-banner20181209195303250.jpg" alt="图片">
                    </div>
                </section>
            </unit>
        </section>
    </section>
</template>

<script>
    // 引入编辑器  http://www.wangeditor.com/
    import E from 'wangeditor'
    import unit from '../../components/unitLayout.vue'
    export default {
        name: 'write',
        data(){
            return {
                 title:'',
                 editorContent: '',
                 options:[
                     {value: true, label:'是'},
                     {value: false, label:'否'},
                 ],
                 comment:null,
                 time:null,
                 choiceList:[],
                 choice:['未分类','git'],
                 allTag:['未分类','git'],
                 tagValue:'',
                 writeTag:'',
                 tagOptions:[
                     {label:'git', value:'git'}, {label:'what', value:'whate'}
                 ],
                 isEditor:false,
            }
        },
        components:{
            unit
        },
        mounted(){
            this.init()
        },
        computed:{
            article(){
                return {
                    title: this.title,
                    content: this.editorContent,
                    comments: this.comment,
                    pubdate: this.time,
                    tag: this.allTag,
                    img: 'test',
                    userId: 'linzhiying',
                    status:0,
                }
            }
        },
        methods:{
            fill(date){
                this.title = date.title;
                this.time = date.upTime;
                this.initEdit(date.content)
                if(!date.comments){
                    this.comment = false
                }else{
                    this.comment = true
                }
            },
            initEdit(date){
                var editor = new E(this.$refs.editor)
                editor.customConfig.onchange = (html) => {
                    this.editorContent = html
                }
                editor.create()
                editor.txt.html(date)
            },
            remove(item, index){
                this.allTag.splice(index, 1)
            },
            addTag(){
                this.allTag.push(this.tagValue)
            },
            publish(){
                const api = '/apis'
                this.$http({
                    method:'post',
                    url: `${api}/article/writeArticle`,
                    data: this.article,
                    
                }).then((res)=>{
                    this.$message(res.data.message)
                })
            },
            saveArticle(){
                if(this.$route.query.conten){
                    console.log(this.$route.query.conten)
                    this.article.onEdit = true
                }
                this.article.status = 1;
                const api = '/apis'
                this.$http({
                    method:'post',
                    url: `${api}/article/writeArticle`,
                    data: this.article,
                }).then((res)=>{
                    this.$message(res.data.message)
                })
            },
            init(){
                if(this.$route.query.conten){
                    this.fill(this.$route.query.conten)
                    this.isEditor = true
                }else{
                    this.initEdit()
                }
            }
        },
    }
</script>

<style scope lang="scss">
    .g-write{
        width: 100%;
        .main{
            width: 70%;
            h4{
                margin-bottom: 10px;
                .title{
                    width: 100%;
                    padding: 12px;
                    background-color: #fff;
                    font-size: 16px;
                    border: 1px solid #d2d6de;
                    box-sizing: border-box;
                    font-weight: bold;
                }
            }
            p{
                margin-bottom: 10px;
                a{
                    margin-right: 10px;
                }
            }
            .pape{
                background-color: #fff;
                font-size: 16px;
            }
        }
        .unit{
            width: 28%;
            .slot{
                .content{
                    .titles{
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 8px;
                    }
                    .pick{
                        width: 100%;
                        margin-bottom: 10px;
                    }
                }
                .bottom{
                        border-top: 1px solid #f4f4f4;
                        padding: 10px;
                }
            }

            .subject{
                padding: 10px;
                padding-bottom: 20px;
            }

            .thumb{
                padding: 10px;
                .imgBox{
                    padding: 6px;
                    border-radius: 4px;
                    border: 1px solid #f4f4f4;
                    box-sizing: border-box;
                    img{
                        width: 100%;
                        height: 130px;
                    }
                }
            }

            .tag{
                padding: 10px;
                .box{
                    border: 1px solid #f4f4f4;
                    border-radius: 4px;
                    padding: 10px;
                    margin-bottom: 10px;
                    .input{
                        width: 100%;
                        border: none;
                        font-size: 14px;
                    }
                    .tags{
                        li{
                            margin-right: 6px;
                            .item{
                                background-color: #e0eaf1;
                                color: #46799b;
                                display: inline-block;
                                padding: 3px;
                                font-size: 12px;
                                span{
                                    margin-left: 10px;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
                .choice{
                    width: 100%;
                }
            }
        }
    }
</style>
