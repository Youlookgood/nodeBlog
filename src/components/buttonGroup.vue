<template>
    <section class="g-button f-cb">
        <div class="f-fl">
             <span>第1/1页</span>
        </div>
        <div class="btn f-fr">
            <el-button-group>
                <el-button v-for="(item, index) in button" :key="index" size="mini">
                    {{item}}
                </el-button>
            </el-button-group>
        </div>
    </section>
</template>

<script>
    export default{
        name:'buttons',
        data(){
            return {
                button: ['首页', '上一页', '下一页', '尾页']
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button{
        background-color: #fff;
        height: 53px;
        line-height: 53px;
        padding: 0 10px;
    }
</style>
