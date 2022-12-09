<template>
  <div class="root">
    <!--头部区域-->
    <Header></Header>
    <!--header搜索区-->
    <div class="search">
      <input class="inp" />
      <button class="btn"><p>搜本站</p></button>
    </div>
    <!--成功购买商品区域-->
    <div class="success">
      <span class="iconfont icon-zhengque dui"></span>
      <p class="p1">您已成功购买商品!</p>
      <a href="http://localhost:8080/#/"><p class="p2" style="cursor: pointer">返回首页</p></a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.search {
  position: relative;
  left: 200px;
  width: 1100px;
  .inp {
    width: 35%;
    height: 35px;
    position: relative;
    left: 605px;
    top: 25px;
    border: 2px solid #d93637;
    outline: none;
  }
  .btn {
    width: 80px;
    height: 41px;
    position: relative;
    top: -16px;
    left: 998px;
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

.success {
  position:relative;
  width:500px;
  left:270px;
  .p1 {
    color: #71b247;
    width: 350px;
    font-size: 30px;
    position: relative;
    left: 390px;
  }
  .p2{
    position: relative;
    top:30px;
    left:450px;
    color: #999;
  }
  a{
    text-decoration: none;
  }
  .p2:hover{
    color: #d93637;
  }
  .dui {
    color: #71b247;
    font-size: 30px;
    position: relative;
    top: 68px;
    left: 350px;
  }
}
</style>