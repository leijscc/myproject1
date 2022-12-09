<template>
  <div class="root">
    <!--轮播图区域-->
    <div class="block">
      <el-carousel height="374px">
        <el-carousel-item v-for="item in img" :key="item.id">
          <a :href="item.route"><img :src="item.path" /></a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          id: 1,
          path: "https://image5.suning.cn/uimg/cms/img/166599095304361453.png",
          route: "http://localhost:8080/#/search5/0/0/家居/0",
        },
        {
          id: 2,
          path: "https://image1.suning.cn/uimg/cms/img/166687511690446876.jpg",
          route: "http://localhost:8080/#/search4/0/0/母婴/0",
        },
        {
          id: 3,
          path: "https://image2.suning.cn/uimg/cms/img/166636114540238271.jpg",
          route: "http://localhost:8080/#/search0/15/0/家用电器/0",
        },
        {
          id: 4,
          path: "https://image4.suning.cn/uimg/cms/img/166676542441864826.png",
          route: "http://localhost:8080/#/search0/0/138/苹果/0",
        },
        {
          id: 5,
          path: "https://oss.suning.com/adpp/creative_kit/material/picture/20220106-1cc7ad1973a74984988c9b6f9b5d4d27926dad45f8e94a87.jpg",
          route: "http://localhost:8080/#/search0/15/0/家电/0",
        },
        {
          id: 6,
          path: "https://image5.suning.cn/uimg/cms/img/166685090658328035.jpg",
          route: "http://localhost:8080/#/search0/17/0/电脑/0",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>


.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
img {
  width: 100%;
  height: 100%;
}
.el-carousel {
  width: 860px;
  position: relative;
  top:-374px;
  left:252px;
}
</style>