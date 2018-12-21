<template>
    <section class="g-operation">
        <ul class="f-cb">
            <li :class="['f-fl','list', ]" v-for="(item, index) in data" :key="index" @click="choice(item, index)">
                <span :class=" now == index ? 'active' : '' ">
                    {{item.name}}({{item.number}})
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
    
    export default{
        name:'operation',
        props:{
            data:{
                type: Array,
            },

        },
        data(){
            return {
                opera:[
                    {name:'已发布', number:1 },
                    {name:'待审核', number:0 },
                    {name:'回收站', number:0 },
                ],
                now:0,
            }
        },
        methods:{
            choice(it,id){
                this.now = id;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-operation{
        margin-bottom: 20px;
        .list{
            margin-right: 10px;
            border-right: 1px solid #000;
            padding-right: 8px;
            span{
                color: #72afd2;
                font-size: 12px;
                cursor: pointer;
            }
            .active{
                color: #000;
            }
        }
        .list:nth-of-type(3){
            border-right: none;
        }
    }
</style>

