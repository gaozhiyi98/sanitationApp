<template>
  <div>
    <div class="user">
      <van-image class="head" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="name">{{ this.usermsg.param2 }}</div>
      <div class="tel">{{ this.usermsg.username }}</div>
    </div>
    <div class="list">
      <van-row class="box">
        <van-col span="3">
          <van-image
            class="img"
            src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png"
          />
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="关于平台" is-link to="about" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="box">
        <van-col span="3">
          <van-image
            class="img"
            src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png"
          />
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="检测更新" is-link to="update" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="box">
        <van-col span="3">
          <van-image
            class="img"
            src="http://118.31.245.183:10555/app/d095f2ce4b631bfaa3e08b1f5bf5a7a.png"
          />
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="清理缓存" is-link />
          </van-cell-group>
        </van-col>
      </van-row>
    </div>
    <div class="btn">
      <van-button round type="danger" @click="signOut">退出登录</van-button>
    </div>
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
      socket: "",
      usermsg: ""
    };
  },
  methods: {
    signOut() {
      localStorage.removeItem("usermsg");
      this.$toast.success({
        message: "退出成功",
        duration: 1000
      });
      setTimeout(() => {
        this.$router.push({ name: "login" });
      }, 1000);
    }
  },
  created() {
    this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
    console.log(this.usermsg);
  }
};
</script>

<style lang="scss" scoped>
.user {
  position: absolute;
  top: 0;
  padding: 30px 0;
  width: 100%;
  text-align: center;
  background-color: #429af0;
  color: #fff;
  .head {
    width: 100px;
    height: 100px;
    border-radius: 10000px;
  }
  .name {
    font-size: 18px;
    padding: 5px 0;
  }
  .tel {
    font-size: 14px;
    padding: 5px 0;
  }
}

.list {
  position: absolute;
  top: 227px;
  width: 100%;
  .img {
    height: 41px;
  }
}

.btn {
  position: fixed;
  bottom: 60px;
  width: 100%;
  text-align: center;
  button {
    width: 250px;
  }
}
</style>