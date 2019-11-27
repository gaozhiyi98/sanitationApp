<template>
  <div>
    <Header title="消息详情" back></Header>
    <van-cell-group>
      <van-cell title="岗位通知" value="2019-11-05" label="发送人：zs" />
    </van-cell-group>
    <div class="content">下雨路面易滑，注意安全</div>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";

export default {
  components: {
    Header
  },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
</style>