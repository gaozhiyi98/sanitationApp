<template>
  <div>
    <Header title="智慧环卫综合管理平台" :back="false"></Header>
    <van-grid :border="false" :column-num="2" class="content">
      <van-grid-item to="/message">
        <img class="navimg" src="@/assets/img/我的消息.png" />我的消息
      </van-grid-item>
      <van-grid-item to="/showdata">
        <img class="navimg" src="@/assets/img/数据展示.png" />数据展示
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="4">
      <van-grid-item to="/monitor">
        <img class="contentimg" src="@/assets/img/道路监控.png" />道路监控
      </van-grid-item>
      <van-grid-item to="/inspection">
        <img class="contentimg" src="@/assets/img/巡检平台.png" />巡检平台
      </van-grid-item>
      <van-grid-item to="/quality">
        <img class="contentimg" src="@/assets/img/质量安全.png" />质量安全
      </van-grid-item>
      <van-grid-item to="/materials">
        <img class="contentimg" src="@/assets/img/物料采购.png" />物料采购
      </van-grid-item>
    </van-grid>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../header/header.vue";
import Footer from "../../footer/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style lang="scss" scoped>
.content {
  border-bottom: 3px solid #d2d2d2;
}
.navimg {
  width: 58px;
  height: 58px;
}
.contentimg {
  width: 37px;
  height: 33px;
}
</style>