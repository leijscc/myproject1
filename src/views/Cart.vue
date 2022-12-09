<template>
  <div class="root">
    <!--header导航区-->
    <Header></Header>
    <!--header搜索区-->
    <div class="search">
      <input class="inp" v-model="query" />
      <button class="btn" @click="search" style="cursor: pointer">
        <p class="span2">搜本站</p>
      </button>
    </div>
    <!--购物车主体区域-->
    <!--当购物车中没有商品时-->
    <div class="empty" v-if="displayNone">
      <img src="@/assets/cart.png" class="img1" />
      <p class="tip">购物车空空的哦~，去看看心仪的商品吧~</p>
      <a href="http:127.0.0.0/">去购物></a>
    </div>

    <!--当购物车中有商品时-->
    <div class="cart" v-if="displayCart">
      <div class="address">
        <span class="all">全部商品</span>
        <span class="peisong">配送至:&nbsp;&nbsp;{{ this.region }}</span>
      </div>
      <!--商品头部导航区域-->
      <div class="nav">
        <input
          type="checkbox"
          class="inp1"
          :checked="fullSelect"
          @change="full($event)"
        />
        <span class="quan">全选</span>
        <span class="shang">商品</span>
        <span class="dan">单价</span>
        <span class="shu">数量</span>
        <span class="xiao">小计</span>
        <span class="chao">操作</span>
      </div>
      <!--购物车商品区域-->
      <div class="goods" v-for="item in goods" :key="item.cart_id">
        <span class="dian">{{ item.goods_brand_name }}官方旗舰店</span>
        <hr />
        <input
          type="checkbox"
          class="inp2"
          :checked="item.goods_state"
          @change="stateChange($event, item.cart_id)"
        />
        <img :src="item.goods_img" />
        <span class="name"> {{ item.goods_name }}</span>
        <span class="size">尺码：{{ item.goods_size }}</span>
        <span class="color">颜色：{{ item.goods_color }}</span>
        <span class="price"> ￥{{ item.goods_price }}</span>
        <button class="btn1" @click="sub(item.goods_count, item.cart_id)">
          <p class="p1">-</p>
        </button>
        <button class="btn2" @click="add(item.goods_count, item.cart_id)">
          <p class="p2">+</p>
        </button>
        <div class="count">
          <p class="p3">{{ item.goods_count }}</p>
        </div>
        <div class="xiaoji">￥{{ item.goods_count * item.goods_price }}</div>
        <!--删除购物车中的商品-->
        <span class="del" @click="delCart(item.cart_id)" style="cursor: pointer"
          >删除</span
        >
        <!--收藏购物车中的商品-->
        <span
          class="move"
          style="cursor: pointer"
          @click="addConcern(item.cart_id)"
          >加入收藏</span
        >
      </div>
      <!--底部区域-->
      <div class="foot">
        <input
          type="checkbox"
          class="inp3"
          :checked="fullSelect"
          @change="full($event)"
        />
        <span class="quan">全选</span>
        <span class="delall" style="cursor: pointer" @click="delAll"
          >删除选中的商品</span
        >
        <span class="removecart" style="cursor: pointer" @click="removeCart"
          >清理购物车</span
        >
        <span class="already">已选择{{ counts }}件商品</span>
        <div class="all">
          总价:
          <p class="sum">￥{{ sum }}</p>
        </div>
        <button class="compute" style="cursor: pointer" @click="foot">
          去结算
        </button>
      </div>
    </div>
    <!--Footer区域-->
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
//导入格式化时间组件
import moment from "moment";
//导入页面组件
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      radio: "1",
      goods: [],
      checked: "",
      displayCart: "",
      displayNone: "",
      region: "",
      query: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    //加载购物车
    async loadCart() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadcart",
        params: {
          user_id: localStorage.getItem("userId"),
        },
      });
      this.goods = res.result;
      if (res.result.length > 0) {
        this.displayCart = true;
        this.displayNone = false;
        return;
      } else {
        this.displayCart = false;
        this.displayNone = true;
        return;
      }
    },
    //请求用户信息
    async require() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadaddress",
        params: {
          user_id: localStorage.getItem("userId"),
        },
      });
      this.region = res.result[0].region;
    },
    //全选商品
    full(e) {
      if (e.target.checked) {
        this.goods.forEach((item) => (item.goods_state = 1));
      } else {
        this.goods.forEach((item) => (item.goods_state = 0));
      }
      if (e.target.checked) {
        this.fullChange(1);
      } else {
        this.fullChange(0);
      }
    },

    //改变所有商品全选状态(向服务器提交数据)
    async fullChange(e) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/fullchg",
        params: {
          goods_state: e,
          user_id: localStorage.getItem("userId"),
        },
      });
    },

    youpin() {},
    vip() {},
    //搜索商品
    search() {
      this.query = localStorage.setItem("query", this.query);
      this.$router.push("/search0/0/0/0/0");
    },
    //改变商品状态
    async change(cart_id, goods_state) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/statechg",
        params: {
          cart_id: cart_id,
          goods_state: goods_state,
        },
      });
    },

    stateChange(e, cart_id) {
      this.goods.some((item) => {
        if (item.cart_id === cart_id) {
          item.goods_state = e.target.checked;
          return true;
        }
      });
      if (e.target.checked) {
        this.change(cart_id, 1);
      } else {
        this.change(cart_id, 0);
      }
    },
    //商品数量增加1
    async add(count, Id) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/countchg",
        params: {
          goods_count: count + 1,
          cart_id: Id,
        },
      });
      this.loadCart();
    },
    //商品数量减少1
    async sub(count, Id) {
      if (count === 1) {
        return;
      }
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/countchg",
        params: {
          goods_count: count - 1,
          cart_id: Id,
        },
      });
      this.loadCart();
    },
    //删除商品
    async delCart(Id, status) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/delcart",
        params: {
          cart_id: Id,
        },
      });
      this.loadCart();
      if (status === 1) {
        this.$message({
          message: "商品已加入收藏夹！",
          type: "success",
        });
      } else {
        this.$message({
          message: "删除商品成功！",
          type: "success",
        });
      }
    },
    //删除选中的商品
    async delAll() {
      const len = this.goods.filter((item) => item.goods_state).length;
      if (len === 0) {
        this.$message.error("至少选择一件商品！");
      } else {
        const { data: res } = await axios({
          methods: "get",
          url: "http://127.0.0.1/delall",
          params: {
            user_id: localStorage.getItem("userId"),
          },
        });
        this.loadCart();
      }
    },
    //清理购物车
    async removeCart() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/removeCart",
        params: {
          user_id: localStorage.getItem("userId"),
        },
      });
      this.loadCart();
      document.documentElement.scrollTop = 0;
      this.$message.success("成功清理购物车！");
    },
    //商品结算
    foot() {
      const good = this.goods.filter((item) => item.goods_state);
      good.forEach(async function (item) {
        const { data: res } = await axios({
          methods: "get",
          url: "http://127.0.0.1/addindent",
          params: {
            user_id: localStorage.getItem("userId"),
            goods_image: item.goods_img,
            goods_name: item.goods_name,
            goods_brand_name: item.goods_brand_name,
            goods_count: item.goods_count,
            goods_money: item.goods_count * item.goods_price,
            goods_time: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        });
      });
      this.$router.push("buy");
    },
    //加入收藏
    async addConcern(val) {
      const good = this.goods.filter((item) => {
        return item.cart_id === val;
      });
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/addconcern",
        params: {
          user_id: localStorage.getItem("userId"),
          goods_id: good[0].goods_id,
          goods_image: good[0].goods_img,
          goods_name: good[0].goods_name,
          goods_brand_name: good[0].goods_brand_name,
          goods_price: good[0].goods_price,
          goods_size: good[0].goods_size,
          goods_color: good[0].goods_color,
          goods_count: good[0].goods_count,
          goods_state: 1,
        },
      });
      this.delCart(good[0].cart_id, 1);
    },
  },
  //计算属性
  computed: {
    //动态计算出全选的状态是true还是false
    fullSelect() {
      return this.goods.every((item) => item.goods_state);
    },
    counts() {
      return this.goods
        .filter((item) => item.goods_state)
        .reduce((total, item) => (total += item.goods_count), 0);
    },
    sum() {
      return this.goods
        .filter((item) => item.goods_state)
        .reduce(
          (total, item) => (total += item.goods_count * item.goods_price),
          0
        );
    },
  },
  created() {
    this.loadCart();
    this.require();
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style lang="less" scoped>
.w {
  width: 100%;
  height: 30px;
  background-color: #e3e4e5;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
}
.span1 {
  position: relative;
  left: -300px;
  a {
    color: #999;
  }
}
.span2 {
  position: relative;
  top: -15px;
}
.span3 {
  position: relative;
  left: 300px;
  margin-left: 10px;
  color: #999;
  a {
    color: #999;
  }
}
a {
  text-decoration: none;
}
.span1:hover {
  color: red;
}
a:hover {
  color: red;
}
.span4 {
  margin: 0;
  position: relative;
  left: 50px;
}
img {
  width: 100%;
  height: 80px;
}
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
.address {
  width: 80%;
  height: 30px;
  //background-color: #999;
  position: relative;
  left: 180px;
  top: 50px;
  .all {
    font-size: 20px;
    font-weight: 900;
    color: #d93637;
  }
  .peisong {
    position: relative;
    left: 960px;
    font-size: 15px;
  }
}
.nav {
  width: 80%;
  height: 40px;
  margin-top: 10px;
  background-color: #f7f7f7;
  position: relative;
  left: 180px;
  top: 50px;
  .inp1 {
    width: 15px;
    position: relative;
    top: 12px;
    left: 5px;
  }
  .quan {
    font-size: 15px;
    position: relative;
    left: 8px;
    top: 10px;
  }
  .shang {
    font-size: 15px;
    position: relative;
    top: 10px;
    left: 80px;
  }
  .dan {
    font-size: 15px;
    position: relative;
    left: 650px;
    top: 10px;
  }
  .shu {
    font-size: 15px;
    position: relative;
    left: 780px;
    top: 10px;
  }
  .xiao {
    font-size: 15px;
    position: relative;
    left: 900px;
    top: 10px;
  }
  .chao {
    font-size: 15px;
    position: relative;
    left: 950px;
    top: 10px;
  }
}
.goods {
  width: 80%;
  height: 200px;
  // background-color: #f7f7f7;
  position: relative;
  top: 70px;
  left: 180px;
  border: 1px solid #f7f7f7;
  margin-bottom: 10px;
  .dian {
    position: relative;
    left: 50px;
    top: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #999;
  }
  hr {
    width: 96%;
    border: 0.1px solid #e3e4e5;
    position: relative;
    left: 25px;
    top: 5px;
  }
  .inp2 {
    position: absolute;
    top: 8px;
    left: 12px;
  }
  img {
    width: 120px;
    height: 120px;
    position: relative;
    left: 30px;
    top: 15px;
  }
  .name {
    position: absolute;
    left: 190px;
    top: 50px;
    font-size: 14px;
  }
  .size {
    position: absolute;
    left: 190px;
    top: 80px;
    font-size: 13px;
  }
  .color {
    position: absolute;
    left: 190px;
    top: 110px;
    font-size: 13px;
  }
  .price {
    position: absolute;
    left: 723px;
    top: 50px;
  }
  .btn1 {
    width: 15px;
    height: 20px;
    font-size: 20px;
    text-align: center;
    border: 1px solid #999;
    position: relative;
    top: -95px;
    left: 738px;
    .p1 {
      position: absolute;
      left: 3px;
      top: -16px;
      font-size: 15px;
    }
  }
  .btn2 {
    width: 15px;
    height: 20px;
    position: relative;
    top: -95px;
    left: 798px;
    border: 1px solid #999;
    .p2 {
      position: absolute;
      left: 2px;
      top: -15px;
      font-size: 15px;
    }
  }
  .count {
    height: 18px;
    width: 60px;
    border: 1px solid #999;
    position: relative;
    left: 872px;
    top: -115px;
    .p3 {
      position: absolute;
      top: -18px;
      left: 25px;
    }
  }
  .del {
    position: relative;
    left: 1125px;
    top: -132px;
    font-size: 15px;
    color: #666;
  }
  .del:hover {
    color: red;
  }
  .move {
    position: relative;
    left: 1096px;
    top: -105px;
    font-size: 15px;
    color: #666;
  }
  .move:hover {
    color: red;
  }
  .xiaoji {
    position: absolute;
    left: 1030px;
    top: 55px;
  }
}
.foot {
  width: 80%;
  height: 50px;
  background-color: #f7f7f7;
  position: relative;
  top: 100px;
  left: 180px;
  margin-bottom: 400px;
  .inp3 {
    position: relative;
    top: 17px;
    left: 5px;
  }
  .quan {
    position: relative;
    top: 15px;
    left: 8px;
  }
  .delall {
    position: relative;
    top: 15px;
    left: 50px;
    font-size: 13px;
    color: #999;
  }
  .delall:hover {
    color: #d93637;
  }
  .removecart {
    position: relative;
    top: 15px;
    left: 100px;
    font-size: 13px;
    color: #999;
  }
  .removecart:hover {
    color: #d93637;
  }
  .already {
    position: relative;
    top: 15px;
    left: 600px;
    font-size: 13px;
    color: #999;
  }
  .all {
    position: relative;
    top: 0px;
    left: 950px;
    font-size: 13px;
    color: #999;
    width: 50px;
    .sum {
      position: relative;
      top: -43px;
      left: 40px;
      font-size: 20px;
      color: red;
      width: 50px;
    }
  }
  .compute {
    width: 100px;
    height: 48px;
    position: relative;
    background-color: #d93637;
    border: none;
    left: 1113px;
    top: -104px;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
}

.empty {
  margin-bottom: 400px;
  .img1 {
    width: 80px;
    position: relative;
    top: 170px;
    left: 520px;
  }
  .tip {
    position: relative;
    top: 90px;
    width: 300px;
    left: 630px;
  }
  a {
    text-decoration: none;
    color: #d93637;
    position: relative;
    top: 80px;
    left: 630px;
  }
}
</style>