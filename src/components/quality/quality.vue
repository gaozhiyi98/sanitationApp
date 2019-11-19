<template>
  <div>
    <div>安全报警：</div>
    <van-row type="flex" justify="space-around" class="userlist" v-for="(item, i) in 50" :key="i">
      <van-col span="2">
        <van-icon name="user-o" />
      </van-col>
      <van-col span="14" class="user">商霞:4K投影仪/1个/300单价/300总价</van-col>
      <van-col span="10">
        <van-button class="btn" type="info" style="margin-right:5px;">详情</van-button>
        <van-button class="btn" type="info">处理</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.userlist {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ebedf0;
  text-align: center;
  .user {
    font-size: 12px;
  }
  .btn {
    width: 48px;
    height: 22px;
    font-size: 14px;
    line-height: 14px;
    padding: 0;
    box-shadow: 0px 8px 4px #ccc;
  }
}
</style>