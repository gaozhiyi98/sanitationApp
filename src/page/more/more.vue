<template>
  <div>
    <div class="bgi"></div>

    <div class="logout">
      <span class="iconfont iconmy_icon_exit1" @click="signOut"></span>
    </div>

    <div class="user">
      <img class="head" src="@/assets/img/默认头像.png" />
      <div class="name">{{ this.usermsg.param3 }}</div>
      <div class="tel">{{ this.usermsg.username }}</div>
    </div>
    <div class="list">
      <van-row class="box">
        <van-col style="text-align: center;" span="3">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmy_icon_about1" />
          </svg>
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="关于平台" is-link to="about" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="box">
        <van-col style="text-align: center;" span="3">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmy_icon_update" />
          </svg>
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="检测更新" is-link to="update" />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="box" @click="clean">
        <van-col style="text-align: center;" span="3">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmy_icon_cache" />
          </svg>
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-cell title="清理缓存" is-link />
          </van-cell-group>
        </van-col>
      </van-row>
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
      this.$dialog
        .confirm({
          closeOnClickOverlay: true,
          message: "您是否确认退出该用户"
        })
        .then(() => {
          localStorage.removeItem("usermsg");
          this.$toast.success({
            message: "退出成功",
            duration: 1000
          });
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 1000);
        })
        .catch(() => {
          // on cancel
        });
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
.bgi {
  position: absolute;
  top: 0;
  width: 100%;
  height: 218px;
  background-image: url("../../assets/image/my_bg.png");
  background-size: cover;
}

.logout {
  position: fixed;
  right: 25px;
  top: 25px;
  color: #fff;
}

.user {
  position: absolute;
  top: 150px;
  padding: 30px 0;
  width: 100%;
  text-align: center;
  .head {
    width: 80px;
    height: 80px;
    border-radius: 10000px;
    overflow: hidden;
  }
  .name {
    font-size: 18px;
    padding: 5px 0;
  }
  .tel {
    font-size: 13px;
    padding: 5px 0;
    color: #666;
  }
}

.list {
  position: absolute;
  top: 330px;
  width: 100%;
  .box {
    border-bottom: 1px solid #d2d2d2;
    .icon {
      margin-top: 10px;
      font-size: 25px;
      margin-left: 15px;
    }
  }
}
</style>