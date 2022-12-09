<template>
  <div class="root">
    <img src="@/assets/guangchang.png" />
    <!--广场主题区域-->
    <el-row :gutter="20">
      <el-col :span="6">
        <a href="#"
          ><el-card class="box-card1">
            <h1>优选图书</h1>
            <h2>精选图书 畅享阅读</h2>

            <el-image
              :src="require('@/assets/book.png')"
              class="book"
            ></el-image>
          </el-card>
        </a>
      </el-col>
      <el-col :span="6">
        <a href="http://localhost:8080/#/search0/18/0/优选数码/0">
          <el-card class="box-card2">
            <h1>优选数码</h1>
            <h2>一站式囤数码好货！</h2>
            <el-image
              :src="require('@/assets/camara.png')"
              class="camara"
            ></el-image>
            <el-image
              :src="require('@/assets/phone.png')"
              class="camara1"
            ></el-image>
          </el-card>
        </a>
      </el-col>
      <el-col :span="6">
        <a href="">
        <el-card class="box-card3">
          <span class="title">嗨享美食</span>
          <span class="des">美食好物 应有尽有</span>
          
            <el-image
              :src="require('@/assets/meishi1.png')"
              class="meishi"
            ></el-image>
            <el-image
              :src="require('@/assets/meishi2.png')"
              class="meishi"
            ></el-image>
        </el-card>
        </a>
        <a href="http://localhost:8080/#/search0/15/0/家用电器/0">
        <el-card class="box-card3">
          <span class="title">家用电器</span>
          <span class="des">买电器 上优选</span>
           <el-image
              :src="require('@/assets/binxiang.png')"
              class="bin1"
            ></el-image>
            <el-image
              :src="require('@/assets/bin.png')"
              class="bin2"
            ></el-image>
        </el-card>
        </a>
      </el-col>
      <el-col :span="6">
        <a href="http://localhost:8080/#/search1/0/0/优品服饰/0">
        <el-card class="box-card4">
          <span class="title1">优品服饰</span>
          <span class="des">全家服饰一站购</span>
          <el-image
              :src="require('@/assets/close2.png')"
              class="close1"
            ></el-image>
           <el-image
              :src="require('@/assets/close1.png')"
              class="close"
            ></el-image>
        </el-card>
        </a>
        <a href="http://localhost:8080/#/search5/0/0/优选超市/0">
        <el-card class="box-card3">
          <span class="title">优选超市</span>
          <span class="des">你想要的 都在这里</span>
          <el-image
              :src="require('@/assets/good.png')"
              class="close1"
            ></el-image>
             <el-image
              :src="require('@/assets/good1.png')"
              class="close"
            ></el-image>

        </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.root{
  margin-top: 400px;
}
img {
  margin-left: 600px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.box-card1 {
  margin-left: 80px;
  margin-bottom: 20px;
  width: 90%;
  height: 423px;
  text-align: center;
  color: #999;
  background-color: #e3cec6;
}
.box-card2 {
  margin-left: 40px;
  margin-bottom: 20px;
  width: 90%;
  height: 423px;
  text-align: center;
  background-color: #ebd0dc;
}
.box-card3 {
  margin-left: 5px;
  margin-bottom: 20px;

  width: 100%;
  height: 200px;
}
.box-card4 {
  margin-left: 0px;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  height: 200px;
}
a {
  text-decoration: none;
}
h1 {
  font-size: 30px;
}
.book {
  width: 200px;
  height: 230px;
}
.camara {
  width: 180px;
  height: 180px;
  margin-top: 40px;
  margin-left: -38px;
}
.camara1 {
  width: 120px;
  height: 160px;
  margin-top: 40px;
  margin-left: 0px;
}
.title {
  margin-top: -2000px;
  font-weight: bolder;
  font-size: 25px;
}
.des {
  margin-left: 10px;
  color: #999;
}
.meishi{
  margin-top:20px;
  margin-left:10px;
  width: 140px;
  height:120px;
}
.title1 {
  margin-top: 20px;
  margin-left:-70px;
  font-weight: bolder;
  font-size: 25px;
}
.close{
  width: 100px;
  height:100px;
  margin-bottom:-120px;
  margin-left:30px;
}
.close1{
  width: 100px;
  height:100px;
  margin-left:-210px;
  margin-bottom: -120px;
}
.bin1{
  width: 100px;
  height:120px;
  margin-bottom:-120px;
  margin-left:50px;
}
.bin2{
  width: 100px;
  height:100px;
  margin-bottom:-80px;
  margin-left:160px;

}
</style>