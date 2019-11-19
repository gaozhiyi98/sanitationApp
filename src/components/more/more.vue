<template>
  <div>更多</div>
</template>

<script>
export default {
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