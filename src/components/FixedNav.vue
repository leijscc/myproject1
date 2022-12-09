<template>
  <div class="root">
    <div class="nav" @mouseleave="move0">
      <div
        class="channel"
        style="cursor: pointer"
        @mouseenter="move1"
        @click="divert1"
        ref="dom1"
      >
        <span class="span1">频道</span>
        <span class="span2">广场</span>
        <hr class="hr1" ref="hr1" />
      </div>
      <div
        class="starting"
        style="cursor: pointer"
        @mouseenter="move2"
        @click="divert2"
        ref="dom2"
      >
        <span class="span3">新品</span>
        <span class="span4">首发</span>
        <hr class="hr2" ref="hr2" />
      </div>
      <div
        class="suggest"
        style="cursor: pointer"
        @mouseenter="move3"
        @click="divert3"
        ref="dom3"
      >
        <span class="span5">为你</span>
        <span class="span6">推荐</span>
        <hr class="hr3" ref="hr3" />
      </div>
      <div
        class="top"
        style="cursor: pointer"
        @mouseenter="move4"
        @click="divert4"
        ref="dom4"
      >
        <span class="iconfont icon-xiangshangjiantou span7"></span>
        <span class="span8">顶部</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //鼠标移出固定侧边导航栏栏时调用的函数
    move0() {
      this.$refs.dom1.style.color = "black";
      this.$refs.dom1.style.background = "white";
      this.$refs.dom2.style.color = "black";
      this.$refs.dom2.style.background = "white";
      this.$refs.dom3.style.color = "black";
      this.$refs.dom3.style.background = "white";
      this.$refs.dom4.style.color = "black";
      this.$refs.dom4.style.background = "white";
      this.$refs.hr1.style.background = "gainsboro";
      this.$refs.hr2.style.background = "gainsboro";
      this.$refs.hr3.style.background = "gainsboro";
    },
    //鼠标移入固定侧边导航栏栏时调用的4个函数
    move1() {
      this.$refs.dom1.style.color = "white";
      this.$refs.dom1.style.background = "#d93637";
      this.$refs.dom2.style.color = "black";
      this.$refs.dom2.style.background = "white";
      this.$refs.dom3.style.color = "black";
      this.$refs.dom3.style.background = "white";
      this.$refs.dom4.style.color = "black";
      this.$refs.dom4.style.background = "white";
      this.$refs.hr1.style.background = "#d93637";
      this.$refs.hr2.style.background = "gainsboro";
      this.$refs.hr3.style.background = "gainsboro";
    },
    move2() {
      this.$refs.dom2.style.color = "white";
      this.$refs.dom2.style.background = "#d93637";
      this.$refs.dom1.style.color = "black";
      this.$refs.dom1.style.background = "white";
      this.$refs.dom3.style.color = "black";
      this.$refs.dom3.style.background = "white";
      this.$refs.dom4.style.color = "black";
      this.$refs.dom4.style.background = "white";
      this.$refs.hr2.style.background = "#d93637";
      this.$refs.hr1.style.background = "gainsboro";
      this.$refs.hr3.style.background = "gainsboro";
    },
    move3() {
      this.$refs.dom3.style.color = "white";
      this.$refs.dom3.style.background = "#d93637";
      this.$refs.dom2.style.color = "black";
      this.$refs.dom2.style.background = "white";
      this.$refs.dom1.style.color = "black";
      this.$refs.dom1.style.background = "white";
      this.$refs.dom4.style.color = "black";
      this.$refs.dom4.style.background = "white";
      this.$refs.hr3.style.background = "#d93637";
      this.$refs.hr2.style.background = "gainsboro";
      this.$refs.hr1.style.background = "gainsboro";
    },
    move4() {
      this.$refs.dom4.style.color = "white";
      this.$refs.dom4.style.background = "#d93637";
      this.$refs.dom3.style.color = "black";
      this.$refs.dom3.style.background = "white";
      this.$refs.dom2.style.color = "black";
      this.$refs.dom2.style.background = "white";
      this.$refs.dom1.style.color = "black";
      this.$refs.dom1.style.background = "white";
      this.$refs.hr3.style.background = "gainsboro";
    },
    //点击时跳到页面指定位置的4个函数
    divert1() {
      document.documentElement.scrollTop = 666;
      setTimeout(() => {
        this.$refs.dom1.style.color = "white";
      }, 10);
    },
    divert2() {
      document.documentElement.scrollTop = 1250;
      setTimeout(() => {
        this.$refs.dom2.style.color = "white";
      }, 10);
    },
    divert3() {
      document.documentElement.scrollTop = 1800;
      setTimeout(() => {
        this.$refs.dom3.style.color = "white";
      }, 10);
    },
    divert4() {
      document.documentElement.scrollTop = 0;
    },

    scroll() {
      //窗口发生滚动时调用的函数
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 660 && scrollTop <= 1100) {
        this.$refs.dom1.style.color = "#f10215";
      } else {
        this.$refs.dom1.style.color = "black";
      }
      if (scrollTop >= 1100 && scrollTop <= 1658) {
        this.$refs.dom2.style.color = "#f10215";
      } else {
        this.$refs.dom2.style.color = "black";
      }
      if (scrollTop >= 1658) {
        this.$refs.dom3.style.color = "#f10215";
      } else {
        this.$refs.dom3.style.color = "black";
      }
    },
  },
  mounted() {
    //监听窗口滚动
    window.addEventListener("scroll", this.scroll);
  },
};
</script>

<style lang="less" scoped>
.nav {
  width: 80px;
  height: 320px;
  // background-color: red;
  position: fixed;
  top: 200px;
  left: 5px;
  .suggest {
    width: 80px;
    height: 80px;
    background-color: white;
    .span5 {
      position: relative;
      top: 20px;
      left: 23px;
    }
    .span6 {
      position: relative;
      top: 40px;
      left: -9px;
    }
    .hr3 {
      position: relative;
      top: 50px;
      width: 40px;
      background-color: gainsboro;
      border: none;
      height: 1px;
    }
  }
  .starting {
    width: 80px;
    height: 80px;
    background-color: white;
    .span3 {
      position: relative;
      top: 20px;
      left: 23px;
    }
    .span4 {
      position: relative;
      top: 40px;
      left: -9px;
    }
    .hr2 {
      position: relative;
      top: 50px;
      width: 40px;
      background-color: gainsboro;
      border: none;
      height: 1px;
    }
  }
  .channel {
    width: 80px;
    height: 80px;
    background-color: white;
    .span1 {
      position: relative;
      top: 20px;
      left: 23px;
    }
    .span2 {
      position: relative;
      top: 40px;
      left: -9px;
    }
    .hr1 {
      position: relative;
      top: 50px;
      width: 40px;
      background-color: gainsboro;
      border: none;
      height: 1px;
    }
  }
  .top {
    width: 80px;
    height: 80px;
    color: #e1251b;
    background-color: white;
    .span7 {
      position: relative;
      top: 20px;
      left: 30px;
    }
    .span8 {
      position: relative;
      top: 40px;
      left: 7px;
    }
  }
}
</style>