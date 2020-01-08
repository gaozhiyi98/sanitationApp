<template>
  <div>
    <Header title="质量安全处理" back></Header>
    <div class="content">
      <div class="title">处理备注：</div>
      <van-cell-group>
        <van-field
          class="textarea"
          type="textarea"
          :autosize="{maxHeight: 200, minHeight: 200}"
          v-model="msg.param1"
          placeholder="请输入处理备注"
        />
      </van-cell-group>
    </div>
    <div class="content">
      <div class="title">上传图片：</div>
      <van-uploader preview-size="100%" v-model="fileList" :max-count="1" :after-read="afterRead" />
    </div>

    <van-button class="btn" type="info" size="large" @click="submit">提交</van-button>
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
      msg: {
        sid: 1,
        param1: "",
        imgfile: ""
      },
      fileList: []
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.msg.imgfile = file.content;
    },
    submit() {
      if (this.msg.param1 != "" && this.msg.imgfile != "") {
        this.$http
          .post("appSafeQuality/uploadProblemPicture", this.msg)
          .then(res => {
            if (res.status === 1) {
              this.$toast.success({
                message: "处理成功",
                duration: 1000
              });
              setTimeout(() => {
                this.$router.go(-1);
              }, 1000);
            }
          });
      } else {
        this.$toast.fail("请补全处理信息");
      }
    }
  },
  created() {
    this.msg.sid = this.$route.params.sid;
    console.log(this.$route.params);
    
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  .textarea {
    width: 335px;
    height: 188px;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .van-uploader {
    width: 335px;
    height: 188px;
  }
}

.btn {
  position: fixed;
  bottom: 0;
}
</style>