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
    <van-row type="flex" justify="space-around" class="userlist" v-for="(item, i) in 50" :key="i">
      <van-col span="4">
        <van-icon name="user-o" />
      </van-col>
      <van-col span="7" class="user">商霞</van-col>
      <van-col span="7" class="job">胜园项目部/路长</van-col>
      <van-col span="8">
        <van-icon name="phone-o" class="call" @click="calluser" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Header from "../header/header.vue";
export default {
  components: {
    Header
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
.userlist {
  position: relative;
  top: 50px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ebedf0;
  text-align: center;
  .user {
    font-size: 14px;
  }
  .job {
    font-size: 12px;
  }
  .call {
    padding-left: 60px;
  }
}
</style>