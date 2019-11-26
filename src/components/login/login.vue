<template>
  <div>
    <div class="header">
      <div>欢迎登陆</div>
      <div>智慧环卫综合管理平台</div>
    </div>
    <div class="content">
      <van-cell-group>
        <van-field type="tel" maxlength="11" v-model="usermsg.username" placeholder="请输入手机号">
          <span slot="left-icon" class="iconfont iconshoujihao"></span>
        </van-field>
        <van-field v-model="usermsg.code" center clearable left-icon placeholder="请输入短信验证码">
          <span slot="left-icon" class="iconfont iconyanzhengma
"></span>
          <van-button
            slot="button"
            size="small"
            type="primary"
            v-if="codeBtn"
            @click="getCode"
          >发送验证码</van-button>
          <van-button slot="button" size="small" disabled type="primary" v-else>{{ this.codeMit }}秒</van-button>
        </van-field>
      </van-cell-group>
      <div class="login">
        <van-button type="info" @click="login">登录</van-button>
      </div>
    </div>
    <div class="footer">
      <span class="iconfont iconyouchenghuanweigongsi"></span>东营区油城环卫有限公司
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usermsg: {
        username: "",
        code: ""
      },
      codeBtn: true,
      codeMit: 60
    };
  },
  methods: {
    getCode() {
      if (this.usermsg.username.length === 11) {
        this.$http.post("login/getLogonCode", this.usermsg).then(res => {
          console.log(res);
          if (res.status === 1) {
            this.$toast.success("验证码发送成功");
            this.codeMit = 60;
            this.codeBtn = false;
            clearInterval(interval);
            let interval = setInterval(() => {
              if (this.codeMit <= 1) {
                this.codeBtn = true;
                clearInterval(interval);
              } else if (this.codeMit > 1) {
                this.codeMit--;
              }
            }, 1000);
          } else if (res.status === 0) {
            this.$toast.fail("请核对用户名");
          }
        });
      } else {
        this.$toast.fail("请输入正确的手机号");
      }
    },
    login() {
      this.$http.post("login.do", this.usermsg).then(res => {
        console.log(res.data);
        if (res.status === 1) {
          this.$toast.success({
            message: "登陆成功",
            duration: 1000
          });
          localStorage.setItem("usermsg", JSON.stringify(res.data));
          setTimeout(() => {
            this.$router.push({ name: "home" });
          }, 1000);
        } else {
          this.$toast.fail("验证码输入错误");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 40px;
  font-size: 28px;
  color: #5190fe;
}

.content {
  padding: 0 28px;
  .login {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    button {
      width: 100%;
      border-radius: 30px;
    }
  }
}

.footer {
  position: fixed;
  bottom: 10px;
  width: 100%;
  font-size: 15px;
  text-align: center;
}
</style>