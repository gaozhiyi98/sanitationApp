<template>
  <!-- 质量安全 -->
  <div>
    <Header title="质量安全" back></Header>
    <!-- 列表 -->
    <div class="list">
      <van-row class="item" v-for="item in list" :key="item.sid">
        <van-col span="14">
          <div class="name">{{ item.time }} {{ item.charge }} {{ item.job }}</div>
          <div class="detail">{{ item.problemdesc }}</div>
        </van-col>
        <van-col span="10" class="icon">
          <van-row type="flex" justify="space-around" class="btnbox">
            <van-col span="12">
              <van-button class="btn" round plain type="info" @click="goDetail(item.sid)">详情</van-button>
            </van-col>
            <van-col span="12">
              <van-button
                v-if="item.result === '未处理'"
                class="btn"
                round
                type="info"
                @click="goDeal(item.sid)"
              >处理</van-button>
              <van-button v-else disabled class="btn" round type="info">已处理</van-button>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    // 详情跳转
    goDetail(sid) {
      this.$router.push({ name: "qualityDetail", params: { sid } });
    },
    // 处理跳转
    goDeal(sid) {
      this.$router.push({ name: "qualityDeal", params: { sid } });
    },
    getList() {
      this.$http.get("safeQuality/safeQualityCriteriaQuery").then(res => {
        this.list = res.data;
      });
    }
  },
  created() {
    this.getList();
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
        font-size: 12px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>