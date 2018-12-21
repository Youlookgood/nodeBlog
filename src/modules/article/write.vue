<template>
    <section class="g-write f-cb">
        <section class="main f-fl">
            <h4><input class="title" type="text" placeholder="请输入文章标题"></h4>
            <p>固定链接<a href="javascript:;">http://linzhiying.com</a><el-button size="mini" type="info" >编辑</el-button></p>
            <article class="pape">
                <div id="editor" ref="editor">
                </div>
            </article>
        </section>
        <section class="unit f-fr">
            <unit title="发布"/>
        </section>
    </section>
</template>

<script>
    import E from 'wangeditor'
    import unit from '../../components/unitLayout.vue'
    export default {
        name: 'write',
        data(){
            return {
                 editorContent: '',
                 }
        },
        components:{
            unit
        },
        mounted(){
            this.initEdit()
        },
        methods:{
            initEdit(){
                var editor = new E(this.$refs.editor)
                editor.customConfig.onchange = (html) => {
                    this.editorContent = html
                }
                editor.create()
                
            },
        }
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
        }
    }
</style>
