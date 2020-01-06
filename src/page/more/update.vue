<template>
  <div>
    <Header title="检测更新" back></Header>
    <div class="content">系统版本：V{{ version }}</div>
    <div class="btn">
      <van-button v-if="update" round type="info" @click="getUpdate">立即更新</van-button>
      <van-button v-else round disabled type="info">暂无更新</van-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      update: true,
      version: "1.0.0"
    };
  },
  methods: {
    detectUpdate() {
      this.$http
        .post("update/updateApk", { versionNumber: this.version })
        .then(res => {
          if (res.status === 1) {
            this.update = true;
          } else if (res.status === 0) {
            this.update = false;
          }
        });
    },
    getUpdate() {
      location.href = this.$http.defaults.baseURL + "H5FAEA568.apk";
    }
  },
  created() {
    this.detectUpdate();
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
.btn {
  position: fixed;
  bottom: 25px;
  width: 100%;
  text-align: center;
  button {
    width: 250px;
  }
}
</style>