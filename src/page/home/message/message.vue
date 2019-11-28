<template>
  <div>
    <Header title="我的消息" back></Header>
    <div class="content">
      <van-row class="box" v-for="item in list" :key="item.sid" @click="goDetail(item.sid)">
        <van-col style="text-align: center" span="4">
          <img v-if="item.type === '系统消息'" src="@/assets/img/消息.png" />
          <img v-else src="@/assets/img/通知.png" />
        </van-col>
        <van-col span="20">
          <van-cell-group>
            <van-cell
              label-class="label"
              :title="item.type"
              :value="item.time"
              :label="item.message | ellipsis"
            />
          </van-cell-group>
        </van-col>
      </van-row>
    </div>
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
      list: []
    };
  },
  methods: {
    getList() {
      const name = "张三";
      // const name = JSON.parse(localStorage.getItem("usermsg")).param2;
      this.$http.post("appAdvice/getAppAdviceList", { name }).then(res => {
        this.list = res.data;
      });
    },
    goDetail(id) {
      this.$router.push({ name: "messageDetail", params: { id } });
    }
  },
  created() {
    this.getList();
  },
  filters: {
    ellipsis(value) {
      let len = value.length;
      if (!value) return "";
      if (value.length > 13) {
        return value.substring(0, 13) + "...";
      }
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .box {
    border-bottom: 1px solid #d2d2d2;
    img {
      margin-top: 18px;
      width: 26px;
      height: 26px;
    }
  }
}
</style>