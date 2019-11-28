<template>
  <div>
    <Header title="消息详情" back></Header>
    <van-cell-group>
      <van-cell :title="msg.type" :value="msg.time" />
    </van-cell-group>
    <div class="content">{{ msg.message }}</div>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      msg: {}
    };
  },
  methods: {
    getDetail() {
      this.$http
        .post("systemAdvice/getSystemAdviceBySid", {
          sid: this.$route.params.id
        })
        .then(res => {
          this.msg = res.data;
        });
    }
  },
  created() {
    this.getDetail();
    console.log(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
</style>