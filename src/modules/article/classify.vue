<template>
    <section class="catalogue f-cb">
        <section class="addlogue f-fl">
            <h4>添加分类目录</h4>
            <div class="form">
                <ul>
                    <li v-for="(item, index) in logue" :key="index">
                        <p>{{item.title}}</p>
                        <input type="text" v-model="item.val" v-if="index != 2">
                        <textarea v-model="item.val" v-if="index == 2"></textarea>
                        <p>{{item.desc}}</p>
                    </li>
                </ul>
            </div>
            <h4><el-button size="mini" type="primary">确定添加</el-button></h4>
        </section>
        <section class="alllogue f-fr">
            <h4>所有分类目录</h4>
            <el-table :data="logueData">
                <el-table-column label="名称" prop="name" width="100"></el-table-column>
                <el-table-column label="路径" prop="address"></el-table-column>
                <el-table-column label="描述" prop="desc"></el-table-column>
                <el-table-column label="文章数" prop="number" align="center"></el-table-column>
                <el-table-column label="操作" prop="operation" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary">修改</el-button>
                        <el-button type="danger" size="mini">永久删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </section>
    </section>
</template>

<script>
    export default {
        name:'catalogue',
        data(){
            return {
                logue:[
                    {title:'名称',val:'',desc:'页面上所显示的名称'},
                    {title:'路径名称', val:'', desc: '*这是文章路径上显示的名称，最好为英文'},
                    {title:'描述', val:'', desc: '*添加描述，部分主题可显示'}
                ],
                logueData:[
                    {name: '未分类', address:'default', desc: '未分类', number: '0', id:123},
                    {name: '已分类', address:'default', desc: '未分类', number: '0', id:123},
                    {name: '分类', address:'default', desc: '未分类', number: '0', id:123},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .catalogue{
        .addlogue{
            width: 674px;
            border-radius: 2px;
            background-color: #fff;
            h4{
                padding: 10px;
            }
            h4:nth-of-type(1){
                font-size: 16px;
                border-bottom: 1px solid #f4f4f4;
            }
            h4:nth-of-type(2){
                font-size: 16px;
                border-top: 1px solid #f4f4f4;
            }
            .form{
                padding: 10px;
                li{
                    margin-bottom: 10px;
                    p{
                        margin-bottom: 6px;
                        font-size: 14px;
                    }
                    p:nth-of-type(1){
                        font-weight: bold;
                    }
                    input{
                        width: 100%;
                        padding: 8px;
                        box-sizing: border-box;
                        margin-bottom: 4px;
                        border: 1px solid #d2d6de;
                        &:focus{
                            border-color: #3c8dbc;
                        }
                    }
                    textarea{
                        width: 100%;
                        height: 100px;
                        padding: 10px 0 0 10px;
                        box-sizing: border-box;
                        border: 1px solid #f4f4f4;
                        &:focus{
                            border-color: #3c8dbc;
                        }
                    }
                }

            }

        }
        .alllogue{
            width: 900px;
            background-color: #fff;
            border-radius: 2px;
            h4{
                padding: 10px;
                font-size: 18px;
                border-bottom: 1px solid #f4f4f4;
            }
        }
    }

</style>
