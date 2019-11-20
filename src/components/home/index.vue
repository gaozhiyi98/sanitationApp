<template>
  <div>
    <Header title="智慧环卫综合管理平台" :back="false"></Header>
    <van-grid :border="false" :column-num="2" style="border-bottom: 3px solid #ccc;">
      <van-grid-item>
        <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />我的消息
      </van-grid-item>
      <van-grid-item>
        <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />我的巡检
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="4">
      <van-grid-item to="/monitor">
        <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />道路监控
      </van-grid-item>
      <van-grid-item to="/inspection">
        <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />巡检平台
      </van-grid-item>
      <van-grid-item to="/quality">
        <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />质量安全
      </van-grid-item>
      <van-grid-item to="/materials">
        <van-image src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png" />物料采购
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Header from "../header/header.vue";
export default {
  components: {
    Header
  }
};
</script>