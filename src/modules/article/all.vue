<template>
    <section class="g-allarticle">
        <operation :data="operation" @output="shoData"/>
        <section class="addcatalogue">
            <el-table :data="dataShow">
                <el-table-column label="标题" prop="title">
                    <template slot-scope="scope">
                        <a href="javascript:;" class="title">{{scope.row.title}}</a>
                    </template>
                </el-table-column>
                <el-table-column label="分类目录" ></el-table-column>
                <el-table-column label="标签" ></el-table-column>
                <el-table-column label="评论"></el-table-column>
                <el-table-column label="访问量"></el-table-column>
                <el-table-column label="日期">
                    <template slot-scope="scope">
                        <span>{{dateChange(scope.row.upTime)}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="edit(scope.row)" v-show="nowStatus != 2">编辑</el-button>
                        <el-button size="mini" type="success" @click="pubIt(scope.row)" v-show="nowStatus == 1">发布</el-button>
                        <el-button size="mini" type="danger" @click="discard(scope.row)" v-show="nowStatus != 2">丢弃</el-button>
                        <el-button size="mini" type="primary" @click="restore(scope.row)" v-show="nowStatus == 2">还原</el-button>
                        <el-button size="mini" type="danger" @click="dele(scope.row)" v-show="nowStatus == 2">彻底删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <buttongroup />
        </section>
    </section>
</template>

<script>
    import operation from '../../components/operation'
    import buttongroup from '../../components/buttonGroup.vue'
    export default {
        name: 'allarticle',
        data(){
            return {
                articleData: {
                    publish:[],
                    draft:[],
                    recycle:[]
                },
                dataShow:null,
                operation:[
                    {name: '已发布', number:0, status:0},
                    {name: '草稿', number:0, status:1},
                    {name: '回收站', number:0, status:2}
                ],
                nowStatus:0
            }
        },
        components:{
            operation,
            buttongroup
        },

        methods:{
            // 删除
            dele(index){
                this.$confirm('确定要还原吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    const api = '/apis';
                     const data = index;
                     data.status = 3;
                     this.$http({
                         method: 'post',
                         url:`${api}/article/operation`,
                         data:index
                     }).then(async (res) => {
                         this.$message({
                             type: 'success',
                             message: '还原成功'
                         })
                     })
                     this.init().then((res)=>{
                        this.dataShow = this.articleData.recycle;
                     })
                })
            },
            // 还原
            restore(index){
                this.$confirm('确定要还原吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    const api = '/apis';
                     const data = index;
                     data.status = 0;
                     this.$http({
                         method: 'post',
                         url:`${api}/article/operation`,
                         data:index
                     }).then(async (res) => {
                         this.$message({
                             type: 'success',
                             message: '还原成功'
                         })
                     })
                     this.init().then((res)=>{
                        this.dataShow = this.articleData.recycle;
                     })
                })
               
            },
            //发布
            pubIt(index){
                this.$confirm('确定要发布吗', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                     const api = '/apis';
                     const data = index;
                     data.status = 0;
                     this.$http({
                         method: 'post',
                         url:`${api}/article/operation`,
                         data:index
                     }).then(async (res) => {
                         this.$message({
                             type: 'success',
                             message: '发布成功！'
                         })
                     })
                    this.init().then((res)=>{
                        this.dataShow = this.articleData.draft;
                    })
                }).catch(()=>{
                    this.$message({
                        type: 'info',
                        message: '取消发布'
                    })
                })
            },
            init(){
                return  new Promise((resolve, reject) => {
                    const api = '/apis'
                    this.$http({
                        methods:'get',
                        url:`/apis/article/getArticle`,
                        params:{
                            userName:'linzhiying'
                        }
                    }).then((res)=>{
                        this.operation[0].number = 0;
                        this.operation[1].number = 0;
                        this.operation[2].number = 0;
                        this.articleData.publish = [];
                        this.articleData.draft =[];
                        this.articleData.recycle =[];
                        res.data.data.map((item, index)=>{
                            if(item.status == 0){
                                this.operation[0].number += 1;
                                this.articleData.publish.push(item)
                            }else if(item.status == 1){
                                this.operation[1].number += 1;
                                this.articleData.draft.push(item)
                            }else{
                                this.operation[2].number += 1;
                                this.articleData.recycle.push(item)
                            }
                        })
                        this.dataShow = res.data.data.filter((item)=>{
                            return item.status == 0
                        })
                        resolve(this.dataShow)
                    })
                })
                
            },
            edit(index){
                this.$router.push({path: 'write', query: {conten: index}})
            },
            //丢弃
            discard(index){
                this.$confirm('确定要丢弃到回收站?','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    const api = '/apis';
                    const data = index;
                    data.status = 2;
                    this.$http({
                        method:'post',
                        url:`${api}/article/operation`,
                        data:index
                    }).then((res) => {
                        this.$message({
                            type: 'successful',
                            message: '丢弃成功'
                        })

                        this.init().then((res)=>{
                            if( this.nowStatus == 1){
                                this.dataShow = this.articleData.draft;
                            }else{
                                this.dataShow = this.articleData.publish;
                            }
                        })
                    })
                    this.init()
                }).catch(()=>{
                    this.$message({
                        type: 'info',
                        message:'已取消'
                    })
                })
                
            },
            filteration(val){
                if(val < 10){
                    return '0'+val
                }
                return val
            },
            dateChange(val){
                var time = new Date(val);
                var year = time.getFullYear(),
                    month = time.getMonth(),
                    day = time.getDate(),
                    hour = time.getHours(),
                    min = time.getMinutes(),
                    secend = time.getSeconds();
                const end = `${year}-${this.filteration(month+1)}-${this.filteration(day)}      ${this.filteration(hour)}:${this.filteration(min)}`
                return end;
            },
            shoData(number){
                switch(number){
                    case 0:
                        this.dataShow = this.articleData.publish;
                        this.nowStatus = 0;
                        break;
                    case 1:
                        this.dataShow = this.articleData.draft;
                        this.nowStatus = 1;
                        break;
                    case 2:
                        this.dataShow = this.articleData.recycle;     
                        this.nowStatus = 2;   
                }
            }
        },
        created(){
            this.init()
        },
    }
</script>

<style lang="scss" scoped>
    .g-allarticle{  
        .title{
            color: #3c8dbc;
            &:active, &:hover{
                color: #72afd2
            }
        }
    }
</style>

