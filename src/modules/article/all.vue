<template>
    <section class="g-allarticle">
        <operation :data="operation" />
        <section class="addcatalogue">
            <el-table :data="articleData">
                <el-table-column label="标题" prop="title">
                    <template slot-scope="scope">
                        <a href="javascript:;" class="title">{{scope.row.title}}</a>
                    </template>
                </el-table-column>
                <el-table-column label="分类目录" prop="catalog"></el-table-column>
                <el-table-column label="标签" prop="tag"></el-table-column>
                <el-table-column label="评论" prop="comments"></el-table-column>
                <el-table-column label="访问量" prop="visitor"></el-table-column>
                <el-table-column label="日期" prop="date"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">编辑</el-button>
                        <el-button size="mini" type="danger">丢弃</el-button>
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
                articleData:[
                    {title: 'gitlab优化', catalog: '无分类', tag: '无标签', comments: 0, visitor:10, date:'2018-12-13 17:15', id:1234},
                    {title: 'gitlab优化', catalog: '无分类', tag: '无标签', comments: 0, visitor:10, date:'2018-12-13 17:15', id:1234},
                    {title: 'gitlab优化', catalog: '无分类', tag: '无标签', comments: 0, visitor:10, date:'2018-12-13 17:15', id:1234},
                    {title: 'gitlab优化', catalog: '无分类', tag: '无标签', comments: 0, visitor:10, date:'2018-12-13 17:15', id:1234},
                ],
                operation:[
                    {name: '已发布', number:0},
                    {name: '草稿', number:1},
                    {name: '回收站', number:2}
                ]
            }
        },
        components:{
            operation,
            buttongroup
        }
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

