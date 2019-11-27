<template>
  <div>
    <Header title="我的消息" back></Header>
    <div class="content">
      <van-row class="box" v-for="(item, i) in 50" :key="i" @click="goDetail(i)">
        <van-col span="4">
          <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />
        </van-col>
        <van-col span="20">
          <van-cell-group>
            <van-cell title="单元格" value="内容" label="描述信息" />
          </van-cell-group>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";

export default {
  components: {
    Header
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: "messageDetail", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .box {
    border-bottom: 1px solid #d2d2d2;
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>