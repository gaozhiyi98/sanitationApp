<template>
  <div>
    <Header title="关于平台" back></Header>
    <div class="content">这里放智慧环卫综合管理平台简介</div>
  </div>
</template>

<script>
import Header from "../header/header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
</style>