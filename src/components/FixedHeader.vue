<template>
  <div class="root">
    <div class="nav">
      <!--搜索框-->
      <div class="search">
        <input class="inp" v-model="query" />
        <button class="btn" style="cursor: pointer" @click="search">
          <p>搜索</p>
        </button>
      </div>
      <!--购物车-->
      <div class="cart" style="cursor: pointer" @click="cart">
        <span class="iconfont icon-gouwuchekong span2"></span>
        <span class="span3">我的购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      token: localStorage.getItem("token") === "",
    };
  },
  methods: {
    //加载购物车页面
    cart() {
      if (this.token === true) {
        this.$router.push("login");
      } else {
        this.$router.push("cart");
      }
    },
    //搜索商品
    search() {
      this.query = localStorage.setItem("query", this.query);
      this.$router.push("/search0/0/0/0/0");
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  width: 110%;
  height: 60px;
  background-color: white;
  border-bottom: 2px solid #d93637;
  position: fixed;
  top: 0;
  left: -10px;
  .search {
    position: relative;
    left: 0px;
    top: -15px;
    width: 1550px;
    .inp {
      width: 32%;
      height: 35px;
      position: relative;
      left: 475px;
      top: 25px;
      border: 2px solid #d93637;
      outline: none;
    }
    .btn {
      width: 80px;
      height: 41px;
      position: relative;
      top: -16px;
      left: 978px;
      background-color: #d93637;
      border-style: none;
      text-align: center;
      color: white;
      font-size: 20px;
      display: flex;
      p {
        position: relative;
        top: -15px;
        left: 5px;
      }
    }
  }
  .cart {
    position: absolute;
    left: 1130px;
    top: 13px;
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
  }
}
</style>