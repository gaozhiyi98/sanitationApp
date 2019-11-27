<template>
  <div>
    <Header title="通讯录"></Header>
    <van-search
      class="van-hairline--bottom navsearch"
      v-model="searchmsg"
      placeholder="请输入搜索关键词"
      left-icon
      right-icon="search"
    />
    <div class="content">
      <van-row class="listitem" style v-for="(item, i) in 50" :key="i">
        <van-col span="4" class="icon">
          <img class="img" src="@/assets/img/默认头像.png" alt />
        </van-col>
        <van-col span="12">
          <div class="name">高霞</div>
          <div class="job">胜园项目/部长</div>
        </van-col>
        <van-col span="4" offset="3" class="icon">
          <img class="img" src="@/assets/img/电话.png" alt @click="calluser" />
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
      searchmsg: ""
    };
  },
  methods: {
    calluser() {
      this.$dialog
        .confirm({
          title: "一键呼叫",
          message: "是否呼叫该用户"
        })
        .then(() => {
          window.location.href = "tel://" + 18771569272;
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.navsearch {
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 999;
}

.content {
  margin-top: 105px;
  margin-bottom: 48px;
  .listitem {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #d2d2d2;
    padding: 5px 0;
    .name {
      font-size: 14px;
      color: #323232;
    }
    .job {
      font-size: 12px;
      color: #787878;
    }
    .icon {
      line-height: 45px;
      text-align: center;
    }
    .img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
  }
}
</style>