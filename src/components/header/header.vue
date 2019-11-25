<template>
  <van-nav-bar
    class="headerBox"
    :title="title"
    :left-arrow="back"
    :right-text="text"
    @click-left="goBack"
    @click-right="clickRight"
  />
</template>

<script>
export default {
  props: ["title", "back", "text"],
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    clickRight(value) {
      this.$emit("clickRight", value);
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
.van-nav-bar__text {
  margin-right: -5px;
  height: 26px;
  line-height: 26px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 15px;
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