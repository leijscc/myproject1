<template>
  <div class="root">
    <!--头部区域-->
    <Header></Header>
    <!--header搜索区-->
    <div class="search">
      <input class="inp" v-model="query" />
      <button class="btn" @click="search" style="cursor: pointer">
        <p>搜本站</p>
      </button>
    </div>
    <!--商品主体区域-->
    <!--商品图片展示区域-->
    <div class="bigimg">
      <img v-lazy="goods_img_1" class="img1" id="img1" />
    </div>
    <!--小图片区域-->
    <div class="small">
      <div class="small1">
        <img v-lazy="goods_img_1" @mouseenter="select1" ref="small1" />
      </div>
      <div class="small2">
        <img v-lazy="goods_img_2" @mouseenter="select2" ref="small2" />
      </div>
      <div class="small3">
        <img v-lazy="goods_img_3" @mouseenter="select3" ref="small3" />
      </div>
      <div class="small4">
        <img v-lazy="goods_img_4" @mouseenter="select4" ref="small4" />
      </div>
    </div>

    <!--商品选择区域-->
    <div class="des">
      <div class="title">
        <p class="p30">{{ goods_name }}</p>
        <p class="p90">月销&nbsp;&nbsp;{{ goods_sale }}+</p>
      </div>
      <div class="price">
        <p class="p1">优品价</p>
        <p class="p2">￥</p>
        <p class="p4">{{ goods_price }}</p>
        <a href="#">降价通知</a>
        <br />
        <p class="p3">促&nbsp;&nbsp;&nbsp;销</p>
        <div class="buy">
          <p>多买优惠</p>
        </div>
        <p class="p5">满一件,总价打9折;满3件,总价打8.80折;满5件,总价打8.50折</p>
      </div>
      <div class="send">
        <p class="p6">配送至&nbsp;&nbsp;{{ this.region }}&nbsp;&nbsp;有货</p>
        <p class="p7">支持</p>
        <p class="p8">
          <a href="#">退换货运费险</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#"
            >闪电退款</a
          >
          &nbsp;&nbsp;&nbsp;免运费
        </p>
        <br />
        <p class="p9">{{ goods_brand_name }}</p>
        <p class="p10">
          旗舰店发货, 并提供售后服务.
          现在至明日10:30前完成下单,预计后天23:30前发货
        </p>
      </div>
      <!--商品型号区-->
      <div class="size">
        <h1 class="size1">尺码：</h1>
        <button class="but1" @click="but1" ref="but1" style="cursor: pointer">
          {{ size_1 }}
        </button>
        <button class="but2" @click="but2" ref="but2" style="cursor: pointer">
          {{ size_2 }}
        </button>
        <button class="but3" @click="but3" ref="but3" style="cursor: pointer">
          {{ size_3 }}
        </button>
        <button class="but4" @click="but4" ref="but4" style="cursor: pointer">
          {{ size_4 }}
        </button>
        <h1 class="size2">颜色分类：</h1>
        <button class="but5" @click="but5" ref="but5" style="cursor: pointer">
          {{ color_1 }}
        </button>
        <button class="but6" @click="but6" ref="but6" style="cursor: pointer">
          {{ color_2 }}
        </button>
        <button class="but7" @click="but7" ref="but7" style="cursor: pointer">
          {{ color_3 }}
        </button>
      </div>
      <div class="gou">
        <p class="p10">数量</p>
        <button class="btn1" @click="sub" style="cursor: pointer">-</button>
        <div class="div1">
          <p>{{ count }}</p>
        </div>
        <button class="btn2" @click="jia" style="cursor: pointer">+</button>
        <p class="p11">件</p>
      </div>
      <div class="btns">
        <button class="btn3" @click="buy" style="cursor: pointer">
          立即购买
        </button>
        <button class="btn4" @click="add" style="cursor: pointer">
          加入购物车
        </button>
      </div>
    </div>
    <!--底部商品详情及评论区-->
    <div class="com">
      <div class="nav">
        <div
          class="div11"
          tabindex="1"
          @click="show11"
          ref="dom1"
          style="cursor: pointer"
        >
          <p class="p11">商品介绍</p>
        </div>
        <div
          class="div22"
          tabindex="2"
          @click="show22"
          ref="dom2"
          style="cursor: pointer"
        >
          <p class="p22">规格与包装</p>
        </div>
        <div
          class="div33"
          tabindex="3"
          @click="show33"
          ref="dom3"
          style="cursor: pointer"
        >
          <p class="p33">售后保障</p>
        </div>
        <div
          class="div44"
          tabindex="4"
          @click="show44"
          ref="dom4"
          style="cursor: pointer"
        >
          <p class="p44">商品评价</p>
        </div>
      </div>
    </div>
    <!--nav下每个需要点击后才能展示的div-->
    <div class="d1" v-if="show1">
      <div class="introduce">
        <h1 class="h1">品牌:&nbsp;&nbsp;{{ goods_brand_name }}</h1>
        <h1 class="h2">商品名称:&nbsp;&nbsp;{{ goods_name }}</h1>
        <h1 class="h3">
          店铺:&nbsp;&nbsp;{{ goods_brand_name }}&nbsp;&nbsp;官方旗舰店
        </h1>
        <h1 class="h4">
          尺码:&nbsp;&nbsp;{{ size_1 }}、{{ size_2 }}、{{ size_3 }}、{{
            size_4
          }}
        </h1>
        <h1 class="h5">
          颜色分类:&nbsp;&nbsp;{{ color_1 }}、{{ color_2 }}、{{ color_3 }}
        </h1>
      </div>
      <hr />
      <!-- <div class="img0">
        <img :src="goods_img_0" class="img00" />
      </div> -->
      <div class="img1">
        <img :src="goods_img_1" class="img11" />
      </div>
      <div class="img2">
        <img :src="goods_img_2" class="img22" />
      </div>
      <div class="img3">
        <img :src="goods_img_3" class="img33" />
      </div>
      <div class="img4">
        <img :src="goods_img_4" class="img44" />
      </div>
    </div>
    <div class="d2" v-if="show2">
      <span class="span11">
        {{ goods_name }}
      </span>
      <span class="span22"
        >包装清单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合格证*1
        &nbsp;&nbsp;&nbsp;&nbsp;售后保障卡*1</span
      >
    </div>
    <!--售后区-->
    <Service v-if="show3"></Service>
    <!--评论区-->
    <div class="d4" v-if="show4">
      <div class="comment">
        <span class="comment1"> 商品评价 </span>
      </div>
    </div>
    <!--侧边固定栏区域-->
    <div class="fixed" @mouseleave="move0">
      <div
        class="fixed_cart"
        @mouseenter="move1"
        @click="add"
        ref="cart"
        style="cursor: pointer"
      >
        <span class="iconfont icon-gouwucheman cart"></span>
      </div>
      <div
        class="fixed_top"
        @mouseenter="move2"
        @click="divert"
        ref="top"
        style="cursor: pointer"
      >
        <span class="iconfont icon-xiangshangjiantou top"></span>
      </div>
    </div>
    <!--footer区域-->
    <br />
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Service from "@/components/Service.vue";
import axios from "axios";
//导入格式化时间组件
import moment from "moment";
export default {
  props: ["gid"],
  data() {
    return {
      count: 1,
      radio1: false,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      goods_name: "",
      goods_price: "",
      goods_sale: "",
      goods_brand_name: "",
      goods_img_0: "",
      goods_img_1: "",
      goods_img_2: "",
      goods_img_3: "",
      goods_img_4: "",
      color_1: "",
      color_2: "",
      color_3: "",
      size_1: "",
      size_2: "",
      size_3: "",
      size_4: "",
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      goods_size: "",
      goods_color: "",
      user_id: this.id,
      token: localStorage.getItem("token") === "",
      query: "",
      region: "",
    };
  },
  methods: {
    jia() {
      this.count += 1;
    },
    sub() {
      if (this.count !== 1) {
        this.count -= 1;
      }
    },
    select1() {
      this.$refs.small1.style.border = "2px solid red";
      this.$refs.small2.style.border = "";
      this.$refs.small3.style.border = "";
      this.$refs.small4.style.border = "";
      const img1 = document.getElementById("img1");
      img1.setAttribute("src", this.goods_img_1);
    },
    select2() {
      this.$refs.small2.style.border = "2px solid red";
      this.$refs.small1.style.border = "";
      this.$refs.small3.style.border = "";
      this.$refs.small4.style.border = "";
      const img1 = document.getElementById("img1");
      img1.setAttribute("src", this.goods_img_2);
    },
    select3() {
      this.$refs.small3.style.border = "2px solid red";
      this.$refs.small4.style.border = "";
      this.$refs.small1.style.border = "";
      this.$refs.small2.style.border = "";
      const img1 = document.getElementById("img1");
      img1.setAttribute("src", this.goods_img_3);
    },
    select4() {
      this.$refs.small4.style.border = "2px solid red";
      this.$refs.small1.style.border = "";
      this.$refs.small2.style.border = "";
      this.$refs.small3.style.border = "";
      const img1 = document.getElementById("img1");
      img1.setAttribute("src", this.goods_img_4);
    },
    search() {
      this.query = localStorage.setItem("query", this.query);
      this.$router.push("/search0/0/0/0/0");
    },
    show11() {
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show1 = true;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "white";
        this.$refs.dom1.style.background = "#d93637";
      });
      this.$nextTick(() => {
        this.$refs.dom2.style.color = "black";
        this.$refs.dom2.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom3.style.color = "black";
        this.$refs.dom3.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom4.style.color = "black";
        this.$refs.dom4.style.background = "#f7f7f7";
      });
    },
    start() {
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "white";
        this.$refs.dom1.style.background = "#d93637";
      });
    },
    show22() {
      this.show3 = false;
      this.show4 = false;
      this.show1 = false;
      this.show2 = true;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "black";
        this.$refs.dom1.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom2.style.color = "white";
        this.$refs.dom2.style.background = "#d93637";
      });
      this.$nextTick(() => {
        this.$refs.dom3.style.color = "black";
        this.$refs.dom3.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom4.style.color = "black";
        this.$refs.dom4.style.background = "#f7f7f7";
      });
    },
    show33() {
      this.show2 = false;
      this.show4 = false;
      this.show1 = false;
      this.show3 = true;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "black";
        this.$refs.dom1.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom2.style.color = "black";
        this.$refs.dom2.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom3.style.color = "white";
        this.$refs.dom3.style.background = "#d93637";
      });
      this.$nextTick(() => {
        this.$refs.dom4.style.color = "black";
        this.$refs.dom4.style.background = "#f7f7f7";
      });
    },
    show44() {
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.show1 = false;
      this.$nextTick(() => {
        this.$refs.dom1.style.color = "black";
        this.$refs.dom1.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom2.style.color = "black";
        this.$refs.dom2.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom3.style.color = "black";
        this.$refs.dom3.style.background = "#f7f7f7";
      });
      this.$nextTick(() => {
        this.$refs.dom4.style.color = "white";
        this.$refs.dom4.style.background = "#d93637";
      });
    },
    async send() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/goods",
        params: {
          id: this.gid,
        },
      });
      this.goods_name = res.result[0].goods_name;
      this.goods_price = res.result[0].goods_price;
      this.goods_brand_name = res.result[0].goods_brand_name;
      this.goods_sale = res.result[0].goods_sale;
      this.goods_img_0 = res.result[0].goods_img_0;
      this.goods_img_1 = res.result[0].goods_img_1;
      this.goods_img_2 = res.result[0].goods_img_2;
      this.goods_img_3 = res.result[0].goods_img_3;
      this.goods_img_4 = res.result[0].goods_img_4;
      this.color_1 = res.result[0].color_1;
      this.color_2 = res.result[0].color_2;
      this.color_3 = res.result[0].color_3;
      this.size_1 = res.result[0].size_1;
      this.size_2 = res.result[0].size_2;
      this.size_3 = res.result[0].size_3;
      this.size_4 = res.result[0].size_4;
    },

    async buy() {
      if (this.token === true) {
        this.$router.push("login");
        return;
      }
      if (
        this.checked1 === false &&
        this.checked2 === false &&
        this.checked3 === false &&
        this.checked4 === false
      ) {
        this.$message({
          message: "请选择您要的商品信息",
          center: true,
        });
        return;
      }
      if (
        this.checked5 === false &&
        this.checked6 === false &&
        this.checked7 === false
      ) {
        this.$message({
          message: "请选择您要的商品信息",
          center: true,
        });
        return;
      }
      //将商品加入订单
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/addindent",
        params: {
          user_id: localStorage.getItem("userId"),
          goods_image: this.goods_img_1,
          goods_name: this.goods_name,
          goods_brand_name: this.goods_brand_name,
          goods_count: this.count,
          goods_money: this.count * this.goods_price,
          goods_time: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
      });
      this.$router.push("buy");
    },
    //加入购物车
    add() {
      if (this.token === true) {
        return this.$router.push("login");
      }
      if (
        this.checked1 === false &&
        this.checked2 === false &&
        this.checked3 === false &&
        this.checked4 === false
      ) {
        this.$message({
          message: "请选择您要的商品信息",
          center: true,
        });
        return;
      }
      if (
        this.checked5 === false &&
        this.checked6 === false &&
        this.checked7 === false
      ) {
        this.$message({
          message: "请选择您要的商品信息",
          center: true,
        });
        return;
      }
      this.addCart();
      setTimeout(() => {
        this.$router.push("/success");
      }, 100);
    },
    but1() {
      this.$refs.but1.style.border = "1px solid red";
      this.$refs.but2.style.border = "";
      this.$refs.but3.style.border = "";
      this.$refs.but4.style.border = "";
      this.checked1 = true;
      this.checked2 = false;
      this.checked3 = false;
      this.checked4 = false;
      this.goods_size = this.size_1;
    },
    but2() {
      this.$refs.but1.style.border = "";
      this.$refs.but2.style.border = "1px solid red";
      this.$refs.but3.style.border = "";
      this.$refs.but4.style.border = "";
      this.checked1 = false;
      this.checked2 = true;
      this.checked3 = false;
      this.checked4 = false;
      this.goods_size = this.size_2;
    },
    but3() {
      this.$refs.but1.style.border = "";
      this.$refs.but2.style.border = "";
      this.$refs.but3.style.border = "1px solid red";
      this.$refs.but4.style.border = "";
      this.checked1 = false;
      this.checked2 = false;
      this.checked3 = true;
      this.checked4 = false;
      this.goods_size = this.size_3;
    },
    but4() {
      this.$refs.but1.style.border = "";
      this.$refs.but2.style.border = "";
      this.$refs.but3.style.border = "";
      this.$refs.but4.style.border = "1px solid red";
      this.checked1 = false;
      this.checked2 = false;
      this.checked3 = false;
      this.checked4 = true;
      this.goods_size = this.size_4;
    },
    but5() {
      this.$refs.but5.style.border = "1px solid red";
      this.$refs.but6.style.border = "";
      this.$refs.but7.style.border = "";
      this.checked5 = true;
      this.checked6 = false;
      this.checked7 = false;
      this.goods_color = this.color_1;
    },
    but6() {
      this.$refs.but5.style.border = "";
      this.$refs.but6.style.border = "1px solid red";
      this.$refs.but7.style.border = "";
      this.checked5 = false;
      this.checked6 = true;
      this.checked7 = false;
      this.goods_color = this.color_2;
    },
    but7() {
      this.$refs.but5.style.border = "";
      this.$refs.but6.style.border = "";
      this.$refs.but7.style.border = "1px solid red";
      this.checked5 = false;
      this.checked6 = false;
      this.checked7 = true;
      this.goods_color = this.color_3;
    },
    async addCart() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/cart",
        params: {
          goods_id: this.gid,
          goods_name: this.goods_name,
          goods_brand_name: this.goods_brand_name,
          goods_price: this.goods_price,
          goods_img: this.goods_img_1,
          goods_size: this.goods_size,
          goods_color: this.goods_color,
          goods_count: this.count,
          goods_state: 1,
          user_id: localStorage.getItem("userId"),
        },
      });
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
    //鼠标移出固定导航栏后调用的函数
    move0() {
      this.$refs.cart.style.color = "#999";
      this.$refs.cart.style.background = "white";
      this.$refs.top.style.color = "#999";
      this.$refs.top.style.background = "white";
    },
    //鼠标移入后调用的两个函数
    move1() {
      this.$refs.cart.style.color = "white";
      this.$refs.cart.style.background = "#d93637";
      this.$refs.top.style.color = "#999";
      this.$refs.top.style.background = "white";
    },
    move2() {
      this.$refs.top.style.color = "white";
      this.$refs.top.style.background = "#d93637";
      this.$refs.cart.style.color = "#999";
      this.$refs.cart.style.background = "white";
    },
    //跳转到窗口顶部
    divert() {
      document.documentElement.scrollTop = 0;
    },
  },
  components: {
    Header,
    Footer,
    Service,
  },
  created() {
    this.send();
    this.require();
    this.start();
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.select1();
  },
};
</script>
 
