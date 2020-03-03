<template>
  <div>
    <Header title="违规上传" back></Header>
    <div class="bigbox">
      <div class="content">
        <div class="title">上传图片：</div>
        <van-uploader
          preview-size="105"
          v-model="fileList"
          :max-count="9"
          multiple
          :after-read="afterRead"
        />
      </div>
      <div class="content">
        <div class="title">违规地点：</div>
        <van-cell-group>
          <van-field v-model="addmsg.address" placeholder="请输入当前位置">
            <van-button slot="button" size="small" plain type="info" @click="getAddress">获取当前位置</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <div class="content">
        <div class="title">项目部：</div>
        <van-field v-model="addmsg.area" placeholder="请选择项目部" @focus="showDepartPicker"></van-field>
      </div>
      <div class="content">
        <div class="title">处罚分值：</div>
        <van-field v-model="addmsg.param2" placeholder="请选择处罚分值" @focus="showScorePicker"></van-field>
      </div>
      <div class="content">
        <div class="title">问题详情：</div>
        <van-cell-group>
          <van-field
            class="textarea"
            type="textarea"
            :autosize="{maxHeight: 200, minHeight: 200}"
            v-model="addmsg.problemdesc"
            placeholder="请输入问题详情"
          />
        </van-cell-group>
      </div>
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
        address: "",
        problemdesc: "",
        area: "",
        param2: "",
        questionNo: ""
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
        this.departList = res.data;
      });
    },
    showDepartPicker() {
      this.showPicker = !this.showPicker;
    },
    onChange(picker, value, index) {
      this.addmsg.area = picker;
      this.showDepartPicker();
    },
    showScorePicker() {
      this.showSPicker = !this.showSPicker;
    },
    onScoreChange(picker, value, index) {
      this.addmsg.param2 = picker;
      this.showScorePicker();
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let obj = {
        questionNo: this.$route.params.problemNumber,
        imgfile: file.content
      };
      this.$http.post("appSafeQuality/handleImgs", obj).then(res => {
        console.log(res);
      });
    },
    getAddress() {
      this.$http.get("xy/getPos").then(res => {
        this.addmsg.address = res.data;
      });
    },
    submitadd() {
      if (
        this.addmsg.address != "" &&
        this.addmsg.problemdesc != "" &&
        this.addmsg.pic1path != ""
      ) {
        if (this.submitstatus) {
          this.submitstatus = false;
          this.addmsg.questionNo = this.$route.params.problemNumber;
          this.$http.post("appSafeQuality/preAdd", this.addmsg).then(res => {
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
    },
    getMsg() {
      this.$http
        .post("appSafeQuality/preGet", {
          questionNo: this.$route.params.problemNumber
        })
        .then(res => {
          if (res.status != 0) {
            this.addmsg.area = res.data.area;
            this.addmsg.problemdesc = res.data.problemdesc;
            this.addmsg.address = res.data.address;
            this.fileList = res.data.picture1s;
            this.addmsg.param2 = res.data.param2;
          }
        });
    }
  },
  mounted() {
    this.getdepartList();
    this.getMsg();
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
.bigbox {
  margin-bottom: 52px;
}

.content {
  padding: 15px;
  .textarea {
    border-radius: 5px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .problem {
    height: 30px;
  }
  .btn {
    display: block;
    margin: 0 auto;
    color: #fff;
    font-size: 20px;
    width: 55px;
    height: 28px;
    line-height: 35px;
    background-color: #429af0ff;
    border: none;
    border-radius: 8px;
  }
}

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>