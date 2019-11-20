<template>
  <!-- 巡检平台 -->
  <div>
    <Header title="巡检平台" :back="true"></Header>
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      style="height:190px;border-bottom: 5px solid #ccc;"
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="scrolltitle">违规照片</div>
    <vueSeamlessScroll :data="images" :class-option="defaultOption" class="seamless-warp">
      <ul class="item">
        <li v-for="(item, index) in images" :key="index">
          <img :src="item" alt srcset />
          <div>标题内容</div>
        </li>
      </ul>
    </vueSeamlessScroll>
    <button class="addbtn" @click="showViolation">
      <van-icon name="photograph" />
      <div>拍照上传</div>
    </button>

    <!-- 违规上传弹出层 -->
    <el-dialog :visible.sync="violation.show" width="90%">
      <van-uploader :after-read="onRead" style="left: 50%;transform: translateX(-50%);" />
      <van-field v-model="violation.didian" label="违规地点" placeholder="请输入违规地点" />
      <van-field v-model="violation.xiangqing" label="问题详情" placeholder="请输入问题详情" />
      <van-row type="flex" justify="space-around" style="text-align: center;margin-top:20px;">
        <van-col span="12">
          <van-button round plain style="width:120px" type="info">取消</van-button>
        </van-col>
        <van-col span="12">
          <van-button round style="width:120px" type="info">提交</van-button>
        </van-col>
      </van-row>
    </el-dialog>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import Header from "../../header/header.vue";
export default {
  components: {
    vueSeamlessScroll,
    Header
  },
  data() {
    return {
      images: [],
      // 违规上传
      violation: {
        show: false
      }
    };
  },
  methods: {
    getSwipe() {
      this.$http.get("check/picture").then(res => {
        this.images = res.data;
      });
    },
    showViolation() {
      console.log(this.violation.show);

      this.violation.show = !this.violation.show;
    },
    onRead(file) {
      console.log(file);
      this.violation.imgfile = file.content;
      this.$http.post("check/viewImage", this.violation).then(res => {
        console.log(res);
      });
    },
    submitmsg() {
      console.log(this.data);
      this.$http.post("check/uploadImage", this.data).then(res => {
        console.log(res);
      });
    }
  },
  computed: {
    // 公告滚动自定义
    defaultOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 3, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  created() {
    this.getSwipe();
  }
};
</script>

<style lang="scss" scoped>
.seamless-warp {
  overflow: hidden;
  width: 100%;
  padding-top: 5px;
  .item {
    display: flex;
    height: 210px;
    width: 100%;
    li {
      height: 100%;
      img {
        display: flex;
        width: 240px;
        height: 90%;
        margin-right: 15px;
      }
    }
  }
}

.scrolltitle {
  height: 37px;
  line-height: 37px;
  padding-left: 10px;
  border-bottom: 2px solid #ccc;
}

.addbtn {
  position: fixed;
  right: 27px;
  bottom: 27px;
  width: 70px;
  height: 70px;
  background-color: #ff931b;
  border: 2px solid #fff;
  border-radius: 50px;
  i {
    color: #fff;
  }
  div {
    font-size: 12px;
    color: #fff;
  }
}

.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 41px;
    line-height: 41px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>