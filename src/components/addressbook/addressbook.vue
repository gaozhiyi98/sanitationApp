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
    <div style="margin-top:105px;margin-bottom:48px">
      <van-row class="listitem" style v-for="(item, i) in 50" :key="i">
        <van-col span="4" class="icon">
          <van-icon name="user-o" />
        </van-col>
        <van-col span="12">
          <div style="font-size:14px;color:#323232">高霞</div>
          <div style="font-size:12px;color:#787878">胜园项目/部长</div>
        </van-col>
        <van-col span="4" offset="3" class="icon">
          <van-icon name="phone-circle-o" @click="calluser" />
        </van-col>
      </van-row>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../header/header.vue";
import Footer from "../footer/footer.vue";
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
.listitem {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #d2d2d2;
  padding: 5px 0;
  .icon {
    text-align: center;
    line-height: 45px;
  }
}

// .userlist {
//   position: relative;
//   top: 50px;
//   height: 40px;
//   line-height: 40px;
//   border-bottom: 1px solid #ebedf0;
//   text-align: center;
//   .user {
//     font-size: 14px;
//   }
//   .job {
//     font-size: 12px;
//   }
//   .call {
//     padding-left: 60px;
//   }
// }
</style>