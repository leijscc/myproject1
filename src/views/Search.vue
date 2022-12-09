<template>
  <div class="root">
    <!--头部导航栏区域-->
    <Header></Header>
    <!--搜索区域-->
    <input class="search" :placeholder="query" v-model="que" />
    <div class="btn" @click="search1" style="cursor: pointer">
      <p class="p1">搜索</p>
    </div>
    <!--筛选商品区域-->
    <div class="screen">
      <span class="span1">搜索结果：</span>
      <span class="span2">所有与“{{ this.query }}”相关的宝贝</span>
    </div>
    <!--商品主体区域-->
    <div class="div1">
      <div class="body">
        <!--价格、销量筛选区-->
        <div class="price">
          <!--综合排序按钮-->
          <div
            class="comprehensive"
            style="cursor: pointer"
            ref="dom1"
            @click="sort"
          >
            <span class="span3">综合排序</span>
          </div>
          <!--销量排序按钮-->
          <div class="count" style="cursor: pointer" ref="dom2" @click="count">
            <span class="span4">销量</span>
            <span class="iconfont icon-sanjiao1 span6"></span>
          </div>
          <!--价格排序按钮-->
          <div class="pri" style="cursor: pointer" ref="dom3" @click="pri">
            <span class="span5">价格</span>
            <span class="iconfont icon-sanjiao1 span7"></span>
            <span class="iconfont icon-sanjiao2 span8"></span>
          </div>
        </div>
        <!--商品卡片视图区-->
        <div class="goods">
          <el-row :gutter="45">
            <el-col :span="4" v-for="item in goods" :key="item.goods_id">
              <a :href="'http://localhost:8080/#/goods' + item.goods_id">
                <el-card :body-style="{ padding: '0px' }" shadow="never">
                  <img v-lazy="item.goods_img_1" class="image" />
                  <div style="padding: 14px">
                    <span class="title"> {{ item.goods_name }}</span>
                    <div class="box1">
                      <span class="span9">￥{{ item.goods_price }}</span>
                      <span class="span10"
                        >￥{{ item.goods_orangin_price }}</span
                      >
                    </div>

                    <div class="box2">
                      <span class="iconfont icon-dianpu dianpu"></span>
                      <span class="brand"
                        >{{ item.goods_brand_name }}官方旗舰店</span
                      >
                    </div>
                    <hr class="hr1" />
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
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  props: ["id1", "id2", "id3", "name", "status"],
  data() {
    return {
      goods: [],
      query: localStorage.getItem("query"),
      que: "",
      click: 0,
      click1: 0,
    };
  },
  methods: {
    //根据搜索框输入的关键字模糊搜索商品
    async search(state) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/searchgoods",
        params: {
          query: this.query,
          state,
        },
      });
      this.goods = res.result;
    },
    async send(id, status, state) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/classifygoods",
        params: {
          id: id,
          status,
          state,
        },
      });
      this.goods = res.result;
    },
    //综合排序
    sort() {
      this.$refs.dom1.style.background = "#f1f1f1";
      this.$refs.dom2.style.background = "#fff";
      this.$refs.dom3.style.background = "#fff";
      if (this.status != "0") {
        this.search(0);
      } else {
        if (this.id1 !== "0") {
          this.send(this.id1, 1, 0);
          this.query = this.name;
        } else if (this.id2 !== "0") {
          this.query = this.name;
          this.send(this.id2, 2, 0);
        } else {
          this.query = this.name;
          this.send(this.id3, 3, 0);
        }
      }
    },
    //按销量排序
    count() {
      this.$refs.dom1.style.background = "#fff";
      this.$refs.dom2.style.background = "#f1f1f1";
      this.$refs.dom3.style.background = "#fff";
      if (this.status != "0") {
        this.search(1);
      } else {
        if (this.id1 !== "0") {
          this.send(this.id1, 1, 1);
          this.query = this.name;
        } else if (this.id2 !== "0") {
          this.query = this.name;
          this.send(this.id2, 2, 1);
        } else {
          this.query = this.name;
          this.send(this.id3, 3, 1);
        }
      }
    },
    //按价格排序
    pri() {
      this.$refs.dom1.style.background = "#fff";
      this.$refs.dom2.style.background = "#fff";
      this.$refs.dom3.style.background = "#f1f1f1";
      if (this.status != "0") {
        if (this.click % 2 === 0) {
          this.search(2);
          this.click++;
        } else {
          this.search(3);
          this.click++;
        }
      } else {
        if (this.id1 !== "0") {
          if (this.click1 % 2 === 0) {
            this.query = this.name;
            this.send(this.id1, 1, 2);
            this.click1++;
          } else {
            this.send(this.id1, 1, 3);
            this.click1++;
          }
        } else if (this.id2 !== "0") {
          if (this.click1 % 2 === 0) {
            this.query = this.name;
            this.send(this.id2, 2, 2);
            this.click1++;
          } else {
            this.send(this.id2, 2, 3);
            this.click1++;
          }
        } else {
          if (this.click1 % 2 === 0) {
            this.query = this.name;
            this.send(this.id3, 3, 2);
            this.click1++;
          } else {
            this.send(this.id3, 3, 3);
            this.click1++;
          }
        }
      }
    },
    //页面内搜索商品
    search1() {
      this.query = this.que;
      this.$refs.dom1.style.background = "#f1f1f1";
      this.$refs.dom2.style.background = "#fff";
      this.$refs.dom3.style.background = "#fff";
      this.status = "";
      this.search(0);
    },
  },
  created() {
    if (this.id1 !== "0") {
      this.send(this.id1, 1, 0);
      this.query = this.name;
    } else if (this.id2 !== "0") {
      this.query = this.name;
      this.send(this.id2, 2, 0);
    } else if (this.id3 !== "0") {
      this.query = this.name;
      this.send(this.id3, 3, 0);
    } else {
      this.search(0);
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.root {
  background-color: #f4f4f4;
}
.div1 {
  margin-bottom: 2500px;
}
.search {
  position: relative;
  left: 360px;
  top: 50px;
  width: 50%;
  height: 40px;
  outline: none;
  border: 1px solid #d93637;
  padding-left: 17px;
  padding-right: 17px;
  border-radius: 18px;
}
.btn {
  position: relative;
  left: 1071px;
  top: -13px;
  width: 85px;
  height: 42px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  background-color: #d93637;
  .p1 {
    position: relative;
    top: 8px;
    left: 23px;
    font-size: 20px;
    color: white;
  }
}
.screen {
  width: 87%;
  height: 60px;
  position: absolute;
  background-color: #fff;
  left: 90px;
  top: 230px;
  border-radius: 18px;
  .span1 {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 15px;
    color: #666;
  }
  .span2 {
    position: absolute;
    left: 100px;
    top: 20px;
    font-size: 15px;
    color: #666;
  }
}
.body {
  // width: 80%;
  position: absolute;
  left: 160px;
  top: 300px;
  .price {
    width: 1320px;
    height: 40px;
    position: absolute;
    background-color: #fff;
    border-radius: 12px;
    left: -70px;
    top: 5px;
    .comprehensive {
      width: 90px;
      height: 100%;
      position: absolute;
      background-color: #f1f1f1;
      border-bottom-left-radius: 12px;
      border-top-left-radius: 12px;
      .span3 {
        position: absolute;
        top: 9px;
        left: 12px;
        font-size: 15px;
        color: #666;
      }
    }
    .count {
      width: 70px;
      height: 100%;
      position: absolute;
      left: 96px;
      // background-color: black;
      .span4 {
        position: absolute;
        top: 9px;
        left: 12px;
        font-size: 15px;
        color: #666;
      }
      .span6 {
        position: absolute;
        top: 15px;
        left: 50px;
        font-size: 1px;
        color: #666;
      }
    }
    .pri {
      width: 70px;
      height: 100%;
      position: absolute;
      left: 167px;
      //background-color: black;
      .span5 {
        position: absolute;
        top: 9px;
        left: 12px;
        font-size: 15px;
        color: #666;
      }
      .span7 {
        position: absolute;
        top: 20px;
        left: 50px;
        font-size: 1px;
        color: #666;
      }
      .span8 {
        position: absolute;
        top: 10px;
        left: 50px;
        font-size: 1px;
        color: #666;
      }
    }
  }
  .goods {
    position: relative;
    left: -150px;
    margin-left: 80px;
    margin-top: 50px;
    margin-bottom: 2000px;
    a {
      text-decoration: none;
    }
    .el-card {
      width: 120%;
      margin-top: 10px;
      .span9 {
        color: red;
        margin-top: 10px;
        font-size: 20px;
      }
      .span10 {
        color: #999;
        position: relative;
        left: 10px;
        font-size: 15px;
        text-decoration: line-through;
      }
      .hr1 {
        width: 90%;
        background-color: gainsboro;
        position: relative;
        top: 7px;
        border: 0.1px solid #f4f4f4;
        height: 0px;
      }
    }
  }
  .image {
    width: 80%;
    height: 200px;
    margin-left: 20px;
    margin-top: 10px;
  }
  .box1 {
    position: relative;
    top: 10px;
    left: 5px;
  }
  .box2 {
    position: relative;
    top: 10px;
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
  .box3 {
    position: relative;
    left: 110px;
    font-size: 10px;
    top: 8px;
    color: #999;
  }
  .el-card:hover {
    border: 1px solid red;
  }
}
</style>