<template>
  <div class="root">
    <!--头部区域-->
    <div class="header">
      <el-card class="box-card">
        <div class="wel">欢迎注册</div>
        <div class="has">已有账号？</div>
        <div class="log">
          {{ this.msg }}
          <a href="http://localhost:8080/#/login">请登录></a>
        </div>
      </el-card>
    </div>
    <!--中间区域-->
    <div class="content" v-if="show1">
      <div class="step">
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="验证手机号"></el-step>
          <el-step title="填写账号信息"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
      </div>
      <div class="body">
        <label class="lab1">手机号</label>
        <el-input
          v-model.trim="telephone"
          clearable
          placeholder="建议使用常用手机号"
          class="tel"
        ></el-input>
      </div>
      <div class="tip" v-if="show3">
        <span class="iconfont icon-gantanhao gantan"></span>
        <span class="tip1">{{ this.tip }}</span>
      </div>
      <button class="btn" @click="next" style="cursor: pointer">下一步</button>
    </div>
    <div class="content" v-if="show2">
      <div class="step">
        <el-steps :space="200" :active="2" finish-status="success">
          <el-step title="验证手机号"></el-step>
          <el-step title="填写账号信息"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
      </div>
      <div class="body">
        <label class="lab2">手机号</label>
        <el-input
          :placeholder="telephone"
          :disabled="true"
          clearable
          class="inp1"
        >
        </el-input>
        <label class="lab3">密&nbsp;&nbsp;&nbsp;码</label>
        <el-input
          placeholder="建议使用两种或两种以上字母组合"
          v-model="password"
          class="inp2"
          clearable
          show-password
          @input="yan1"
        >
        </el-input>
        <span class="iconfont icon-zhengque dui1" v-if="show6"></span>
        <div class="yanzhen1" v-if="show4">
          <span class="iconfont icon-gantanhao gantan"></span>
          <span class="tip2">{{ this.tip1 }}</span>
        </div>
        <label class="lab4">确认密码</label>
        <el-input
          placeholder="请再次输入密码"
          v-model="dpassword"
          clearable
          show-password
          class="inp3"
          @input="yan2"
        ></el-input>
        <span class="iconfont icon-zhengque dui2" v-if="show7"></span>
        <div class="yanzhen2" v-if="show5">
          <span class="iconfont icon-gantanhao gantan"></span>
          <span class="tip2">{{ this.tip2 }}</span>
        </div>
        <button class="btn1" @click="register" style="cursor: pointer">
          立即注册
        </button>
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
import axios from "axios";
export default {
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      meg: "",
      telephone: "",
      password: "",
      dpassword: "",
      tip: "",
      tip1: "",
      tip2: "",
    };
  },
  methods: {
    next() {
      if (this.telephone === "") {
        this.tip = "请输入手机号";
        this.show3 = true;
      } else if (this.telephone.length !== 11) {
        this.tip = "手机号格式错误";
        this.show3 = true;
      } else {
        this.show3 = false;
        this.check();
      }
    },
    register() {
      if (this.password === "") {
        this.tip1 = "密码不能为空";
        this.show5 = false;
        this.show4 = true;
      } else if (this.password.length < 6 || this.password.length > 10) {
        this.tip1 = "密码位数在6~10位之间";
        this.show4 = false;
        this.show4 = true;
      } else if (this.dpassword === "") {
        this.show4 = false;
        this.show5 = true;
        this.tip2 = "请确认密码";
      } else if (this.dpassword !== this.password) {
        this.show4 = false;
        this.show5 = true;
        this.tip2 = "两次密码输入不一致";
      } else {
        this.show4 = false;
        this.show5 = false;
        this.reg();
      }
    },
    yan1() {
      if (this.password === "") {
        this.tip1 = "密码不能为空";
        this.show5 = false;
        this.show4 = true;
        this.show6 = false;
      } else if (this.password.length < 6 || this.password.length > 10) {
        this.tip1 = "密码位数在6~10位之间";
        this.show5 = false;
        this.show4 = true;
        this.show6 = false;
      } else {
        this.show4 = false;
        this.show5 = false;
        this.show6 = true;
      }
    },
    yan2() {
      if (this.show4 === true) {
      } else if (this.dpassword === "") {
        //this.show4 = false;
        this.show5 = true;
        this.show7 = false;
        this.tip2 = "请确认密码";
      } else if (this.dpassword !== this.password) {
        //this.show4 = false;
        this.show5 = true;
        this.show7 = false;
        this.tip2 = "两次密码输入不一致";
      } else {
        // this.show4 = false;
        this.show5 = false;
        this.show7 = true;
      }
    },
    dui() {
      if (
        this.password !== "" &&
        this.password.length >= 6 &&
        this.password.length < 10
      ) {
        this.show6 = true;
        this.show4 = false;
      } else {
        this.show6 = false;
      }
      if (this.dpassword !== "" && this.dpassword === this.password) {
        this.show7 = true;
      } else {
        this.show7 = false;
      }
    },
    async reg() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/register",
        params: {
          telephone: this.telephone,
          password: this.password,
        },
      });
      if (res.status === 200) {
        this.$message.success("注册成功！");
        this.$router.push("login");
      }
    },
    async check() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/check",
        params: {
          telephone: this.telephone,
        },
      });
      if (res.status === 201) {
        this.$message.error("账户已注册！");
      } else {
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  //background-color: black;
  width: 100%;
  height: 130px;

  .wel {
    position: relative;
    top: 30px;
    left: 250px;
    width: 100px;
    font-weight: 400;
    font-size: 25px;
  }
  .el-card {
    height: 100%;
  }
  .has {
    color: #999;
    position: relative;
    left: 1200px;
    top: 25px;
  }
  .log {
    position: relative;
    left: 1290px;
    top: 4px;
  }
  a {
    color: red;
    text-decoration: none;
  }
}
.content {
  width: 100%;
  // background-color: black;
  .title {
    position: relative;
    top: -60px;
    width: 100%;
    left: -20px;
    height: 20px;
    background-color: antiquewhite;
  }
  .step {
    width: 800px;
    position: relative;
    left: 570px;
    top: 80px;
  }
  .body {
    position: relative;
    width: 30%;
    top: 150px;
    left: 530px;
  }
  .btn {
    background-color: red;
    color: white;
    font-size: 20px;
    width: 430px;
    height: 50px;
    position: absolute;
    top: 400px;
    left: 560px;
    border: none;
  }
}
.footer {
  width: 100%;
  //background-color: black;
  height: 100px;
  position: absolute;
  top: 620px;
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
a {
  color: red;
  text-decoration: none;
}
.btn1 {
  background-color: red;
  color: white;
  font-size: 20px;
  width: 430px;
  height: 50px;
  position: absolute;
  top: 220px;
  left: 40px;
  border: none;
}
.tel {
  position: absolute;
  left: 85px;
  top: -10px;
  width: 78%;
}
.lab1 {
  position: absolute;
  top: 0px;
  left: 30px;
  color: #666;
}
.tip {
  width: 25%;
  height: 25px;
  // background-color: #666;
  position: relative;
  top: 185px;
  left: 560px;
  .gantan {
    color: #d93637;
    font-size: 12px;
  }
  .tip1 {
    color: #d93637;
    font-size: 12px;
  }
}
.inp1 {
  position: absolute;
  left: 130px;
  top: 0px;
  width: 76%;
}
.inp2 {
  position: absolute;
  top: 70px;
  left: 130px;
  width: 76%;
}
.inp3 {
  position: absolute;
  top: 140px;
  left: 130px;
  width: 76%;
}
.lab2 {
  position: absolute;
  top: 10px;
  left: 40px;
  color: #999;
}
.lab3 {
  position: absolute;
  top: 80px;
  left: 40px;
  color: #999;
}
.lab4 {
  position: absolute;
  top: 150px;
  left: 40px;
  color: #999;
}
.yanzhen1 {
  position: absolute;
  top: 112px;
  left: 130px;
  width: 70%;
  height: 25px;
  color: #d93637;
  font-size: 12px;
  .gantan {
    font-size: 12px;
  }
}
.yanzhen2 {
  position: absolute;
  top: 182px;
  left: 130px;
  width: 70%;
  height: 25px;
  color: #d93637;
  font-size: 12px;
  .gantan {
    font-size: 12px;
  }
}
.dui1 {
  color: #43b45c;
  font-size: 20px;
  position: absolute;
  left: 500px;
  top: 80px;
}
.dui2 {
  color: #43b45c;
  font-size: 20px;
  position: absolute;
  left: 500px;
  top: 150px;
}
</style>