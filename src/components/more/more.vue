<template>
  <div>
    <Header title="我的"></Header>
  </div>
</template>

<script>
import Header from "../header/header.vue";
export default {
  components: {
    Header
  },
  methods: {
    test() {
      this.$http.post("check/getName", { name: 123 }).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.test();
  }
};
</script>

<style lang="scss" scoped>
</style>