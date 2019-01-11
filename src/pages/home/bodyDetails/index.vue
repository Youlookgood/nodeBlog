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
            }
        },
        methods:{
            init(){
                this.$http({
                    url:'/apis/article/getArticle',
                    method:'get',
                    params:{
                        serial:Number(this.$route.params.id),
                        page:'detail'
                    }
                }).then(async (res) => {
                    this.detailData = res.data.data;
                    this.$refs.textContent.innerHTML = this.detailData.content;
                })
            }
        },
        mounted(){
            this.init()
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
            .typeTitle{
                 margin-bottom: 20px;
                 text-align: center;
            }
            .textContent{
                box-sizing: content-box;
                margin: 20px;
                background: #f5f5f5;
                min-height: 300px;
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
