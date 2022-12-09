<template>
  <el-container>
    <el-header style="height: 280px">
      <Header></Header>
      <!--搜索区-->
      <div class="searchBox">
        <!--header搜索区-->
        <SearchBox></SearchBox>
        <!--搜索区下面的文字区-->
        <div class="font">
          <span class="span4"><a href="http://localhost:8080/#/search0/14/0/男鞋/0">男鞋</a></span>
          <span class="span5"><a href="http://localhost:8080/#/search1/0/0/女装/0">女装</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/20/0/玩具/0">玩具</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/118/美的空调/0">美的空调</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/132/oppo/0">oppo</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/148/单反相机/0">单反相机</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/115/Nike/0">Nike</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/169/君乐宝/0">君乐宝</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/140/ROG/0">ROG</a></span>
          <span class="span4"><a href="http://localhost:8080/#/search0/0/130/Apple/0">Apple</a></span>
        </div>
      </div>
      <!--文字区下面的导航区-->
      <div class="nav">
        <div class="nav1">
          <span class="span6"><a href="#">每日爆品</a></span>
          <span class="span6"><a href="#">优品购</a></span>
          <span class="span6"><a href="#">秒杀</a></span>
          <span class="span6"><a href="#">优品家电</a></span>
        </div>
      </div>
    </el-header>
    <el-main>
      <!--分类区域-->
      <Classify></Classify>
      <!--频道广场区域-->
      <GuangChang></GuangChang>
      <!--新品首发区域-->
      <Miao></Miao>
      <!--为你推荐区域-->
      <div class="tuijian">
        <img src="@/assets/tuijian.png" />
      </div>
      <!--为你推荐物品区域-->
      <div class="goods">
        <el-row>
          <el-col :span="4" v-for="item in goods" :key="item.goods_id">
            <a :href="'http://localhost:8080/#/goods' + item.goods_id">
              <el-card :body-style="{ padding: '0px' }" shadow="never">
                <img v-lazy="item.goods_img_1" class="image" />

                <div style="padding: 14px">
                  <span> {{ item.goods_name }}</span>
                  <div class="box2">
                    <span class="price">￥{{ item.goods_price }}</span>
                    <span class="price2">￥{{ item.goods_orangin_price }}</span>
                  </div>

                  <div class="box1">
                    <span class="iconfont icon-dianpu dianpu"></span>
                    <span class="brand"
                      >{{ item.goods_brand_name }}官方旗舰店</span
                    >
                  </div>
                  <hr class="hr11" />
                  <div class="box3">
                    <span class="brand"
                      >月销&nbsp;&nbsp;{{ item.goods_sale }}</span
                    >
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </div>
      <!--侧边固定导航栏-->
      <FixedNav v-if="show1"></FixedNav>
      <!--顶部固定导航栏-->
      <FixedHeader v-if="show2"></FixedHeader>
      <!--footer区域-->
      <Footer></Footer>
    </el-main>
  </el-container>
</template>
<script >
import Header from "@/components/Header.vue";
import SearchBox from "@/components/SearchBox.vue";
import Footer from "@/components/Footer";
import Miao from "@/components/Miao";
import GuangChang from "@/components/GuangChang";
import Classify from "@/components/Classify";
import FixedNav from "@/components/FixedNav";
import FixedHeader from "@/components/FixedHeader";
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
      query: "",
      show1: false,
      show2: false,
    };
  },
  methods: {
    //窗口滚动时调用的函数
    scroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 650) {
        this.show1 = true;
      } else {
        this.show1 = false;
      }
      if (scrollTop >= 1900) {
        this.show2 = true;
      } else {
        this.show2 = false;
      }
    },
  },
  async created() {
    const { data: res } = await axios({
      method: "get",
      url: "http://127.0.0.1/guess",
    });
    this.goods = res.result;
  },
  mounted() {
    //监听窗口滚动
    window.addEventListener("scroll", this.scroll);
  },
  components: {
    Header,
    Footer,
    Miao,
    GuangChang,
    Classify,
    SearchBox,
    FixedNav,
    FixedHeader,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  margin: 0;
}
.el-main {
  background-color: #f4f4f4;
}

.div2 {
  width: 10px;
  height: 20px;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}

.news {
  width: 180px;
  height: 434px;
  // background-color:;
  margin-left: 113px;
  border: 1px solid red;
  margin-top: -14px;
  img {
    width: 180px;
    height: 434px;
  }
}
.tuijian {
  margin-left: 580px;
  margin-top: 50px;
}
.goods {
  margin-left: 80px;
  margin-top: 50px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
  }
}
.el-card {
  width: 90%;
  margin-top: 10px;
  .price {
    color: red;
    margin-top: 10px;
    font-size: 20px;
  }
}
.image {
  width: 80%;
  height: 200px;
  margin-left: 20px;
  margin-top: 10px;
}
.hr11 {
  width: 90%;
  background-color: gainsboro;
  position: relative;
  top: 7px;
  border: 0.1px solid #f4f4f4;
  height: 0px;
}
.box1 {
  position: relative;
  top: 10px;
  left: 10px;

  .dianpu {
    color: red;
  }
  .brand {
    font-size: 10px;
    color: #999;
    position: relative;
    left: 5px;
  }
}
.box2 {
  position: relative;
  top: 5px;
}
.box3 {
  position: relative;
  left: 120px;
  font-size: 10px;
  top: 8px;
  color: #999;
}
.price2 {
  color: #999;
  position: relative;
  left: 10px;
  font-size: 15px;
  text-decoration: line-through;
}
.el-card:hover {
  border: 1px solid red;
}

.font {
  margin-left: 410px;
  margin-top: 5px;
  .span4 {
    margin-left: 20px;
    font-size: 10px;
    color: #999;
    a {
      color: #999;
      text-decoration: none;
    }
  }
  .span5 {
    margin-left: 20px;
    font-size: 10px;
    a {
      color: red;
      text-decoration: none;
    }
  }
  a:hover {
    color: red;
  }
}

.nav {
  width: 100%;
  height: 35px;
  margin-top: 38px;
  margin-bottom: 30px;
  line-height: 30px;
  background-color: #d93637;
  .nav1 {
    margin-left: 220px;
  }
  .span6 {
    margin-left: 100px;
    font-size: 15px;
    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>