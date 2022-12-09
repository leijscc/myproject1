<template>
  <div class="root">
    <div class="header">
      <!--logo区域-->
      <div class="logo">欢迎登录</div>
      <!--黄色提示栏区域-->
      <div class="remind">
        <div class="content">
          <span class="iconfont icon-a-icon_gantanhaojingshi span1"></span>
          <span class="p1"
            >依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！
            新版<a href="#">《优品汇隐私政策》</a
            >已上线，将更有利于保护您的个人隐私。</span
          >
        </div>
      </div>
    </div>

    <!--登录区域-->
    <div class="log">
      <div class="log1">
        <img src="@/assets/login1.png" class="img1" />
      </div>
      <div class="log2">
        <div class="content1">
          <span class="iconfont icon-a-icon_gantanhaojingshi span3"></span>
          <span class="p2">优品汇不会以任何理由要求您转账汇款，谨防诈骗</span>
        </div>
        <div class="fon">账户登录</div>
        <br />
        <hr />
        <!--输入账号密码错误时的提示区域-->
        <div class="tip" v-if="show">
          <span class="iconfont icon-jinzhide jinzhi"></span>
          <span class="jin">{{ this.tip }}</span>
        </div>
        <el-input
          placeholder="账户名"
          v-model="telephone"
          clearable
          prefix-icon="el-icon-user-solid"
          class="inp1"
        ></el-input>
        <el-input
          placeholder="密码"
          v-model="password"
          clearable
          prefix-icon="el-icon-view"
          class="inp2"
          show-password
        >
        </el-input>
        <button class="btn" @click="check" style="cursor: pointer">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        <br />
        <br />
        <br />
        <br />
        <hr class="hr1"/>

        <div class="reg">
          <span class="iconfont icon-zhuce span4"></span>
          <a href="http://localhost:8080/#/register">立即注册</a>
        </div>
      </div>
    </div>
    <!--底部区域-->

    <div class="footer">
      <div class="footer3">
        <a href="#"><span class="span2">关于我们</span></a>
        <span class="span2">|</span>
        <a href="#"><span class="span2"> 联系我们</span></a>
        <span class="span2">|</span>
        <a href="#"><span class="span2">人才招聘</span></a>
        <span class="span2">|</span>
        <a href="#"><span class="span2">商家入驻</span></a>
        <span class="span2">|</span>
        <span class="span2">广告服务</span>
        <span class="span2">|</span>
        <span class="span2">友情链接</span>
        <span class="span2">|</span>
        <span class="span2">销售联盟</span>
        <br />
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span class="span2"
          >Copyright © 2004-2022 优品汇youpinhui.com 版权所有</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      telephone: "",
      password: "",
      tip: "",
      show: false,
      user_id:"",
    };
  },
  methods: {
    check() {
      if (this.telephone === "" && this.password == "") {
        this.tip = "请输入账户名和密码";
        this.show = true;
      }
      else if(this.telephone===""){
        this.tip = "请输入账户名";
        this.show = true;
      }
      else if(this.password===""){
        this.tip = "请输入密码";
        this.show = true;
      }
      else{
        this.show = false;
        this.login();

      }
    },
    async login(){
      const {data:res}=await axios({
        methods:'get',
        url:"http://127.0.0.1/login",
        params:{
         telephone:this.telephone,
         password:this.password
        }
      })
      if(res.status===400){
        this.tip="用户名或密码有误";
        this.show=true;
        localStorage.setItem("token", "");
      }
      else{
        localStorage.setItem("token", res.token);
        this.user_id=res.user_id;
        localStorage.setItem("userId",this.user_id)
        this.$emit('user_id',this.user_id);
        this.$router.push("/");
      }
    }
  },
  mounted(){
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style lang='less' scoped>
.header {
  //background-color: black;
  height: 150px;
  margin-top: -23px;
  position: relative;
}
.remind {
  background-color: #fef8f0;
  height: 30px;
  width: 100%;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  .p1 {
    font-size: 13px;
    color: #999;
    text-align: center;
    margin-left: 10px;
    margin-top: 5px;
  }
}

.span1 {
  text-align: center;
  margin-top: 30px;
  color: #999;
  margin-left: 150px;
  font-size: 8px;
}
a {
  text-decoration: none;
  color: black;
}
.logo {
  //background-color: aqua;
  width: 100%;
  height: 120px;
}
.content {
  margin-top: 4px;
}
img {
  margin-top: 45px;
  margin-left: 380px;
}
.log {
  width: 100%;
  background-color: #e93854;
  height: 450px;
  .log1 {
    width: 600px;
    height: 100%;
    margin-left: 300px;
  }
}
.footer {
  width: 100%;
  //background-color: black;
  height: 100px;
}
.footer3 {
  margin-left: 550px;
  margin-top: 15px;
}
.span2 {
  font-size: 10px;
  margin-left: 8px;
  color: #666;
}
.img1 {
  margin-left: 10px;
  margin-top: 60px;
}
.p2 {
  font-size: 10px;
  position: relative;
  top: 8px;
  color: #999;
}
.logo {
  width: 150px;
  height: 100px;
  position: relative;
  top: 60px;
  left: 30%;
  font-size: 30px;
  font-weight: bold;
}
.log2 {
  width: 350px;
  height: 400px;
  background-color: white;
  position: relative;
  bottom: 430px;
  right: 330px;
  float: right;
}
.content1 {
  //background-color: black;
  height: 40px;
  background-color: #fef8f0;
}
.span3 {
  position: relative;
  left: 30px;
  margin-right: 40px;
  font-size: 18px;
  top: 10px;
  color: #999;
}
.fon {
  color: #e4393c;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  top: 10px;
  left: 20px;
}
hr {
  color: #666;
}
.inp1 {
  
  width: 90%;
  position:absolute;
  left: 10px;
  top: 135px;
}
.inp2 {

  width: 90%;
  position: absolute;
   left: 10px;
   top: 200px;
}
.btn {
  background: #e4393c;
  width: 90%;
  height: 40px;
  border: none;
  position: absolute;
  top: 280px;
  left: 10px;
  color: white;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: #e93854;
}
.reg {
  position: absolute;
  top: 340px;
  left: 250px;
}
.span4 {
  color: #e93854;
  position: relative;
  right: 5px;
}
.tip {
  width: 90%;
  height: 25px;
  background-color: #fdebeb;
  position: relative;
  left: 10px;
  top:-3px;
  margin: 0px;
  .jinzhi {
    position: relative;
    left: 5px;
    top: 2px;
    color: red;
  }
  .jin {
    position: relative;
    left: 10px;
    font-size: 10px;
    color: red;
  }
}
.hr1{
  position:absolute;
  top:250px;
}
</style>