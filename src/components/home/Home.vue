<template>
  <div class="home">
    <van-swipe :autoplay="3000" style="height: 144px;">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="height: 100%;width: 100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="title">分布地图</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
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
  created() {
    this.getSwipe();
  },
  name: "home",
  components: {
    // HelloWorld
  }
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
