<template>
  <div id="app">  
    <router-view @user_id="get" :id="user_id"></router-view>
  </div>
</template>
<script>

export default {
   data(){
    return{
      user_id:0,
      query:"",
      goods:[]
    }
   },
   methods:{
    get(val){
      this.user_id=val
    },
   }
    
  }

</script>


<style lang="less">
body,html{
  margin: 0;
  padding:0;

}


 

</style>
