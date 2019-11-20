<template>
  <van-tabbar v-model="active" class="footerBox" route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/addressbook" icon="manager">通讯录</van-tabbar-item>
    <van-tabbar-item to="/more" icon="weapp-nav">我的</van-tabbar-item>
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
  background-color: #e6e6e6;
}
</style>