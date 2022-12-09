<template>
  <div class="root">
    <!--头部区域-->
    <Header></Header>
    <!--nav区域-->
    <div class="nav">
      <span class="span1">我的优品汇</span>
      <!--搜索框-->
      <div class="search">
        <input class="inp" v-model="query" />
        <button class="btn" style="cursor: pointer" @click="search">
          <p>搜索</p>
        </button>
      </div>
      <!--购物车-->
      <div class="cart" style="cursor: pointer">
        <span class="iconfont icon-gouwuchekong span2"></span>
        <a href="http://localhost:8080/#/cart"
          ><span class="span3">我的购物车</span></a
        >
        <!--购物车商品数量显示-->
        <div class="count">
          <span class="span11">{{ this.count }}</span>
        </div>
      </div>
    </div>
    <!--body区域-->
    <div class="body">
      <!--menu区域-->
      <div class="menu">
        <!--订单中心-->
        <div class="indent">
          <span class="span4">订单中心</span>
          <span class="span5" style="cursor: pointer" @click="indent" ref="dom1"
            >我的订单</span
          >
          <hr class="hr1" />
        </div>
        <!--我的关注-->
        <div class="concern">
          <span class="span6">我的关注</span>
          <span
            class="span7"
            style="cursor: pointer"
            @click="concern"
            ref="dom2"
            >关注商品</span
          >
          <hr class="hr2" />
        </div>
        <!--账户设置-->
        <div class="account">
          <span class="span8">账户设置</span>
          <span
            class="span10"
            style="cursor: pointer"
            @click="address"
            ref="dom3"
            >收货地址</span
          >
        </div>
      </div>
    </div>
    <!--订单区域-->
    <Indent v-if="show1"></Indent>
    <!--收藏商品区-->
    <Concern v-if="show2"></Concern>
    <!--地址区域-->
    <Address v-if="show3"></Address>
    <!--Footer区域-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Indent from "@/components/Indent.vue";
import Concern from "@/components/Concern.vue";
import Address from "@/components/Addresss.vue";
import axios from "axios";
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      query: "",
      count: 0,
    };
  },
  methods: {
    indent() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "red";
        this.$refs.dom2.style.color = "";
        this.$refs.dom3.style.color = "";
      });
    },
    concern() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "";
        this.$refs.dom2.style.color = "red";
        this.$refs.dom3.style.color = "";
      });
    },
    address() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "";
        this.$refs.dom2.style.color = "";
        this.$refs.dom3.style.color = "red";
      });
      this.$refs.dom1.style.color = "";
      this.$refs.dom2.style.color = "";
      this.$refs.dom3.style.color = "red";
    },
    //获得当前购物车中商品的数量
    async send() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadcart",
        params: {
          user_id: localStorage.getItem("userId"),
        },
      });
      this.count = res.result.length;
      console.log(res.result);
    },
    //搜索商品
    search() {
      this.query = localStorage.setItem("query", this.query);
      this.$router.push("/search0/0/0/0/0");
    },
  },
  created() {
    if (this.$route.path === "/user2") {
      this.concern();
    } else {
      this.indent();
    }
    this.send();
  },
  components: {
    Header,
    Footer,
    Indent,
    Concern,
    Address,
  },
};
</script>

<style lang="less" scoped>
.root {
  display: inline-block;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
}
.nav {
  width: 100%;
  height: 80px;
  margin-top: -2px;
  background-color: white;
  .span1 {
    position: absolute;
    left: 300px;
    top: 145px;
    font-size: 20px;
    font-weight: 500;
  }
  .search {
    position: absolute;
    left: 300px;
    top: 120px;
    .inp {
      width: 200px;
      height: 30px;
      margin-left: 600px;
      margin-top: 20px;
      border: 2px solid#d93637;
      outline: none;
    }
    .btn {
      width: 70px;
      height: 36px;
      position: absolute;
      left: 808px;
      top: 20px;
      background-color: #d93637;
      border-style: none;
      text-align: center;
      color: white;
      font-size: 20px;
      display: flex;
      p {
        margin-top: 3px;
        margin-left: 10px;
      }
    }
  }
  .cart {
    position: absolute;
    left: 1230px;
    top: 140px;
    width: 165px;
    height: 35px;
    background-color: #f9f9f9;
    border: 1px solid #f0f0f0;
    .span2 {
      position: absolute;
      left: 20px;
      top: 8px;
      color: red;
    }
    .span3 {
      position: absolute;
      left: 50px;
      top: 5px;
      color: red;
    }
    a {
      text-decoration: none;
    }
    .count {
      width: 25px;
      height: 20px;
      position: absolute;
      left: 135px;
      top: 6px;
      border-radius: 11px;
      background: #d93637;
      color: white;
      .span11 {
        position: relative;
        left: 8px;
      }
    }
  }
}
.body {
  width: 100%;
  height: 1000px;
  background-color: #f5f5f5;
  .menu {
    width: 180px;
    height: 115%;
    background-color: white;
    position: absolute;
    left: 180px;
    .indent {
      width: 100%;
      height: 85px;
      //background-color: #d93637;
      position: absolute;
      top: 30px;
      .span4 {
        position: absolute;
        left: 20px;
        font-size: 18px;
        font-weight: 600;
      }
      .span5 {
        position: absolute;
        top: 35px;
        left: 30px;
      }
      .hr1 {
        width: 90%;
        background-color: gainsboro;
        position: relative;
        top: 70px;
        border: 0.1px solid #f4f4f4;
        height: 0px;
      }
    }
    .concern {
      width: 100%;
      height: 85px;
      //background-color: #d93637;
      position: absolute;
      top: 140px;
      .span6 {
        position: absolute;
        left: 20px;
        font-size: 18px;
        font-weight: 600;
      }
      .span7 {
        position: absolute;
        top: 35px;
        left: 30px;
      }
      .hr2 {
        width: 90%;
        background-color: gainsboro;
        position: relative;
        top: 70px;
        border: 0.1px solid #f4f4f4;
        height: 0px;
      }
    }
    .account {
      width: 100%;
      height: 120px;
      //background-color: #d93637;
      position: absolute;
      top: 250px;
      .span8 {
        position: absolute;
        left: 20px;
        font-size: 18px;
        font-weight: 600;
      }
      .span10 {
        position: absolute;
        top: 35px;
        left: 30px;
      }
    }
  }
}
</style>