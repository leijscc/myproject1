<template>
  <div class="root">
        <div class="new">
          <el-card class="box-card" shadow="never">
            <span>新品首发</span>
            <el-carousel :interval="4000" type="card" height="400px" >
              <el-carousel-item v-for="item in img" :key="item.id">
                <a :href="item.route"><img :src="item.path"></a>
                <span>{{item.text}}</span>
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      img:[
        {
          id:1,
          path:'https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6e4/49d7fcf8/cr/s/q.jpg',
          route:"http://localhost:8080/#/search0/0/130/苹果手机/0"
        },
        {
          id:2,
          path:'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/182694/25/29896/69244/634915a0E7c04d157/f7f3f5376fd72a44.jpg.avif',
          route:"http://localhost:8080/#/search0/0/130//0"
        },
        {
          id:3,
          path:'https://m.360buyimg.com/babel/jfs/t1/213416/32/22256/61188/634e7d59Edc0da90b/ef24496b73c988d9.jpg',
          route:''
        },
        {
          id:4,
          path:'https://img30.360buyimg.com/babel/s1900x710_jfs/t1/102466/21/32286/124840/634e9000Eb99ca4a7/53958d9a4773c43a.jpg!cc_1900x710.webp',
          route:"http://localhost:8080/#/search0/0/119/燃气灶/0"
        },
        {
          id:5,
          path:'https://m.360buyimg.com/babel/jfs/t1/177029/2/12075/153134/60dc71fdEd39d2c56/b4e24575a44cba0a.jpg',
          route:''
        }, 
        {
          id:6,
          path:'https://img14.360buyimg.com//babel/jfs/t1/128504/39/32448/57725/634fb932E3c910036/9b430ec873b2b489.jpg!q80.webp',
          route:''
        },
      ]
    }
  }

};
</script>

<style lang='less' scoped>

.new {
  width: 90%;
  margin-top: 0px;
  margin-left: 80px;
}
span {
  color: black;
  font-weight: bolder;
  font-size: 25px;
}
.el-carouse{
  margin-top:100px;
}

img{
  width:100%;
  height:100%;
}
.root{
  margin-top:40px;
}
</style>