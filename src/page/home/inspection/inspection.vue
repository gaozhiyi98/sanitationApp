<template>
  <!-- 巡检平台 -->
  <div>
    <Header title="巡检平台" back></Header>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="scrolltitle">违规照片</div>

    <!-- 图片列表 -->
    <ul class="item">
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.pictureurl" @click="showimgPreview(item.pictureurl)" />
        <div class="van-ellipsis">{{ item.param3 }}</div>
        <div class="van-ellipsis">{{ item.param1 }}</div>
      </li>
    </ul>

    <div class="footertext">没有更多内容了</div>

    <van-popup class="popup" v-model="showpopup">
      <img :src="previewsrc"/>
    </van-popup>

    <!-- 上传按钮 -->
    <button class="addbtn" @click="goAdd">
      <van-icon name="photograph" />
      <div>拍照上传</div>
    </button>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      images: [],
      list: [],
      showpopup: false,
      previewsrc: ""
    };
  },
  methods: {
    getSwipe() {
      this.$http.get("check/picture").then(res => {
        this.images = res.data;
      });
    },
    getList() {
      this.$http.get("check/getPictureUrl").then(res => {
        this.list = res.data;
      });
    },
    submitmsg() {
      console.log(this.data);
      this.$http.post("check/uploadImage", this.data).then(res => {
        console.log(res);
      });
    },
    goAdd() {
      this.$router.push({ name: "inspectionAdd" });
    },
    showimgPreview(src) {
      this.previewsrc = src;
      this.showpopup = !this.showpopup;
    }
  },
  computed: {},
  created() {
    this.getSwipe();
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
.swipe {
  height: 225px;
  img {
    width: 100%;
    height: 100%;
  }
  border-bottom: 5px solid #ccc;
}

.item {
  width: 100%;
  overflow: hidden;
  li {
    box-sizing: border-box;
    float: left;
    width: 170px;
    border: 1px solid #d2d2d2;
    margin: 5px;
    padding: 5px;
    img {
      display: flex;
      width: 100%;
    }
  }
}

.scrolltitle {
  height: 37px;
  line-height: 37px;
  font-size: 14px;
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

.footertext {
  text-align: center;
  margin: 10px 0;
  color: #b4b4b4;
}

.popup {
  img {
    width: 326px;
    height: 303px;
  }
}
</style>