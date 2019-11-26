<template>
  <!-- 物料采购 -->
  <div>
    <Header class="headerBox" title="物料采购" back></Header>
    <div class="list">
      <van-row class="item" v-for="(item, i) in 50" :key="i">
        <van-col span="9">
          <div class="name">蒋志强 辛店项目一部</div>
          <div class="detail">办公用打印纸一盒</div>
        </van-col>
        <van-col span="5">
          <div class="status">待审批</div>
        </van-col>
        <van-col span="10" class="icon">
          <van-row type="flex" justify="space-around" class="btnbox">
            <van-col span="12">
              <van-button class="btn" round plain type="info" @click="goDetail(i)">详情</van-button>
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
import Header from "../../header/header.vue";
export default {
  components: {
    Header
  },
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
    goDetail(id) {
      this.$router.push({ name: "materialsDetail", params: { id } });
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
      color: #f66134;
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