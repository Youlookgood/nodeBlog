<template>
    <section class="g-attachment f-cb">
        <ul class="f-cb">
            <li v-for="(item, index) in imgList" :key="index" :class="['f-fl', 'item']" @click="showDetail(item)">
                <div>
                    <img :src="item.address" alt="图片">
                </div>
            </li>
        </ul>
        <button-group />
    </section>

</template>

<script>
    import buttonGroup from '../../components/buttonGroup.vue'
    import {mapState, mapMutations} from 'vuex'
    export default{
        name: 'attachment',
        data(){
            return {
                imgList:[
                    {name: 'mysql20181213165123331.jpg', type:'image/jpeg', address: 'http://wss12138.cn:8090/upload/2018/11/homepage-banner20181209195303250_small.jpg', date: '2018-12-13 16:51:23', size: '18kb', box:'750x571'},
                    {name: 'mysql20181213165123331.jpg', type:'image/jpeg', address: 'http://wss12138.cn:8090/upload/2018/11/homepage-banner20181209195303250_small.jpg', date: '2018-12-13 16:51:23', size: '18kb', box:'750x571'},
                    {name: 'mysql20181213165123331.jpg', type:'image/jpeg', address: 'http://wss12138.cn:8090/upload/2018/11/homepage-banner20181209195303250_small.jpg', date: '2018-12-13 16:51:23', size: '18kb', box:'750x571'},
                ],
            }
        },
        components:{
            buttonGroup,
        },
        methods:{
            ...mapMutations(['showHide']),
            showDetail(item){
                this.showHide()
            }
        }
    }

</script>

<style scoped lang="scss">
    .g-attachment{
        ul{
            margin-bottom: 10px;
            .item{
                width: 254px;
                height: 254px;
                margin-right: 10px;
                background-color: #fff;
                padding: 4px;
                padding-right: 6px;
                padding-bottom: 6px;
                border-radius: 2px;
                border: 1px solid #ddd;
                cursor: pointer;
                &:hover{
                    border: 1px solid #337ab7;
                }
                div{
                    width: 100%;
                    height:100%;
                }
            }
        }
    }

</style>
