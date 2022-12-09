<template>
  <div class="root">
    <!--nav区域-->
    <div class="nav">
      <span class="span1">我的订单</span>
    </div>
    <!--订单展示区-->
    <div class="indent">
      <!--导航区-->
      <div class="navi">
        <span class="span2">下单时间</span>
        <span class="span3">订单详情</span>
        <span class="span4">金额</span>
        <span class="span5">状态</span>
        <span class="span6">操作</span>
      </div>
      <!--订单主体区域-->
      <div class="body" v-for="item in goods" :key="item.id">
        <div class="time">
          <span class="span7">{{ item.goods_time }}</span>
          <span class="span8">{{ item.goods_brand_name }}官方旗舰店</span>
        </div>
        <div class="goods">
          <img :src="item.goods_image" class="image" />
          <span class="span9">{{ item.goods_name }}</span>
          <span class="span10">x{{ item.goods_count }}</span>
          <span class="span11">￥{{ item.goods_money }}</span>
          <span class="span12">已完成</span>
          <span class="span13" style="cursor: pointer" @click="delIndent(item.id)">删除</span>
        </div>
      </div>
    </div>
    <!--当前页没有数据时显示的区域-->
    <div class="none" v-if="show">
      <span class="span13">暂时没有数据了哦~</span>
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
      page: 1,
      show:false,
    };
  },
  methods: {
    //发送获取当前用户的订单请求
    async send(newpage) {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadindent",
        params: {
          user_id: localStorage.getItem("userId"),
          page: newpage,
        },
      });
      this.goods = res.result;
      if(this.goods.length===0){
        this.show=true;
      }
      else{
        this.show=false;
      }
    },
    //监听page变化
    pageChange(newpage) {
      this.send(newpage);
      this.page = newpage;
    },
    //删除订单
    async delIndent(id){
      const {data:res}=await axios({
        methods:"get",
        url:"http://127.0.0.1/delindent",
        params:{
         id:id
        }
      })
      this.send(this.page);
      this.$message.success('成功删除订单！')
    }
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
.indent {
  .navi {
    width: 70%;
    height: 40px;
    position: absolute;
    left: 380px;
    top: 280px;
    background-color: white;
    .span2 {
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .span3 {
      position: absolute;
      left: 300px;
      top: 10px;
    }
    .span4 {
      position: absolute;
      left: 600px;
      top: 10px;
    }
    .span5 {
      position: absolute;
      left: 800px;
      top: 10px;
    }
    .span6 {
      position: absolute;
      left: 1000px;
      top: 10px;
    }
  }
  .body {
    width: 70%;
    height: 130px;
    position: relative;
    left: 380px;
    top: -860px;
    margin-top: 10px;
    background-color: white;
    border: 1px solid #f4f4f4;
    .time {
      width: 100%;
      height: 35px;
      background-color: #f8f8f8;
      .span7 {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 13px;
      }
      .span8 {
        position: absolute;
        top: 10px;
        left: 450px;
        font-size: 13px;
      }
    }
    .goods {
      .image {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 47px;
        left: 10px;
      }
      .span9 {
        position: absolute;
        top: 47px;
        left: 100px;
        font-size: 13px;
      }
      .span10 {
        position: absolute;
        top: 47px;
        left: 400px;
        font-size: 13px;
        color: #999;
      }
      .span11 {
        position: absolute;
        top: 47px;
        left: 600px;
        font-size: 13px;
      }
      .span12 {
        position: absolute;
        top: 47px;
        left: 800px;
        font-size: 13px;
        color: #999;
      }
      .span13 {
        position: absolute;
        top: 47px;
        left: 1005px;
        font-size: 13px;
      }
      .span13:hover {
        color: red;
      }
    }
  }
}
.page {
  position: absolute;
  left: 650px;
  top: 960px;
}
.span13{
  position:absolute;
  left:800px;
  top:600px;
}
</style>