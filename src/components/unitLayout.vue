<template>
    
    <section class="g-unit">
        <p class="title f-cb">
            <span>{{title}}</span>
            <label class="f-fr">
                <a href="javascript:;" @click="isShow = !isShow" v-show="isShow">一</a>
                <a href="javascript:;" @click="isShow = !isShow" v-show="!isShow">+</a>
            </label>
        </p>
        <div class="slot" v-show="isShow">
            <slot name="content"></slot>
        </div>
    </section>

</template>

<script>
    export default {
        props:{
            title:{
                type: String,
                required: true
            }
        },
        name: 'unit',
        data(){
            return {
                isShow:true
            }
        },
        methods:{
            isshow(){
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-unit{
        background-color: #fff;
        border-radius: 2px;
        margin-bottom: 18px;
        .title{
            font-size: 18px;
            padding: 12px;
            box-sizing: border-box;
            border-bottom: 1px solid #f4f4f4;
            a{
               font-size: 18px; 
            }
        }
        .slot{
            box-sizing: border-box;
            .content{
                padding: 6px;
            }
        }
    }
</style>
