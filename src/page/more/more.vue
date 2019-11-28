<template>
  <div>
    <div class="user">
      <img class="head" src="@/assets/img/默认头像.png" />
      <div class="name">{{ this.usermsg.param2 }}</div>
      <div class="tel">{{ this.usermsg.username }}</div>
    </div>
    <div class="list">
      <van-row class="box">
        <van-col style="text-align: center;" span="3">
          <img class="img" src="@/assets/img/关于平台.png" />
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="关于平台" is-link to="about" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="box">
        <van-col style="text-align: center;" span="3">
          <img class="img" src="@/assets/img/检测更新.png" />
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="检测更新" is-link to="update" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="box" @click="clean">
        <van-col style="text-align: center;" span="3">
          <img class="img" src="@/assets/img/清理缓存.png" />
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
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
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
    },
    clean() {
      this.$dialog
        .confirm({
          closeOnClickOverlay: true,
          message: "是否清除缓存"
        })
        .then(() => {
          this.$toast.success({
            message: "清除成功",
            duration: 1000
          });
          setTimeout(() => {
            this.$router.push({ name: "home" });
          }, 1000);
        });
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
    overflow: hidden;
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
  .box {
    border-bottom: 1px solid #d2d2d2;

    .img {
      margin-top: 13px;
      width: 24px;
      height: 24px;
    }
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