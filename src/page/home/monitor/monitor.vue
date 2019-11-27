<template>
  <!-- 道路监控 -->
  <div class="home">
    <Header title="道路监控" style="z-index: 999" back></Header>

    <!-- 点聚合 -->
    <baidu-map class="map" center="中国石油大学胜利学院" dragging :zoom="13" scroll-wheel-zoom>
      <!-- 控件 -->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
      <bml-marker-clusterer
        :averageCenter="true"
        :opt_anchor="{lng: 118.592815,lat: 37.457724}"
        :styles="cssMap"
      >
        <bm-marker
          v-for="item in positions"
          :key="item.sid"
          :zIndex="8888"
          :position="{lng:item.lng,lat:item.lat}"
          :icon="{url: 'http://118.31.245.183:10500/images000/监控.png', size: {width: 38, height: 30}}"
          clicking
          @click="playerVideo(item)"
        ></bm-marker>
      </bml-marker-clusterer>
    </baidu-map>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/header/header.vue";
import { BmlMarkerClusterer } from "vue-baidu-map";
export default {
  components: {
    Header,
    BmlMarkerClusterer
  },
  data() {
    return {
      //百度地图
      cssMap: [
        {
          url: "http://118.31.245.183:10500/images000/监控2.png",
          size: { width: 62, height: 32 },
          textColor: "#fff",
          padding: "10px"
        }
      ],
      positions: []
    };
  },
  methods: {
    // 获取监控坐标
    getPositions() {
      this.$http.post("RoadInfo/listAllRoadVideos").then(res => {
        this.positions = res.data;
        console.log(res.data);
      });
    }
  },
  created() {
    this.getPositions();
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  transform: translateY(-55px);
  width: 100%;
  height: 100%;
  .map {
    height: 100%;
  }
}
.title {
  text-align: center;
  height: 48px;
  background-color: #569efc;
  line-height: 48px;
  color: #fff;
  font-size: 20px;
}
</style>
