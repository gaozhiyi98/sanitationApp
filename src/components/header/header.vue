<template>
  <van-nav-bar class="headerBox" :title="title" :left-arrow="back" @click-left="goBack" />
</template>

<script>
export default {
  props: ["title", "back"],
  methods: {
    goBack() {
      this.$router.go(-1);
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
}
</style>