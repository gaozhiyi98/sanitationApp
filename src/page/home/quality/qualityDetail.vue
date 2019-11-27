<template>
  <div>
    <Header title="质量安全详情" back></Header>
    <div class="content">
      <van-cell title-class="title" title="时间：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="姓名：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="岗位：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="问题详情：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="发生地点：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="反馈人：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="处理结果：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="处理备注：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="问题照片：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="处理照片：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header
  },
  methods: {},
  created() {
    console.log(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.content {
  .title {
    font-weight: 700;
  }
}
</style>