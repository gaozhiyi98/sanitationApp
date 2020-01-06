<template>
  <!-- 质量安全 -->
  <div>
    <Header title="质量安全" back></Header>
    <!-- 列表 -->
    <div class="list">
      <van-row class="item" v-for="item in list" :key="item.sid" @click="goDetail(item.sid)">
        <van-col span="14">
          <div class="name">
            {{ item.time }} {{ item.charge }}
            <span class="job">{{ item.job }}</span>
          </div>
          <div class="detail">{{ item.problemdesc }}</div>
        </van-col>
        <van-col span="10" class="right">
          <div class="icon">
            <van-icon name="ellipsis" />
          </div>
          <div>
            <div v-if="item.result === '未处理'" style="color:red;">{{ item.result }}</div>
            <div v-else style="color:green;">{{ item.result }}</div>
          </div>
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
      .job {
        padding: 5px;
        background: rgba(234, 245, 255, 1);
        border-radius: 15px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(66, 155, 245, 1);
        line-height: 15px;
      }
    }
    .detail {
      font-size: 12px;
      color: #787878;
    }
    .right {
      text-align: right;
      padding-right: 20px;
      .icon {
        font-size: 16px;
        i {
          line-height: 28px;
        }
      }
    }
  }
}
</style>