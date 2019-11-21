<template>
  <!-- 物料采购 -->
  <div>
    <van-nav-bar class="headerBox" title="物料采购" left-arrow @click-left="goBack">
      <van-button class="btn" type="info" slot="right">采购申请</van-button>
    </van-nav-bar>
    <div class="list">
      <van-row class="item" style v-for="(item, i) in 50" :key="i">
        <van-col span="9">
          <div style="font-size:14px;color:#323232">蒋志强 辛店项目一部</div>
          <div style="font-size:12px;color:#787878">办公用打印纸一盒</div>
        </van-col>
        <van-col span="5">
          <div style="font-size:14px;color:#f66134">待审批</div>
        </van-col>
        <van-col span="10" class="icon">
          <van-row type="flex" justify="space-around" class="btnbox">
            <van-col span="12">
              <van-button class="btn" round plain type="info">详情</van-button>
            </van-col>
            <van-col span="12">
              <van-button class="btn" round type="info">处理</van-button>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ""
    };
  },
  methods: {
    addfile(file) {
      this.img = file.content;
      this.$http.post("check/uploadImage", { file: file.content }).then(res => {
        console.log(res);
      });
      console.log("-----");

      console.log(this.img);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
.headerBox {
  z-index: 99999;
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #429af0;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  .btn {
    height: 26px;
    line-height: 26px;
    background-color: #429af0;
    border: 1px solid #fff;
    border-radius: 20px;
    font-size: 12px;
    color: #fff;
  }
}

.list {
  width: 100%;
  .item {
    height: 66px;
    line-height: 32px;
    border-bottom: 1px solid #d2d2d2;
    padding-left: 10px;
    .btnbox {
      text-align: center;
      margin-top: 20px;
      .btn {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>