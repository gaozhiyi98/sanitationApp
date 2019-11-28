<template>
  <!-- 物料采购 -->
  <div>
    <Header class="headerBox" title="物料采购" back></Header>
    <div class="list">
      <van-row class="item" v-for="item in list" :key="item.sid">
        <van-col span="9">
          <div class="name">{{ item.applicantperson }} {{ item.applicantdepart }}</div>
          <div class="detail">{{ item.materielname }}</div>
        </van-col>
        <van-col span="5">
          <div class="status" style="color: #f66134;" v-if="item.applicantstatus === '待审批'">
            <img src="@/assets/img/待审批.png" />
            {{ item.applicantstatus }}
          </div>
          <div class="status" style="color: #4eb14e" v-else-if="item.applicantstatus === '已审批'">
            <img src="@/assets/img/已审批.png" />
            {{ item.applicantstatus }}
          </div>
          <div class="status" style="color: #ffb533" v-else>
            <img src="@/assets/img/驳回.png" />
            {{ item.applicantstatus }}
          </div>
        </van-col>
        <van-col span="10" class="icon">
          <van-row type="flex" justify="space-around" class="btnbox">
            <van-col span="12">
              <van-button class="btn" round plain type="info" @click="goDetail(item.sid)">详情</van-button>
            </van-col>
            <van-col span="12">
              <van-button class="btn" round type="info" @click="process">处理</van-button>
            </van-col>
          </van-row>
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
      this.$http.get("appMateriel/getAllAppMaterielInformation").then(res => {
        console.log(res.data);

        this.list = res.data;
      });
    },
    process() {
      this.$dialog
        .confirm({
          message: "是否同意该申请",
          confirmButtonText: "同意",
          cancelButtonText: "驳回",
          cancelButtonColor: "#f66134",
          closeOnClickOverlay: true
        })
        .then(() => {
          console.log("同意申请");
        })
        .catch(() => {
          console.log("驳回申请");
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
    }
    .detail {
      font-size: 12px;
      color: #787878;
    }
    .status {
      padding-left: 5px;
      font-size: 14px;

      img {
        width: 12px;
        height: 12px;
      }
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