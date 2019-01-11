<template>
    <section class="g-login">
         <div class="body">
              <section class="postion">
                  <h4 class="title"><span>Helo World</span></h4>  
                  <div class="form">
                        <p><input type="text" placeholder="用户名/邮箱" class="userName" v-model="userName"></p>
                        <p><input type="password" placeholder="密码" class="password" v-model="password"></p>
                        <p><button class="login" @click="login">登录</button></p>
                  </div>
              </section>
         </div>
    </section>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default{
        name: 'login',
        data(){
            return {
                userName:'',
                password:''
            }
        },
        computed:{
            ...mapState(['userInfor','navText'])
        },
        methods:{
            ...mapMutations(['getUserInfor']),
            login(){
                const api = '/apis'
                this.$http({
                    method:'post',
                    url:`${api}/users/login`,
                    data:{
                        userName: this.userName,
                        password: this.password
                    },
                }).then((res)=>{
                    if(res.data.code == 0){
                        this.$message('登录成功')
                        this.getUserInfor(res.data.data)
                        localStorage.setItem('userId',"linzhiying")
                        setTimeout(()=>{
                            this.$router.push('admin')                     
                        }, 2000)    
                        
                    }else{
                        this.$message('账号密码错误') 
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-login{
       width: 100%;
       height:100%;
       .body{
           position: absolute;
           left: 50%;
           top: 50%;
           width: 350px;
           height: 500px;
           margin: 30px auto;
           text-align: center;
           .postion{
               position: relative;    
              bottom: 250px;
               right: 175px;
               .title{
                    margin-bottom: 30px;
                    span{
                        font-size: 56px;
                        font-weight: 500;
                        color: #444;
                        text-shadow: #b2baba 0.1em 0.1em 0.2em;
                    }
                } 
                .form{
                    padding: 20px;
                    height: 222px;
                    background: #f5f5f5;
                    box-shadow: -4px 7px 46px 2px rgba(0,0,0,.1);
                    p{
                        margin-top: 40px;
                        input{
                            width: 100%;
                            height: 24px;
                            text-indent: 20px;
                            padding: 2px 0;
                            font-size: 16px;
                            color: #555;
                            &:focus{
                                border: 1px solid #66afe9;
                                box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
                            }
                        }
                        button{
                            width:40%;
                            height:24px;
                            margin: 0 auto;
                            background:#fff;
                            border:1px solid #000;
                            &:hover{
                                background:#000;
                                color:#fff;
                            }
                        }
                    }
                } 
                }
       } 
    }
</style>
