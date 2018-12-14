<template>
    <section class="g-content-wrap f-cb">
        <div class="f-cb">
            <article class="f-fl artZone">
            <!-- <h4>{{contentTitle}}</h4> -->
                <h4 class="typeTitle">这是详情</h4>
                <template>
                    <div class="titleImg">
                        <img src="https://cdn.liaoxuefeng.com/cdn/files/attachments/001525354340372c2bfb3745fd74066be9039bb6dd614b3000/l" alt="导图">
                    </div>
                    <div>
                        <p><span>林志颖</span>/<span>编程</span>/<span>18-12-12</span>/<span>阅读量：100</span></p>
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
            }
        },
        created(){
            console.log(this.$route.params)
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
