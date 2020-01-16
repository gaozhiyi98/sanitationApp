<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  // docmHeight: number = 0; //默认屏幕高度
  // showHeight: number = 0; //实时屏幕高度
  // hidshow: boolean = true; //显示或者隐藏footer,
  // isResize: boolean = false; //默认屏幕高度是否已获取

  // mount(): void {
  //   window.onresize = () => {
  //     return (() => {
  //       if (!this.isResize) {
  //         // 默认屏幕高度
  //         this.docmHeight = document.documentElement.clientHeight;
  //         this.isResize = true;
  //       }
  //       // 实时屏幕高度
  //       this.showHeight = document.body.clientHeight;
  //     })();
  //   };
  // }

  // @Watch("showHeight")
  // function(): void {
  //   if (this.docmHeight > this.showHeight) {
  //     this.hidshow = false;
  //   } else {
  //     this.hidshow = true;
  //   }
  // }
}
</script>


<style lang="scss">
#app {
  height: 100%;
  font-size: 12px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 55px;
}

.van-grid-item__content {
  background-color: rgba(0, 0, 0, 0) !important;
}

.van-uploader__wrapper {
  height: 100%;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
