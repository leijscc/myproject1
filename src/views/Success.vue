<template>
  <div class="root">
    <!--头部区域-->
    <Header></Header>
    <!--header搜索区-->
    <div class="search">
      <input class="inp" />
      <button class="btn"><p>搜本站</p></button>
    </div>
    <!--成功加入购物车主体区域-->
    <div class="success">
      <span class="iconfont icon-zhengque dui"></span>
      <p class="p1">商品已成功加入购物车!</p>
      <div class="div1">
        <img class="img1" :src="goods[0].goods_img" />
        <p class="p4">{{ goods[0].goods_name }}</p>
        <p class="p2">
          颜色：{{ goods[0].goods_color }}/数量：{{ goods[0].goods_count }}
        </p>
        <p class="p3">尺码：{{ goods[0].goods_size }}</p>
      </div>
      <button class="btn1" @click="back" style="cursor: pointer">查看商品详情</button>
      <button class="btn2" @click="jiesuan" style="cursor: pointer">去购物车结算 ></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue"
export default {
  data() {
    return {
      goods: [
        {
          goods_img: "",
        },
      ],
    };
  },
  components:{
   Header
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    jiesuan() {
      this.$router.push("cart");
    },
    async get() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/success",
      });
      this.goods = res.result;
    },
  },
  created() {
    this.get();
  },
};
</script>

<style lang="less" scoped>


.search {
  position: relative;
  left: 200px;
  width: 1100px;
}
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
}
p {
  position: relative;
  top: -15px;
  left: 5px;
}
.success {
  .p1 {
    color: #71b247;
    width: 350px;
    font-size: 30px;
    position: relative;
    left: 390px;
  }
  .dui {
    color: #71b247;
    font-size: 30px;
    position: relative;
    top: 53px;
    left: 350px;
  }
  .btn1 {
    width: 130px;
    border: none;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    color: #e2231a;
    background-color: #f4f4f4;
    position: relative;
    left: 350px;
    top: -80px;
  }
  .btn1:hover {
    border: 1px solid #e2231a;
  }
  .btn2 {
    width: 130px;
    border: none;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    color: white;
    background-color: #e2231a;
    position: relative;
    left: 380px;
    top: -80px;
  }
  .btn2:hover {
    background-color: #d93637;
  }
  .div1 {
    width: 900px;
    position: relative;
    left: 350px;
    .img1 {
      width: 100px;
      height: 100px;
      position: relative;
      left: 10px;
      top: -20px;
    }
    .p4 {
      position: relative;
      left: 130px;
      top: -130px;
    }
    .p2 {
      width: 300px;
      position: relative;
      left: 129px;
      top: -135px;
      color: #999;
      font-size: 15px;
    }
    .p3 {
      width: 300px;
      position: relative;
      left: 129px;
      top: -140px;
      color: #999;
      font-size: 15px;
    }
  }
}
</style>