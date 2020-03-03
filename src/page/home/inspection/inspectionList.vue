<template>
  <div>
    <Header title="问题列表" back></Header>

    <div class="bigbox">
      <van-cell
        v-for="(item, i) in problemList"
        :key="i"
        :title="'问题' + item"
        is-link
        @click="goAdd(item)"
      />
      <button class="add" @click="add">
        <van-icon name="plus" />
      </button>
    </div>

    <van-button type="info" size="large" class="btn" @click="submit">问题提交</van-button>
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
      problemList: [],
      problemNum: 0
    };
  },
  methods: {
    goAdd(problemNumber) {
      this.$router.push({
        name: "inspectionAdd",
        params: { problemNumber: problemNumber }
      });
    },
    add() {
      this.problemNum++;
      this.problemList.push(this.problemNum);
      localStorage.setItem("problemList", JSON.stringify(this.problemList));
    },
    submit() {
      this.$http
        .post("appSafeQuality/add", {
          maxNum: this.problemNum
        })
        .then(res => {
          if (res.status === 1) {
            this.$toast.success({
              message: "上传成功",
              duration: 1000
            });
            setTimeout(() => {
              this.$router.go(-1);
            }, 1000);
            localStorage.removeItem("problemList");
          } else {
            this.submitstatus = true;
            this.$toast.fail({
              message: "上传失败",
              duration: 1000
            });
          }
        });
    }
  },
  created() {
    if (localStorage.getItem("problemList")) {
      this.problemList = JSON.parse(localStorage.getItem("problemList"));
      this.problemNum = this.problemList[this.problemList.length - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
.bigbox {
  margin-bottom: 53px;
}

.add {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  width: 55px;
  height: 30px;
  line-height: 35px;
  font-size: 20px;
  border-radius: 8px;
  color: #fff;
  border: none;
  background-color: rgba(66, 154, 240, 1);
}

.btn {
  position: fixed;
  bottom: 0;
}
</style>