<style lang="less" scoped>
.root {
  background-color: #f4f4f4;
}
.w {
  width: 100%;
  height: 30px;
  background-color: #e3e4e5;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
}
.span1 {
  margin-left: 450px;
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
p {
  position: relative;
  top: -15px;
  left: 5px;
}
.bigimg {
  width: 400px;
  height: 400px;
  float: left;
  border: 1px solid #999;
  position: relative;
  left: 205px;
  top: 25px;
  .img1 {
    width: 100%;
    height: 100%;
  }
  .amplify {
    background-color: red;
    width: 200px;
    height: 200px;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.small {
  //background-color: #b61a03;
  position: relative;
  width: 403px;
  height: 100px;
  top: 450px;
  left: 205px;
  .small1 {
    width: 23%;
    height: 100%;
    // background-color: black;
    position: relative;
    //margin-right: 1px;
    top: 0px;
    img {
      width: 98%;
      height: 98%;
      position: relative;
      top: -400px;
    }
  }
  .small2 {
    width: 23%;
    height: 100%;
    //background-color: aqua;
    position: relative;
    // margin-left: 2px;
    top: -100px;
    left: 101px;
    img {
      width: 100%;
      height: 100%;
      position: relative;
      top: -300px;
    }
  }
  .small3 {
    width: 23%;
    height: 100%;
    //background-color: red;
    position: relative;
    // margin-left: 2px;
    top: -200px;
    left: 202px;
    img {
      width: 100%;
      height: 100%;
      position: relative;
      top: -200px;
    }
  }
  .small4 {
    width: 23%;
    height: 100%;
    //margin-left: 2px;
    //background-color: olivedrab;
    position: relative;
    //float: left;
    top: -300px;
    left: 302px;
    img {
      width: 100%;
      height: 100%;
      position: relative;
      top: -100px;
    }
  }
}

.des {
  width: 700px;
  height: 400px;
  // background-color: #999;
  float: left;
  position: relative;
  left: 400px;
  top: -100px;
  .title {
    width: 600px;
    height: 80px;
    //background-color: aqua;
    position: relative;
    top: -60;
    .p30 {
      position: relative;
      top: 0;
      font-weight: 500;
      font-size: 20px;
    }
  }
  .price {
    width: 80%;
    height: 100px;
    background-color: #f7f7f7;
    margin-top: 10px;
    .p1 {
      display: inline;
      position: relative;
      font-weight: 300;
      top: 5px;
    }
    .p2 {
      display: inline;
      position: relative;
      top: 5px;
      left: 20px;
      color: red;
    }
    .p3 {
      display: inline;
      position: relative;
      font-weight: 300;
      top: 30px;
      left: 5px;
    }
    .p4 {
      display: inline;
      position: relative;
      font-size: 30px;
      top: 5px;
      left: 20px;
      color: red;
    }
    .p5 {
      display: inline;
      position: relative;
      font-size: 13px;
      font-weight: 350;
      top: -15px;
      left: 150px;
    }

    a {
      text-decoration: none;
      font-size: 10px;
      position: relative;
      left: 40px;
      top: 10px;
    }
    .buy {
      border: 1px solid red;
      width: 60px;
      color: red;
      position: relative;
      left: 70px;
      top: 5px;
      height: 25px;
      p {
        position: relative;
        top: -5px;
        font-size: 10px;
      }
    }
  }
  .send {
    width: 100%;
    height: 100px;
    // background-color:bisque;
    .p6 {
      font-weight: 300;
      position: relative;
      left: 5px;
      top: 5px;
      font-size: 13px;
    }
    .p7 {
      display: inline;
      font-weight: 300;
      position: relative;
      top: -29px;
      left: 150px;
      font-size: 13px;
    }
    .p8 {
      display: inline;
      font-weight: 300;
      position: relative;
      top: -29px;
      left: 160px;
      font-size: 10px;
    }
    .p9 {
      display: inline;
      font-weight: 300;
      position: relative;
      top: -27px;
      left: 30px;
      color: red;
      font-size: 10px;
    }
    .p10 {
      display: inline;
      font-weight: 300;
      position: relative;
      top: -27px;
      left: 30px;
      font-size: 10px;
    }
  }
  .gou {
    position: relative;
    top: -10px;
    width: 500px;
    left: 60px;
    .btn1 {
      width: 30px;
      height: 32px;
      font-size: 20px;
      border: 1px solid #999;
      position: relative;
      top: -28px;
    }
    .btn2 {
      width: 30px;
      height: 32px;
      position: relative;
      top: -92px;
      left: 92px;
      border: 1px solid #999;
    }
    .div1 {
      border: 1px solid #999;
      width: 60px;
      height: 30px;
      position: relative;
      left: 30px;
      top: -60px;
      p {
        position: relative;
        top: -12px;
        left: 25px;
      }
    }
    .div2 {
      float: left;
      position: relative;
      top: -28px;
      left: 50px;
    }
    .p10 {
      position: relative;
      top: 13px;
      left: -50px;
    }
    .p11 {
      position: relative;
      top: -135px;
      left: 140px;
      width: 100px;
    }
  }
  .btns {
    position: relative;
    top: -40px;
    .btn3 {
      width: 140px;
      height: 40px;
      position: relative;
      top: -80px;
      background-color: #fce4d0;
      color: rgba(255, 166, 0, 0.669);
      font-size: 20px;
      font-weight: 800;
      border: none;
    }
    .btn4 {
      width: 160px;
      height: 40px;
      position: relative;
      top: -80px;
      left: 20px;
      background-color: #f34100;
      color: white;
      font-size: 20px;
      font-weight: 800;
      border: none;
    }
  }
  .size {
    width: 500px;
    height: 100px;
    // background-color: #b61a03;
    position: relative;
    top: -20px;
    .size1 {
      font-size: 15px;
      font-weight: 300;
    }
    .size2 {
      position: relative;
      top: 0px;
      font-size: 15px;
      font-weight: 300;
    }
    .but1 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 50px;
    }
    .but2 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 60px;
    }
    .but3 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 70px;
    }
    .but4 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 80px;
    }
    .but5 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 80px;
    }
    .but6 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 90px;
    }
    .but7 {
      width: auto;
      height: 30px;
      position: relative;
      top: -35px;
      left: 100px;
    }
  }
}
.com {
  position: relative;
  top: 550px;
  //background-color: #b61a03;
  width: 100%;
  height: 100px;

  .nav {
    width: 70%;
    height: 40px;
    background-color: #f7f7f7;
    position: relative;
    left: 200px;
    border-bottom: 1px solid #d93637;
    .div11 {
      width: 180px;
      height: 100%;
      //background-color: black;

      text-align: center;
      position: relative;
    }
    .div11:hover {
      color: #d93637;
    }
    .div22 {
      width: 180px;
      height: 100%;
      position: relative;
      top: -40px;
      left: 180px;
    }
    .div33 {
      width: 180px;
      height: 100%;
      position: relative;
      top: -80px;
      left: 360px;
    }
    .div44 {
      width: 180px;
      height: 100%;
      position: relative;
      top: -120px;
      left: 540px;
    }
    .p22 {
      height: 100%;
      text-align: center;
      position: relative;
      display: inline;
      top: -350px;
      left: 50px;
    }
    .p11 {
      height: 100%;
      text-align: center;
      position: relative;
      display: inline;
      top: -390px;
      left: 10px;
    }
    .p33 {
      height: 100%;
      text-align: center;
      position: relative;
      display: inline;
      top: -310px;
      left: 50px;
    }
    .p44 {
      height: 100%;
      text-align: center;
      position: relative;
      display: inline;
      top: -270px;
      left: 50px;
    }
  }
}
.d1 {
  width: 70%;
  height: 500px;
  position: relative;
  left: 200px;
  top: 500px;
  margin-bottom: 2300px;
  .introduce {
    width: 100%;
    height: 120px;
    .h1 {
      position: absolute;
      top: 0px;
      left: 100px;
      height: 50px;
      font-size: 15px;
      font-weight: 300;
    }
    .h2 {
      position: absolute;
      top: 40px;
      left: 100px;
      height: 30px;
      font-size: 15px;
      font-weight: 300;
    }
    .h3 {
      position: absolute;
      top: 80px;
      left: 100px;
      height: 30px;
      font-size: 15px;
      font-weight: 300;
    }
    .h4 {
      position: absolute;
      top: 0px;
      left: 600px;
      height: 30px;
      font-size: 15px;
      font-weight: 300;
    }
    .h5 {
      position: absolute;
      top: 40px;
      left: 600px;
      height: 30px;
      font-size: 15px;
      font-weight: 300;
    }
  }
  hr {
    height: 1px;
    border: none;
    border-top: 1px dashed #0066cc;
  }
  .img0 {
    width: 85%;
    height: 600px;
    margin-bottom: 100px;
    .img00 {
      width: 90%;
      height: 300px;
      position: relative;
      left: 300px;
      top: -70px;
    }
  }
  .img1 {
    width: 90%;
    height: 600px;
    margin-bottom: 100px;
    // background-color: #b61a03;
    .img11 {
      width: 75%;
      height: 700px;
      position: relative;
      left: 210px;
      top: -150px;
    }
  }
  .img2 {
    width: 90%;
    height: 600px;
    margin-bottom: 100px;
    //background-color: #b61a03;
    .img22 {
      width: 75%;
      height: 700px;
      position: relative;
      left: 210px;
      top: 20px;
    }
  }
  .img3 {
    width: 90%;
    height: 600px;
    margin-bottom: 100px;
    //background-color: #b61a03;
    .img33 {
      width: 75%;
      height: 700px;
      position: relative;
      left: 210px;
      top: 30px;
    }
  }
  .img4 {
    width: 90%;
    height: 600px;
    margin-bottom: 100px;
    //background-color: #b61a03;
    .img44 {
      width: 75%;
      height: 700px;
      position: relative;
      left: 210px;
      top: 40px;
    }
  }
}
.d2 {
  width: 70%;
  height: 200px;
  //background-color: #fce4d0;
  position: relative;
  left: 200px;
  top: 500px;
  margin-bottom: 200px;

  .span11 {
    position: relative;
    height: 20px;
    width: 200px;
    top: -250px;
    left: 40px;
    font-size: 20px;
    font-weight: 300;
    font-size: 15px;
    font-weight: 400;
  }
  .span22 {
    position: relative;
    height: 20px;
    width: 200px;
    top: -200px;
    left: 40px;
    font-size: 20px;
    font-weight: 300;
    font-size: 15px;
    font-weight: 400;
    color: #999;
  }
}

.d4 {
  .comment {
    width: 70%;
    height: 40px;
    background-color: #f7f7f7;
    position: relative;
    left: 200px;
    top: 540px;
    .comment1 {
      position: relative;
      top: -296px;
      left: 10px;
      font-size: 20px;
      font-weight: 600;
      color: #666;
    }
  }
  margin-bottom: 300px;
}
.p90 {
  font-size: 13px;
  color: #999;
  font-weight: 200;
}
.fixed {
  position: fixed;
  top: 370px;
  left: 1450px;
  width: 50px;
  height: 100px;
  .fixed_cart {
    width: 50px;
    height: 50px;
    color: #999;
    background-color: white;
    .cart {
      position: relative;
      top: 15px;
      left: 15px;
    }
  }
  .fixed_top {
    width: 50px;
    height: 50px;
    margin-top: 2px;
    color: #999;
    background-color: white;
    .top {
      position: relative;
      left: 17px;
      top: 15px;
    }
  }
}
</style>
