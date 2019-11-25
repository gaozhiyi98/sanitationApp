<template>
  <div>
    <Header title="检测更新" back></Header>
    <div class="content">系统版本：V1.0.0</div>
    <div class="btn">
      <van-button v-if="update" round type="info">立即更新</van-button>
      <van-button v-else round disabled type="info">暂无更新</van-button>
    </div>
  </div>
</template>

<script>
import Header from "../header/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      update: true
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
.btn {
  position: fixed;
  bottom: 25px;
  width: 100%;
  text-align: center;
  button {
    width: 250px;
  }
}
</style>