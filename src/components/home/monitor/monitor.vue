<template>
  <!-- 道路监控 -->
  <div class="home">
    <Header title="道路监控" :back="true"></header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../../header/header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  height: 48px;
  background-color: #569efc;
  line-height: 48px;
  color: #fff;
  font-size: 20px;
}
</style>
