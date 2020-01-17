<template>
  <div>
    <Header title="关于平台" back></Header>
    <div class="content" style="text-indent:2em;">
      智慧环卫综合管理平台，是以环卫行业为中心的一款产品。
      <div>平台兼备不同车辆的GPS定位实时查看，当定位车辆超过围栏区域时报警提示。同时，包括车辆的维修保养、保险缴纳、历史轨迹、维修记录、电池更换等记录都可详细的查看或修改，每个车辆的具体详情都可以一一进行展示。同时还具有人事管理，整个公司项目架构一目了然，包括违规操作的相关处理，以及人员考勤都可详细操作及修改。</div>
      <div>平台还兼备采购审批功能，方便领导层审批。多元化的平台，操作简便，同时兼备手机APP操作，方便领导层直观的查看和操作。</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  font-size: 16px;
}
</style>