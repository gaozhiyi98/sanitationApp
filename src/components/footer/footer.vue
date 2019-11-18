<template>
  <van-tabbar v-model="active" class="footerBox">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="home-o">巡检平台</van-tabbar-item>
    <van-tabbar-item icon="home-o">通讯录</van-tabbar-item>
    <van-tabbar-item icon="home-o">质量安全</van-tabbar-item>
    <van-tabbar-item icon="home-o">物料采购</van-tabbar-item>
    <van-tabbar-item icon="home-o">更多</van-tabbar-item>
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