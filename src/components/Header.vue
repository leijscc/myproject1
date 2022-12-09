<template>
  <div class="root">
    <!--header导航区-->
    <div class="w">
      <!--用户登陆后显示-->
      <el-dropdown v-if="!token" class="user">
        <span class="el-dropdown-link" style="cursor: pointer"
          >{{this.telephone}}<i class="el-icon-arrow-down el-icon--right"></i
        ></span>
        <el-dropdown-menu slot="dropdown" style="width: 300px; height: 120px">
          <div class="user1">
            <a href="http://localhost:8080/#/login" @click="quit">退出</a>
          </div>
          <div class="img1">
            <a href="http://localhost:8080/#/user1"
              ><img src="@/assets/touxiang.jpg"
            /></a>
          </div>
          <div class="right">
            <h1 class="gou">优享值：{{this.you}}</h1>
            <h1 class="gou">普通会员</h1>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <!--用户未登录时显示-->
      <div class="nav1">
        <span class="span3 shouye"
          ><a href="http://localhost:8080/#/">
            <span class="iconfont icon-shouye span5"></span>优品汇首页</a
          ></span
        >
      </div>
      <div class="nav3">
        <span class="span1" v-if="token"
          ><a href="http://localhost:8080/#/login">你好，请登录</a></span
        >
        <span class="span2" v-if="token"
          ><a href="http://localhost:8080/#/register">免费注册</a></span
        >
      </div>
      <div class="nav2">
        <span class="span3">|</span>
        <span class="span3" @click="dingdan" style="cursor: pointer"
          >我的订单</span
        >
        <span class="span3">|</span>
        <span class="span3 span4" @click="gou" style="cursor: pointer">
          <i class="el-icon-shopping-cart-full"></i>&nbsp;购物车
        </span>
        <span class="span3">|</span>
        <span class="span3" @click="shouchang" style="cursor: pointer"
          ><i class="el-icon-star-off"></i>收藏夹</span
        >
        <span class="span3">|</span>
        <span class="span3" @click="youpin"><a href="#">我的优品汇</a></span>
        <span class="span3">|</span>
        <span class="span3" @click="vip"><a href="#">优品汇会员</a></span>
      </div>
    </div>
    <!--header图片区-->

    <img src="https://ossgw.alicdn.com/alp/1666889453529-1300-90.jpg" />
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      token: localStorage.getItem("token") === "",
      path: this.$route.path !== "http://localhost:8080/#/",
      you:"",
      telephone:"",
    };
  },
  methods: {
    quit() {
      localStorage.setItem("token", "");
    },
    gou() {
      if (this.token === true) {
        this.$router.push("login");
      } else {
        this.$router.push("cart");
      }
    },
    dingdan() {
      if (this.token === true) {
        this.$router.push("login");
      } else {
        this.$router.push("user1");
      }
    },
    youpin() {
      if (this.token === true) {
        this.$router.push("login");
      }
    },
    vip() {
      if (this.token === true) {
        this.$router.push("login");
      }
    },
    shouchang() {
      if (this.token === true) {
        this.$router.push("login");
      } else {
        this.$router.push("user2");
      }
    },
    async send() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadaddress",
        params: {
          user_id: localStorage.getItem("userId"),
        },
      });
      this.telephone = res.result[0].telephone.slice(0,4)+"xxxx"+res.result[0].telephone.slice(7,11);
      this.you = res.result[0].you;
    },
  },
  created() {
    this.send();
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link{
  position: relative;
  left:-30px;
  top:30px
}
.el-icon--right{
  position: relative;
  top:-30px;
  left:60px;
}
.w {
  width: 100%;
  height: 30px;
  background-color: #e3e4e5;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
}

.user {
  width: 80px;
  position: absolute;
  left: 830px;
  top: 0px;
  color: #999;
}
.span1 {
  color: #999;
  a {
    color: #999;
  }
}
.span2 {
  margin-left: 10px;
  a {
    color: red;
  }
}
.span3 {
  margin-left: 10px;
  color: #999;
  a {
    color: #999;
  }
}
.span4:hover {
  color: red;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  height: 80px;
}

.span4 {
  margin-left: 20px;
  font-size: 10px;
  color: #999;
  a {
    color: #999;
  }
}
a:hover {
  color: red;
}
.span3:hover {
  color: red;
}

.span5 {
  margin-left: 20px;
  font-size: 10px;
  a {
    color: red;
  }
}
.brand {
  width: 230px;
  height: 110px;
  margin-left: 150px;
}
.brandbox {
  float: left;
  height: 100px;
  width: 0px;
}
.nav1 {
  position: absolute;
  left: 180px;
  .span5 {
    position: absolute;
    top: 1px;
    left: -28px;
    font-size: 15px;
  }
}

.nav2 {
  position: absolute;
  left: 900px;
  top: -2px;
}
.nav3 {
  position: absolute;
  left: 760px;
  color: #999;
}

.el-dropdown {
  padding-right: 50px;
  position: absolute;
  top:-30px;
}
.user1 {
  position: relative;
  left: 250px;
  font-size: 13px;
  color: #999;
  a {
    color: #999;
  }
  a:hover {
    color: red;
  }
}
.img1 {
  position: relative;
  top: 10px;
  left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
.gou {
  position: relative;
  left: 120px;
  top: -70px;
  font-size: 15px;
  color: #999;
}
</style>