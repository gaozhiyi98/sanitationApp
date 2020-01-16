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
        <van-field v-model="addmsg.addr" placeholder="请输入当前位置">
          <van-button slot="button" size="small" plain type="info" @click="getAddress">获取当前位置</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="content">
      <div class="title">项目部：</div>
      <van-field v-model="addmsg.param2" placeholder="请选择项目部" @focus="showDepartPicker"></van-field>
    </div>
    <div class="content">
      <div class="title">处罚分值：</div>
      <van-field v-model="addmsg.score" placeholder="请选择处罚分值" @focus="showScorePicker"></van-field>
    </div>
    <div class="content">
      <div class="title">问题详情：</div>
      <van-cell-group>
        <van-field
          class="textarea"
          type="textarea"
          :autosize="{maxHeight: 200, minHeight: 200}"
          v-model="addmsg.detail"
          placeholder="请输入问题详情"
        />
      </van-cell-group>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        title="项目部选择"
        :columns="departList"
        @confirm="onChange"
        @cancel="showDepartPicker"
      />
    </van-popup>

    <van-popup v-model="showSPicker" position="bottom">
      <van-picker
        show-toolbar
        title="处罚分值选择"
        :columns="[0.5, 2, 3, 5, 10, 20]"
        @confirm="onScoreChange"
        @cancel="showScorePicker"
      />
    </van-popup>

    <div class="footer" v-show="hideshow">
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
        addr: "",
        detail: "",
        pic1path: "",
        param2: "",
        score: ""
      },
      fileList: [],
      location: null,
      submitstatus: true,
      msg: "",
      showPicker: false,
      showSPicker: false,
      departList: [],
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      hideshow: true //显示或者隐藏footer
    };
  },
  methods: {
    // 获取部门列表
    getdepartList() {
      this.$http.post("hr/sourcedepart/dropDepart").then(res => {
        // console.log(res);
        this.departList = res.data;
      });
    },
    showDepartPicker() {
      this.showPicker = !this.showPicker;
    },
    onChange(picker, value, index) {
      this.addmsg.param2 = picker;
      this.showDepartPicker();
    },
    showScorePicker() {
      this.showSPicker = !this.showSPicker;
    },
    onScoreChange(picker, value, index) {
      this.addmsg.score = picker;
      this.showScorePicker();
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.addmsg.pic1path = file.content;
    },
    getAddress() {
      getCurrentCityName().then(city => {
        console.log(city); //顺利的话能在控制台打印出当前城市
        this.addmsg.addr = city;
      });
    },
    submitadd() {
      if (
        this.addmsg.addr != "" &&
        this.addmsg.detail != "" &&
        this.addmsg.pic1path != ""
      ) {
        if (this.submitstatus) {
          this.submitstatus = false;
          this.$http.post("check/uploadImage", this.addmsg).then(res => {
            this.msg = res;
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
  mounted() {
    this.getdepartList();
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })();
    };
  },
  //监听
  watch: {
    showHeight: function() {
      if (this.docmHeight > this.showHeight) {
        this.hideshow = false;
      } else {
        this.hideshow = true;
      }
    }
  }
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