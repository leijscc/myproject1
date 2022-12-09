<template>
  <div class="root">
    <div class="search">
      <input class="inp" v-model="query" />
      <button class="btn" @click="search" style="cursor: pointer">
        <p>搜索</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.query = localStorage.setItem("query", this.query);
      this.$router.push("/search0/0/0/0/0");
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  margin-left: -170px;
  .inp {
    width: 35%;
    height: 35px;
    margin-left: 600px;
    margin-top: 25px;
    border: 2px solid#d93637;
    outline: none;
  }
  .btn {
    width: 80px;
    height: 41px;
    margin-top: -41px;
    margin-left: 1198px;
    background-color: #d93637;
    border-style: none;
    text-align: center;
    color: white;
    font-size: 20px;
    display: flex;
    p {
      margin-top: 5px;
      margin-left: 10px;
    }
  }
}
</style>