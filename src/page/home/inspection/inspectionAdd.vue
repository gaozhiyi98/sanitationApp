<template>
  <div>
    <Header title="违规上传" back text="提交" @clickRight="submitadd"></Header>
    <div class="content">
      <div class="title">上传图片：</div>
      <van-uploader
        preview-size="173px"
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
    // getCity() {
    //   let _this = this;
    //   var geolocation = new BMap.Geolocation();
    //   var geolocation = new BMap.Geolocation();
    //   geolocation.getCurrentPosition(function(r) {
    //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
    //       var mk = new BMap.Marker(r.point);
    //       map.addOverlay(mk);
    //       map.panTo(r.point);
    //       let test = r.point.lng + "," + r.point.lat;
    //       this.value = test;
    //       // alert("您的位置：" + r.point.lng + "," + r.point.lat);
    //       console.log(r.point.lng + "," + r.point.lat);
    //     } else {
    //       switch (this.getStatus()) {
    //         case 2:
    //           alert("位置结果未知 获取位置失败.");
    //           break;
    //         case 3:
    //           alert("导航结果未知 获取位置失败..");
    //           break;
    //         case 4:
    //           alert("非法密钥 获取位置失败.");
    //           break;
    //         case 5:
    //           alert("对不起,非法请求位置  获取位置失败.");
    //           break;
    //         case 6:
    //           alert("对不起,当前 没有权限 获取位置失败.");
    //           break;
    //         case 7:
    //           alert("对不起,服务不可用 获取位置失败.");
    //           break;
    //         case 8:
    //           alert("对不起,请求超时 获取位置失败.");
    //           break;
    //       }
    //     }
    //   });
    // }
  },
  mounted() {
    // this.getCity();
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  border-bottom: 1px solid #d2d2d2;
  .textarea {
    border: 1px solid #d2d2d2;
    border-radius: 5px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
}
</style>