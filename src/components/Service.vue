<template>
  <div class="root">
  <div class="d3">
      <div class="xiao">
        <span class="span33"> 售后保障 </span>
      </div>
      <div class="shou1">
        <span class="iconfont icon-dunpaibaowei span44"></span>
        <span class="span55">厂家服务</span>
        <span class="span66"
          >本商品质保周期为3个月质保,在此时间范围内可提交维修申请,具体请以厂家服务为准。</span
        >
      </div>
      <div class="shou2">
        <span class="iconfont icon-dunpaibaowei span44"></span>
        <span class="span55">平台承诺</span>
        <span class="span66"
          >优品汇平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。</span
        >
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          class="span66"
          >注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。</span
        >
        <p class="span66">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
        </p>
      </div>
      <div class="shou3">
        <span class="iconfont icon-dunpaibaowei span44"></span>
        <span class="span55">正品行货</span>
        <span class="span66"
          >优品商城向您保证所售商品均为正品行货，优品汇商品开具机打发票或电子发票。</span
        >
      </div>
      <div class="shou4">
        <span class="iconfont icon-dunpaibaowei span44"></span>
        <span class="span55">无忧退货</span>
        <span class="span66"
          >客户购买商品7日内（含7日，自客户收到商品之日起计算），在保证商品完好的前提下，可无理由退货。（部分商品除外，详情请见各商品细则）。</span
        >
      </div>
      <div class="shou5">
        <span class="span77">权力声明：</span>
        <br />
        <span class="span88"
          >优品汇上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是优品汇重要的经营资源，未经许可，禁止非法转载使用。</span
        >
        <span class="span88"
          >注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</span
        >
      </div>
      <div class="shou6">
        <span class="span77">价格说明：</span>
        <br />
        <h1 class="h11">优品价：</h1>
        <span class="span99"
          >优品价为商品的销售价，是您最终决定是否购买商品的依据。</span
        >
        <br />
        <h1 class="h22">划线价：</h1>
        <span class="span99"
          >商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或其他真实有依据的价格；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</span
        >
        <h1 class="h33">折&nbsp;&nbsp;扣：</h1>
        <span class="span99"
          >如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。</span
        >
        <h1 class="h44">异常说明：</h1>
        <span class="span99"
          >商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
    };
  },
 
  
};
</script>

<style lang="less" scoped>
.d3 {
  width: 70%;
  height: 500px;
  //background-color: #fce4d0;
  position: relative;
  left: 200px;
  top: 600px;

  margin-bottom: 900px;
  .xiao {
    width: 100%;
    height: 40px;
    background-color: #f7f7f7;
    position: relative;
    top: -60px;
    .span33 {
      position: relative;
      top: -296px;
      left: 10px;
      font-size: 20px;
      font-weight: 600;
      color: #666;
    }
  }
  .shou1 {
    position: relative;
    top: -280px;
    left: 30px;
    height: 10px;
    width: 100%;
    .span44 {
      color: red;
      font-size: 35px;
    }
    .span55 {
      position: relative;
      left: 10px;
      top: -5px;
      color: red;
      font-size: 20px;
      font-weight: 600;
    }
    .span66 {
      position: relative;
      left: -70px;
      top: 20px;
      color: #999;
      font-size: 10px;
    }
  }
  .shou2 {
    position: relative;
    top: -170px;
    left: 30px;
    height: 10px;
    width: 100%;
    .span44 {
      color: red;
      font-size: 35px;
    }
    .span55 {
      position: relative;
      left: 10px;
      top: -5px;
      color: red;
      font-size: 20px;
      font-weight: 600;
    }
    .span66 {
      position: relative;
      left: -70px;
      top: 20px;
      color: #999;
      font-size: 10px;
    }
  }
  .shou3 {
    position: relative;
    top: -10px;
    left: 30px;
    height: 10px;
    width: 100%;
    .span44 {
      color: red;
      font-size: 35px;
    }
    .span55 {
      position: relative;
      left: 10px;
      top: -5px;
      color: red;
      font-size: 20px;
      font-weight: 600;
    }
    .span66 {
      position: relative;
      left: -70px;
      top: 20px;
      color: #999;
      font-size: 10px;
    }
  }
  .shou4 {
    position: relative;
    top: 100px;
    left: 30px;
    height: 10px;
    width: 100%;
    .span44 {
      color: red;
      font-size: 35px;
    }
    .span55 {
      position: relative;
      left: 10px;
      top: -5px;
      color: red;
      font-size: 20px;
      font-weight: 600;
    }
    .span66 {
      position: relative;
      left: -70px;
      top: 20px;
      color: #999;
      font-size: 10px;
    }
  }
  .shou5 {
    position: relative;
    top: 200px;
    left: 30px;
    height: 10px;
    width: 100%;
    .span77 {
      color: #d93637;
      font-size: 10px;
      font-weight: 400;
    }
    .span88 {
      font-size: 10px;
      color: #999;
    }
  }
  .shou6 {
    position: relative;
    top: 300px;
    left: 30px;
    height: 10px;
    width: 100%;
  }
  .h11 {
    font-size: 10px;
    color: #666;
  }
  .h22 {
    font-size: 10px;
    margin-left: -3px;
    color: #666;
  }
  .h33 {
    font-size: 10px;
    color: #666;
  }
  .h44 {
    font-size: 10px;
    margin-left: -8px;
    color: #666;
  }
  .span77 {
    color: #d93637;
    font-size: 10px;
    font-weight: 400;
  }
  .span99 {
    font-size: 10px;
    color: #999;
    position: relative;
    left: 50px;
    top: -28px;
  }
}
</style>