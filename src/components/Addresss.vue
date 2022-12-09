<template>
  <div class="root">
    <!--nav区域-->
    <div class="nav">
      <span class="span1">收货地址</span>
    </div>
    <!--收货地址区域-->
    <div class="address">
      <span class="iconfont icon-dizhi span0"></span>
      <span class="span1">收货人：{{ this.form.user_name }}</span>
      <span class="span2">所在地区：{{ this.form.region }}</span>
      <span class="span3">地址：{{ this.form.address }}</span>
      <span class="span4">电话：{{ this.form.phone }}</span>
      <span class="span5">固定电话：{{ this.form.fixed_phone }}</span>
      <span class="span6">电子邮箱：{{ this.form.email }}</span>
      <span class="span7" style="cursor: pointer" @click="dialog = true"
        >编辑</span
      >
    </div>
    <!--dialog区域-->
    <el-dialog title="收货地址" :visible.sync="dialog">
      <el-form :model="form">
        <el-form-item label="收货人" :label-width="formLabelWidth">
          <el-input v-model="form.user_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在地区" :label-width="formLabelWidth">
          <el-input v-model="form.region" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="固定电话" :label-width="formLabelWidth">
          <el-input v-model="form.fixed_phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="define">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      form: {
        user_name: "",
        region: "",
        address: "",
        fixed_phone: "",
        phone: "",
        email: "",
      },
      formLabelWidth: "70px",
    };
  },
  methods: {
    //请求用户已填的地址信息
    async send() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/loadaddress",
        params: {
          user_id: localStorage.getItem("userId"),
        },
      });
      this.form.user_name = res.result[0].user_name;
      this.form.region = res.result[0].region;
      this.form.address = res.result[0].address;
      this.form.fixed_phone = res.result[0].fixed_phone;
      this.form.phone = res.result[0].phone;
      this.form.email = res.result[0].email;
    },
    //修改地址信息
    async rectify() {
      const { data: res } = await axios({
        methods: "get",
        url: "http://127.0.0.1/rectaddress",
        params: {
          user_id: localStorage.getItem("userId"),
          user_name:this.form.user_name,
          region:this.form.region,
          address:this.form.address,
          fixed_phone:this.form.fixed_phone,
          phone:this.form.phone,
          email:this.form.email,      
        },
      });
    },
    define(){
      this.rectify();
      this.dialog = false;
      this.$message.success("修改成功！")
    }
  },
  created() {
    this.send();
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
.address {
  width: 1060px;
  height: 340px;
  border: 1px solid #999;
  background-color: white;
  position: absolute;
  left: 380px;
  top: 280px;
  .span0 {
    position: absolute;
    left: 10px;
    top: 8px;
    font-size: 30px;
    color: #999;
  }
  .span1 {
    position: absolute;
    left: 37px;
    top: 50px;
    color: #999;
  }
  .span2 {
    position: absolute;
    left: 20px;
    top: 80px;
    color: #999;
  }
  .span3 {
    position: absolute;
    left: 52px;
    top: 110px;
    color: #999;
  }
  .span4 {
    position: absolute;
    left: 52px;
    top: 140px;
    color: #999;
  }
  .span5 {
    position: absolute;
    left: 20px;
    top: 170px;
    color: #999;
  }
  .span6 {
    position: absolute;
    left: 20px;
    top: 200px;
    color: #999;
  }
  .span7 {
    position: absolute;
    left: 950px;
    top: 250px;
    color: #005ea7;
  }
  .span7:hover {
    color: #d93637;
  }
}
.el-input {
  width: 80%;
}
.el-dialog {
  max-width: 300px;
}
</style>