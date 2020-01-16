<template>
  <div>
    <van-nav-bar title="智慧环卫综合管理平台" :border="false" class="navbar" />
    <img class="bgi" src="@/assets/image/home_bg.png" />
    <van-grid class="box" :border="false" :column-num="2">
      <!-- <van-grid-item to="/message">
        <img class="navimg" src="@/assets/image/home_ icon1.png" />我的消息
      </van-grid-item> -->
      <van-grid-item to="/showdata">
        <img class="navimg" src="@/assets/image/home_ icon2.png" />数据展示
      </van-grid-item>
      <!-- <van-grid-item to="/monitor">
        <img class="navimg" src="@/assets/image/home_ icon3.png" />道路监控
      </van-grid-item> -->
      <van-grid-item to="/inspection">
        <img class="navimg" src="@/assets/image/home_ icon4.png" />巡检平台
      </van-grid-item>
      <van-grid-item to="/quality">
        <img class="navimg" src="@/assets/image/home_ icon5.png" />质量安全
      </van-grid-item>
      <van-grid-item to="/materials">
        <img class="navimg" src="@/assets/image/home_ icon6.png" />物料采购
      </van-grid-item>
    </van-grid>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
export default {
  components: {
    Footer
  }
};
</script>


<style lang="scss" scoped>
.navbar {
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0, 0);
  text-align: center;
  line-height: 55px;
  font-size: 20px;
}

.van-nav-bar__title {
  color: #fff;
}

.bgi {
  position: relative;
  top: -55px;
  width: 100%;
}

.box {
  position: relative;
  top: -105px;
  font-size: 14px;
  .navimg {
    width: 50px;
    height: 50px;
  }
}
</style>