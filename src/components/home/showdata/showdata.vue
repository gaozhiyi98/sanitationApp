<template>
  <div>
    <Header title="数据展示" back></Header>
    <div class="content">
      <div class="onebox">
        <div class="title">当日考勤统计</div>
        <van-grid :column-num="3">
          <van-grid-item class="littlebox" v-for="value in 7" :key="value">
            <van-row style="width:100%">
              <van-col span="6">
                <van-image
                  src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png"
                />
              </van-col>
              <van-col span="18">
                <div class="littledata">50</div>
                <div class="littletitle">应出勤</div>
              </van-col>
            </van-row>
          </van-grid-item>
        </van-grid>
      </div>
      <div>
        <div class="title">工作预警</div>
        <van-grid :column-num="3">
          <van-grid-item class="littlebox" v-for="(value, i) in 7" :key="i">
            <van-row style="width:100%">
              <van-col span="6">
                <div class="leftarr"></div>
              </van-col>
              <van-col span="18">
                <div class="littletitle">应出勤</div>
                <div class="littledata">50</div>
              </van-col>
            </van-row>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../header/header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.content {
  .title {
    height: 53px;
    line-height: 53px;
    padding-left: 15px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
  }
  .leftarr {
    width: 4px;
    height: 41px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #ff5959;
  }
  .littlebox {
    height: 75px;
    .littledata {
      font-size: 24px;
      color: #323232;
    }
  }
}
</style>