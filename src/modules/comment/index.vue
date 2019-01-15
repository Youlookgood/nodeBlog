<template>
    <section class="g-comment">
        <operation @output="choice" :data="operation"/>
        <div>
            <el-table :data="showData">
                <el-table-column label="评论者" prop="name">
                    <template slot-scope="scope">
                        <a href="javascript:;">{{scope.row.name}}</a>
                    </template>
                </el-table-column>
                <el-table-column label="内容" prop="content">
                </el-table-column>
                <el-table-column label="评论页面">
                    <template slot-scope="scope">
                        <a href="javascript:;">暂无</a>
                    </template>
                </el-table-column>
                <el-table-column label="日期">

                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="opera">
                        <el-button type="primary" size="mini" v-show="nowStatus == 0">回复</el-button>
                        <el-button type="primary" size="mini" v-show="nowStatus == 1" @click="publish(opera.row)">发布</el-button>
                        <el-button type="danger" size="mini" @click="abandon(opera.row)" v-show="nowStatus != 2">丢弃</el-button>
                        <el-button type="primary" size="mini" v-show="nowStatus == 2" @click="restar(opera.row)">还原</el-button>
                        <el-button type="danger" size="mini" v-show="nowStatus == 2" @click="deletes(opera.row)">彻底删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <button-group/>
        </div>
    </section>
</template>


<script>
    import operation from '../../components/operation.vue'
    import buttonGroup from '../../components/buttonGroup.vue'
    export default{
        name:'comment',
        data(){
            return {
                commentData:[
                    {commenter: 'line', content:'welcome', page:'来啊', date:'2018-12-17', operate:''}
                ],
                operation:[
                    {name:'已发布', number:0, status:0 },
                    {name:'待审核', number:0, status:1 },
                    {name:'回收站', number:0, status:2 },
                ],
                nowStatus:0,
                showData:[]
            }
        },
        methods:{
            //彻底删除
            deletes(row){
               this.$http({
                    url:'/apis/comments/operation',
                    method:'post',
                    data:{
                        serial:row.serial,
                        status:3
                    }
                }).then((res) => {
                    this.operaitons(2,3);
                    this.$message(res.data.message);
                    
                })  
            },
            //还原
            restar(row){
                this.$http({
                    url:'/apis/comments/operation',
                    method:'post',
                    data:{
                        serial:row.serial,
                        status:0
                    }
                }).then((res) => {
                    this.operaitons(this.nowStatus,0)
                    this.$message(res.data.message);
                    
                })
            },
            //发布
            publish(row){
               this.$http({
                    url:'/apis/comments/operation',
                    method:'post',
                    data:{
                        serial:row.serial,
                        status:0
                    }
                }).then((res) => {
                    this.operaitons(this.nowStatus,0)
                    this.$message(res.data.message);
                }) 
            },
            //丢弃
            abandon(row){
                this.$http({
                    url:'/apis/comments/operation',
                    method:'post',
                    data:{
                        serial:row.serial,
                        status:2
                    }
                }).then((res) => {
                    this.operaitons(this.nowStatus,2)
                    this.$message(res.data.message);
                    
                })
            },
            //选择
            choice(status){
                switch(status){
                    case 0:
                        this.nowStatus = 0;
                        this.operaitons(0);
                        break;
                    case 1:
                        this.nowStatus = 1;
                        this.operaitons(1);
                        break;
                    case 2:
                        this.nowStatus = 2;
                        this.operaitons(2);
                        break;        
                }
            },
            operaitons(number,op){
                this.$http({
                    url:'/apis/comments/getComments',
                    method:'get',
                    params:{
                        status:number
                    }
                }).then((res)=>{
                    if(!op && op != 0){
                        return  this.showData = res.data.data
                    }
                    if(op == 3){
                        this.operation[this.nowStatus].number -= 1;
                        return this.showData = res.data.data
                    }
                    this.operation[this.nowStatus].number -= 1;
                    this.operation[op].number += 1;
                    this.showData = res.data.data
                })
            },
            init(){
                return new Promise((resolve, reject)=>{
                    this.$http({
                        url:'/apis/comments/getComments',
                        method:'get',
                        params:{
                            status:0,
                            quantity:'all'
                        }
                    }).then((res)=>{
                        res.data.datas.map((item)=>{
                            if(item.status == 0){
                                this.operation[0].number +=1
                                this.showData.push(item)
                            }else if(item.status ==1){
                                this.operation[1].number +=1
                            }else{
                                this.operation[2].number +=1
                            }
                            
                        })
                        resolve(res)
                    }).catch((err) =>{
                        reject(err)
                    })
                })
            },


        },
        mounted(){
            //初始化
            this.init()
        },
        components:{
            operation,
            buttonGroup
        }
    }
</script>

<style scope lang="scss">
    .g-comment{
        
        .tabBottom{
            background-color: #fff;
            height: 53px;
            line-height: 53px;
            div:nth-of-type(1){
                span{
                    margin-left: 10px;
                }
            }
            div:nth-of-type(2){
                margin-right: 10px;
            }
        }
    }
</style>
