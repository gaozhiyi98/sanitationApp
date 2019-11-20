<template>
  <!-- 物料采购 -->
  <div>
    <Header title="物料采购" :back="true"></Header>
    <div class="navtitle">
      物料采购：
      <van-button class="btn new" type="info">新建采购申请</van-button>
      <van-uploader :after-read="addfile" capture="camera" />
    </div>
    <van-row type="flex" justify="space-around" class="userlist" v-for="(item, i) in 50" :key="i">
      <van-col span="2">
        <van-icon name="user-o" />
      </van-col>
      <van-col span="14" class="user">商霞:4K投影仪/1个/300单价/300总价</van-col>
      <van-col span="10">
        <van-button class="btn" type="info" style="margin-right:5px;">详情</van-button>
        <van-button class="btn" type="info">审批</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Header from "../../header/header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {
    addfile(file) {
      this.$http.post("check/uploadImage", { file: file.content }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.navtitle {
  padding-top: 5px;
  padding-left: 5px;
  position: relative;
  .new {
    position: absolute;
    right: 22px;
    width: 100px;
    height: 25px;
    line-height: 25px;
    padding: 0;
  }
}

.userlist {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ebedf0;
  text-align: center;
  .user {
    font-size: 12px;
  }
  .btn {
    width: 48px;
    height: 22px;
    font-size: 14px;
    line-height: 14px;
    padding: 0;
    box-shadow: 0px 8px 4px #ccc;
  }
}
</style>