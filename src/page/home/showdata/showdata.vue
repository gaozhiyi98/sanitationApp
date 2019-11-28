<template>
  <div>
    <Header title="数据展示" back></Header>
    <div class="content">
      <div class="onebox">
        <div class="title">当日考勤统计</div>
        <van-grid :column-num="3">
          <van-grid-item class="littlebox" v-for="(item, i) in msg.day" :key="i">
            <van-row style="width:100%">
              <van-col span="6" class="img">
                <van-image :src="item.pictureUrl" />
              </van-col>
              <van-col span="18" class="text">
                <div class="littledata">{{ item.number }}</div>
                <div class="littletitle">{{ item.state }}</div>
              </van-col>
            </van-row>
          </van-grid-item>
        </van-grid>
      </div>
      <div>
        <div class="title">工作预警</div>
        <van-grid :column-num="3">
          <van-grid-item class="littlebox" v-for="(item, i) in msg.warning" :key="i">
            <van-row style="width:100%">
              <van-col span="6">
                <div class="leftarr" :style="{'background-color': item.colour}"></div>
              </van-col>
              <van-col span="18">
                <div class="littletitle">{{ item.state }}</div>
                <div class="littledata">{{ item.number }}</div>
              </van-col>
            </van-row>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      msg: {
        day: {},
        warning: {}
      }
    };
  },
  methods: {
    getDay() {
      this.$http.get("check/getDataTotal").then(res => {
        console.log(res.data);
        this.msg.day = res.data;
      });
      this.$http.get("check/getWarningTotal").then(res => {
        console.log(res.data);
        this.msg.warning = res.data;
      });
    }
  },
  created() {
    this.getDay();
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
  }
  .littlebox {
    height: 75px;
    .littledata {
      font-size: 24px;
      color: #323232;
    }
    .img {
      margin-top: 5px;
    }
    .text {
      padding-left: 10px;
    }
  }
}
</style>