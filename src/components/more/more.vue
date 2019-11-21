<template>
  <div>
    <Header title="我的"></Header>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../header/header.vue";
import Footer from "../footer/footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      socket: ""
    };
  },
  methods: {
    init() {
      console.log(this.$http.defaults.baseURL);

      const webUrl = "ws://192.168.8.126:8080/" + "websocket/server/" + "zs";
      // 实例化连接
      this.socket = new WebSocket(webUrl);
      // 监听连接
      this.socket.onopen = this.open;
      // 监听信息
      this.socket.onmessage = this.getMessage;
    },
    // 监听连接
    open() {
      console.log("socket连接成功");
    },
    // 监听信息
    getMessage(msg) {
      console.log(msg);
    }
  },
  created() {
    this.init();
  },
  destroyed() {
    this.socket.close();
  }
};
</script>

<style lang="scss" scoped>
</style>