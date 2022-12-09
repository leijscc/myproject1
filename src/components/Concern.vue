<template>
  <div class="root">
    <!--nav区域-->
    <div class="nav">
      <span class="span1">关注的商品</span>
    </div>
    <!--商品区域-->
    <div class="goods">
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="never"
        v-for="item in goods"
        :key="item.concern_id"
      >
        <a :href="'http://localhost:8080/#/goods' + item.goods_id">
          <img v-lazy="item.goods_img" class="image" />
        </a>
        <div style="padding: 14px">
          <a :href="'http://localhost:8080/#/goods' + item.goods_id"
            ><span class="title"> {{ item.goods_name }}</span></a
          >
          <div class="box1">
            <span class="span2">￥{{ item.goods_price }}</span>
          </div>
          <hr class="hr1" />
          <div class="div1">
            <span
              class="span3"
              style="cursor: pointer"
              @click="addCart(item.concern_id)"
              >加入购物车</span
            >
          </div>
          <span
            class="span4"
            style="cursor: pointer"
            @click="remove(item.concern_id)"
            >取消关注</span
          >
        </div>
      </el-card>
    </div>
    <!--当前页没有数据时显示的区域-->
    <div class="none" v-if="show">
      <span class="span5">暂时没有数据了哦~</span>
    </div>
    <!--分页组件-->
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
      newpage: 1,
      show: false,
    };
  },
  methods: {
    //发送加载收藏页面的请求
    async send(newpage) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadconcern",
        params: {
          user_id: localStorage.getItem("userId"),
          page: newpage,
        },
      });
      this.goods = res.result;
      if (this.goods.length === 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    pageChange(newpage) {
      this.send(newpage);
      this.newpage = newpage;
    },
    //移出收藏
    async remove(concern_id) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/delconcern",
        params: {
          concern_id: concern_id,
          user_id: localStorage.getItem("userId"),
        },
      });
      this.send(this.newpage);
    },
    //加入购物车
    async addCart(id) {
      const good = this.goods.filter((item) => {
        return item.concern_id === id;
      });
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/cart",
        params: {
          goods_id: good[0].goods_id,
          goods_name: good[0].goods_name,
          goods_brand_name: good[0].goods_brand_name,
          goods_price: good[0].goods_price,
          goods_img: good[0].goods_img,
          goods_size: good[0].goods_size,
          goods_color: good[0].goods_color,
          goods_count: good[0].goods_count,
          goods_state: 1,
          user_id: localStorage.getItem("userId"),
        },
      });
      this.remove(id);
      this.$message.success("商品已成功加入购物车！")
    },
  },
  created() {
    this.send(1);
  },
};
</script>

<style lang="less" scoped>
.nav {
  width: 70%;
  height: 60px;
  background-color: white;
  position: absolute;
  left: 380px;
  top: 200px;
  .span1 {
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    color: red;
    left: 20px;
    top: 15px;
  }
}
.goods {
  position: relative;
  left: 300px;
  top: -970px;
  width: 1000px;
  margin-left: 80px;
  margin-top: 50px;
  margin-bottom: 2000px;
  a {
    text-decoration: none;
  }
  .el-card {
    width: 23%;
    height: 350px;
    margin-top: 20px;
    float: left;
    margin-left: 10px;
    .image {
      width: 80%;
      height: 200px;
      margin-left: 20px;
      margin-top: 10px;
    }
    .title {
      position: relative;
      left: 10px;
    }
    .box1 {
      position: relative;
      top: 10px;
      left: 5px;
      .span2 {
        margin-top: 10px;
        font-size: 20px;
        position: relative;
        top: 0px;
        left: 60px;
      }
    }
    .hr1 {
      width: 112%;
      background-color: gainsboro;
      position: relative;
      top: 11px;
      left: -14px;
      border: 0.1px solid #f4f4f4;
      height: 0px;
    }
    .div1 {
      width: 40%;
      height: 32px;
      position: relative;
      top: 3px;
      left: 20px;
      font-size: 15px;
      border-right: 2px solid #f4f4f4;
      .span3 {
        position: relative;
        top: 5px;
        left: -10px;
      }
    }
    .span4 {
      position: relative;
      top: -25px;
      left: 130px;
    }
  }
}
.page {
  position: absolute;
  left: 650px;
  top: 1050px;
}
.span5 {
  position: absolute;
  left: 800px;
  top: 600px;
}

.title:hover {
  color: red;
}
.div1:hover {
  color: red;
}
.span4:hover {
  color: red;
}
a {
  color: black;
}
</style>