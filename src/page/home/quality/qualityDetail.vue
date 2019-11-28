<template>
  <div>
    <Header title="质量安全详情" back></Header>
    <div class="content">
      <van-cell title-class="title" title="时间：">
        <van-icon class="text" slot="default">{{ detail.time }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="姓名：">
        <van-icon class="text" slot="default">{{ detail.charge }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="岗位：">
        <van-icon class="text" slot="default">{{ detail.job }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="问题详情：">
        <van-icon class="text" slot="default">{{ detail.problemdesc }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="发生地点：">
        <van-icon class="text" slot="default">{{ detail.address }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="反馈人：">
        <van-icon class="text" slot="default">{{ detail.feedbackpeople }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="处理结果：">
        <van-icon v-if="detail.result === '已处理'" class="green" slot="default">{{ detail.result }}</van-icon>
        <van-icon v-else class="red" slot="default">{{ detail.result }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="处理备注：" v-if="detail.param1 != '-'">
        <van-icon class="text" slot="default">{{ detail.param1 }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="问题照片：">
        <van-icon slot="default">
          <img :src="detail.picture1" @click="showimgPreview(detail.picture1)" />
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="处理照片：" v-if="detail.picture2 != '-'">
        <van-icon slot="default">
          <img :src="detail.picture2" @click="showimgPreview(detail.picture2)" />
        </van-icon>
      </van-cell>
    </div>

    <van-popup class="popup" v-model="showpopup">
      <img :src="previewsrc" />
    </van-popup>
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
      detail: {},
      showpopup: false,
      previewsrc: ""
    };
  },
  methods: {
    getDetail() {
      console.log(this.$route.params.sid);
      this.$http
        .post("appSafeQuality/getQualityInformationBySid", {
          sid: this.$route.params.sid
        })
        .then(res => {
          this.detail = res.data;
        });
    },
    showimgPreview(src) {
      this.previewsrc = src;
      this.showpopup = !this.showpopup;
    }
  },
  created() {
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
.content {
  .title {
    font-weight: 600;
  }
  .text {
    color: #000;
    font-size: 14px;
  }
  .green {
    color: #4eb14e;
  }
  .red {
    color: #fb0007;
  }
  img {
    width: 70px;
    height: 45px;
  }
}

.popup {
  img {
    width: 326px;
    height: 303px;
  }
}
</style>