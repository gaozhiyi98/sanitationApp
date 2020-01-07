<template>
  <div>
    <Header title="数据展示" back></Header>
    <div class="content">
      <div class="onebox">
        <div class="title">当日考勤统计</div>
        <div class="sum">
          <div class="num">{{ msg.day.all.number }}</div>
          <div class="text">{{ msg.day.all.state }}</div>
        </div>
        <van-grid class="bgi" :column-num="3" :border="false">
          <van-grid-item class="top" v-for="(item, i) in msg.day.data" :key="i">
            <van-row>
              <div class="littledata">{{ item.number }}</div>
              <div class="littletitle">{{ item.state }}</div>
            </van-row>
          </van-grid-item>
        </van-grid>
      </div>
      <div>
        <div class="title">工作预警</div>
        <div class="bottom" v-for="(item, i) in msg.warning" :key="i">
          <van-row>
            <van-col span="2" style="text-align: center;">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icondata_' + item.colour" />
              </svg>
            </van-col>
            <van-col span="17">{{ item.state }}</van-col>
            <van-col span="5" class="num">{{ item.number }}</van-col>
          </van-row>
        </div>
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
        day: {
          all: {},
          data: []
        },
        warning: {}
      }
    };
  },
  methods: {
    getDay() {
      this.$http.get("check/getDataTotal").then(res => {
        console.log(res.all);
        this.msg.day = res;
      });
      this.$http.get("check/getWarningTotal").then(res => {
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
  background-color: #f5f7fa;
  padding: 5px;
  .title {
    height: 53px;
    line-height: 53px;
    font-size: 18px;
  }
  .sum {
    position: absolute;
    width: 75px;
    height: 75px;
    left: 50%;
    transform: translate(-50%);
    background-image: url("../../../assets/image/data_bg2.png");
    background-size: cover;
    text-align: center;
    .num {
      line-height: 36px;
      font-size: 16px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .text {
      font-size: 12px;
    }
  }
  .bgi {
    margin-top: 30px;
    padding-top: 25px;
    background-image: url("../../../assets/image/data_bg.png");
    background-size: cover;
    border-radius: 8px;
  }
  .top {
    height: 75px;
    width: 160px;
    text-align: center;
    .littledata {
      font-size: 24px;
    }
  }
  .bottom {
    display: inline-block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 1);
    font-size: 16px;
    .num {
      text-align: right;
      padding-right: 15px;
    }
  }
}
</style>