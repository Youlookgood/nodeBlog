<template>
    <section class="g-comment">
        <operation :data="operation"/>
        <div>
            <el-table :data="commentData">
                <el-table-column label="评论者" prop="commenter">
                    <template slot-scope="scope">
                        <a href="javascript:;">{{scope.row.commenter}}</a>
                    </template>
                </el-table-column>
                <el-table-column label="内容" prop="content">

                </el-table-column>
                <el-table-column label="评论页面">
                    <template slot-scope="scope">
                        <a href="javascript:;">{{scope.row.page}}</a>
                    </template>
                </el-table-column>
                <el-table-column label="日期" prop="date">

                </el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button type="primary" size="mini">回复</el-button>
                        <el-button type="danger" size="mini">丢弃</el-button>
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
                    {name:'已发布', number:1 },
                    {name:'待审核', number:0 },
                    {name:'回收站', number:0 },
                ],
            }
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
