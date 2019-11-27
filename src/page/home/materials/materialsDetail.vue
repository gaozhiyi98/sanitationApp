<template>
  <div>
    <Header title="采购详情" back></Header>
    <div class="content">
      <van-cell title-class="title" title="申请人：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="申请部门：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="物料名称：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="单位：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="单价：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="数量：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="金额：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="审批人：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="审批状态：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="采购状态：">
        <van-icon slot="default">
          <van-icon name="location" />蒋志强
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="备注：">
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