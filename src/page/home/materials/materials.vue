<template>
  <!-- 物料采购 -->
  <div>
    <Header class="headerBox" title="物料采购" back></Header>
    <div class="list">
      <van-row class="item" v-for="item in list" :key="item.sid" @click="goDetail(item.applicantdate)">
        <van-col span="14">
          <div class="name">
            {{ item.applicantperson }}
            <span class="depart">{{ item.applicantdepart }}</span>
          </div>
          <div class="detail">申请时间：{{ item.applicantdate }}</div>
        </van-col>
        <van-col span="10" class="right">
          <div class="icon">
            <van-icon name="ellipsis" />
          </div>
          <div>
            <div
              class="status"
              style="color: #f66134;"
              v-if="item.applicantstatus === '待审批'"
            >{{ item.applicantstatus }}</div>
            <div
              class="status"
              style="color: #4eb14e"
              v-else-if="item.applicantstatus === '已审批'"
            >{{ item.applicantstatus }}</div>
            <div class="status" style="color: #ffb533" v-else>{{ item.applicantstatus }}</div>
          </div>
        </van-col>
      </van-row>
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
      list: []
    };
  },
  methods: {
    getList() {
      this.$http.get("materiel/search").then(res => {
        this.list = res.data;
      });
    },
    goDetail(sid) {
      this.$router.push({ name: "materialsDetail", params: { sid } });
    }
  },
  created() {
    this.getList();
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
    .name {
      font-size: 14px;
      color: #323232;
      .depart {
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
    .status {
      padding-left: 5px;
      font-size: 12px;
      img {
        width: 12px;
        height: 12px;
      }
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