<template>
  <van-tabbar v-model="active" class="footerBox" route>
    <van-tabbar-item to="/">
      <span slot="icon" class="iconfont iconnav_icon_n"></span>首页
    </van-tabbar-item>
    <van-tabbar-item to="/addressbook">
      <span slot="icon" class="iconfont iconnav_icon_n1"></span>通讯录
    </van-tabbar-item>
    <van-tabbar-item to="/more">
      <span slot="icon" class="iconfont iconnav_icon_n2"></span>我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.footerBox {
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  // background-color: #e6e6e6;
  .iconfont {
    font-size: 18px;
  }
}
</style>