<template>
  <div>
    <van-tabs v-model="active" color="#5677FC" swipeable>
      <van-tab title="违规处理">
        <vueSeamlessScroll :data="images" :class-option="defaultOption" class="seamless-warp">
          <ul class="item">
            <li v-for="(item, index) in images" :key="index">
              <img :src="item" alt srcset />
            </li>
          </ul>
        </vueSeamlessScroll>
      </van-tab>
      <van-tab title="道路监控">
        <div>道路监控</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
      images: []
    };
  },
  methods: {
    getSwipe() {
      this.$http.get("check/picture").then(res => {
        console.log(res);
        this.images = res.data;
      });
    }
  },
  computed: {
    // 公告滚动自定义
    defaultOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 3, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  created() {
    this.getSwipe();
  }
};
</script>

<style lang="scss" scoped>
.seamless-warp {
  overflow: hidden;
  width: 100%;
  .item {
    display: flex;
    height: 150px;
    width: 100%;
    img {
      height: 100%;
    }
  }
}
</style>