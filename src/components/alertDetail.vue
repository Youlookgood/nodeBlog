<template>
    
    <section class="g-detail" ref="detail"   v-if="showDetail">
        <div class="bg" @click="showHides"></div>
        <div class="m-detail" >
            <div class="title f-cb">
                <span>附件详情</span>
                <div class="operation f-fr">
                    <ul class="f-cb">
                        <li :class="['f-fl', 'opitem']" v-for="(item, index) in operation" :key="index" >
                            <a href="javascript:;" @click="oepration(item, index)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content f-cb">
                <div class="img f-fl">
                    <img src="http://wss12138.cn:8090/upload/2018/11/mysql20181213165123331.jpg" alt="图片">
                </div>
                <div class="tab f-fl">
                    <h4><span>附件详情</span></h4>
                    <ul>
                        <li v-for="(item, index) in tabList" :key="index">
                            <label ><span>{{item.name}}:</span></label>
                            <input type="text" :value="item.value" :class="index > 0 ? 'disable' : ''" :disabled="index > 0">
                        </li>
                    </ul>
                    <div class="f-cb bottom">
                        <el-button type="danger" size="mini">永久删除</el-button>
                        <el-button type="primary" size="mini" class="f-fr">复制链接</el-button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex'
    export default {
        name: 'detail',
        data(){
            return {
                cm:null,
                operation:[
                    {name: '一'},
                    {name: '口'},
                    {name: 'X'}
                ],
                tabList:[
                    {name: '附件名', value:'123.jpg'},
                    {name: '附件类型', value:'imge/jpeg'},
                    {name: '附件路径', value:'/upload/2018/123.jpg'},
                    {name: '上传时间', value: '2018-12-13 16:51:24'},
                    {name: '附件大小', value: '18kb'},
                    {name: '图片尺寸', value: '750x780'}
                ]
            }
        },
        computed:{
            ...mapState(['showDetail'])
        },
        methods:{
            ...mapMutations(['showHide']),
            comput(){
                this.$refs.detail.style.height = document.body.clientHeight + 'px';
            },
            showHides(){
                this.showHide()
            },
            oepration(item, index){
                switch(index){
                    case 0:
                        console.log("000")
                        break;
                    case 1:
                        console.log("111");
                        break;
                    case 2:
                        this.showHide()    
                }
            }
        },
        mounted(){
            this.comput()
        }
    }
</script>

<style lang="scss" scoped>
    .g-detail{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        .bg{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 9;
        }
        .m-detail{
            width:92%;
            height:80%;
            margin: 40px auto;
            background-color: #fff;
            z-index: 1000;
            position: relative;
            .title{
                width: 100%;
                height: 42px;
                line-height: 42px;
                padding: 0 10px;
                box-sizing: border-box;
                background-color: #F8F8F8;
                border-radius: 2px 2px 0 0;
                border-bottom: 1px solid #eee;
                span{
                    font-size: 14px;
                }
                .opitem{
                    margin-left: 14px;
                    a{
                        font-weight: bold;
                        font-size: 12px;
                    }
                }

            }
            .content{
                padding: 6px;
                .img{
                    margin-right: 20px;
                }
                .tab{
                    width: 820px;
                    height: 408px;
                    h4{
                        height: 42px;
                        line-height: 42px;
                        border-bottom: 1px solid #f4f4f4;
                        border-left: 1px solid #f4f4f4;
                        text-indent: 6px;
                        span{
                            font-size: 14px;
                        }
                    }
                    ul{
                        padding: 10px;
                        border-bottom: 1px solid #f4f4f4;
                        border-left: 1px solid #f4f4f4;
                        li{
                            height: 34px;
                            line-height: 34px;
                            margin-bottom: 10px;
                            label{
                                display: inline-block;
                                width: 66px;
                                margin-right: 60px;
                                span{
                                    font-size: 14px;
                                    font-weight: bold;
                                }
                            }
                            input{
                                width: 666px;
                                height: 34px;
                                box-sizing: border-box;
                                padding: 8px;
                                background-color: #fff;
                                outline: none;
                                border: 1px solid #ccc;
                                font-size: 12px;
                            }
                            .disable{
                                background-color: #eee;
                                cursor:  not-allowed;
                            }
                        }
                    }
                    .bottom{
                        border-bottom: 1px solid #f4f4f4;
                        border-left: 1px solid #f4f4f4;
                        padding: 10px;
                    }
                }
            }
        }

    }

</style>

