<template>
  <div>
    <Header title="违规上传" back></Header>
    <div class="content">
      <div class="title">上传图片：</div>
      <van-uploader
        preview-size="100%"
        v-model="fileList"
        capture="camera"
        :max-count="1"
        :after-read="afterRead"
      />
    </div>
    <div class="content">
      <div class="title">违规地点：</div>
      <van-cell-group>
        <van-field v-model="addmsg.param1" placeholder="请输入当前位置">
          <van-button slot="button" size="small" plain type="info" @click="getAddress">获取当前位置</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="content">
      <div class="title">问题备注：</div>
      <van-cell-group>
        <van-field
          class="textarea"
          type="textarea"
          :autosize="{maxHeight: 200, minHeight: 200}"
          v-model="addmsg.param2"
          placeholder="请输入问题备注"
        />
      </van-cell-group>
    </div>

    <div class="footer">
      <van-button type="info" size="large" @click="submitadd">提交</van-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import getCurrentCityName from "./test";
export default {
  components: {
    Header
  },
  data() {
    return {
      addmsg: {
        param1: "",
        param2: "",
        imgfile: ""
      },
      fileList: [],
      location: null,
      submitstatus: true
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.addmsg.imgfile = file.content;
    },
    getAddress() {
      getCurrentCityName().then(city => {
        console.log(city); //顺利的话能在控制台打印出当前城市
        this.addmsg.param1 = city;
      });
    },
    submitadd() {
      if (
        this.addmsg.param1 != "" &&
        this.addmsg.param2 != "" &&
        this.addmsg.imgfile != ""
      ) {
        if (this.submitstatus) {
          this.submitstatus = false;
          this.$http.post("check/uploadImage", this.addmsg).then(res => {
            if (res.status === 1) {
              this.$toast.success({
                message: "上传成功",
                duration: 1000
              });
              setTimeout(() => {
                this.$router.go(-1);
              }, 1000);
            } else {
              this.submitstatus = true;
              this.$toast.fail({
                message: "上传失败",
                duration: 1000
              });
            }
          });
        }
      } else {
        this.$toast.fail({
          message: "请补全违规信息",
          duration: 1000
        });
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  .textarea {
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

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>