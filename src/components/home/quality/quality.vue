<template>
  <!-- 质量安全 -->
  <div>
    <Header title="质量安全" back></Header>
    <!-- 列表 -->
    <div class="list">
      <van-row class="item" v-for="(item, i) in 50" :key="i">
        <van-col span="14">
          <div class="name">2019-10-29 王芳 环卫工人</div>
          <div class="detail">垃圾堆积未清扫</div>
        </van-col>
        <van-col span="10" class="icon">
          <van-row type="flex" justify="space-around" class="btnbox">
            <van-col span="12">
              <van-button class="btn" round plain type="info" @click="goDetail(i)">详情</van-button>
            </van-col>
            <van-col span="12">
              <van-button class="btn" round type="info" @click="goDeal(i)">处理</van-button>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Header from "../../header/header";
export default {
  components: {
    Header
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: "qualityDetail", params: { id } });
    },
    goDeal(id) {
      this.$router.push({ name: "qualityDeal", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  .item {
    height: 66px;
    line-height: 32px;
    border-bottom: 1px solid #d2d2d2;
    padding-left: 10px;
    .name {
      font-size: 14px;
      color: #323232;
    }
    .detail {
      font-size: 12px;
      color: #787878;
    }
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