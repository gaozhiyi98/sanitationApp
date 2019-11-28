<template>
  <div>
    <Header title="采购详情" back></Header>
    <div class="content">
      <van-cell title-class="title" title="申请人：">
        <van-icon class="text" slot="default">{{ msg.applicantperson }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="申请部门：">
        <van-icon class="text" slot="default">{{ msg.applicantdepart }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="物料名称：">
        <van-icon class="text" slot="default">{{ msg.materielname }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="单价：">
        <van-icon class="text" slot="default">{{ msg.materielonecost }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="数量：">
        <van-icon class="text" slot="default">{{ msg.materielcount }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="单位：">
        <van-icon class="text" slot="default">{{ msg.materielattr }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="金额：">
        <van-icon class="text" slot="default">{{ msg.materielmoney }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="审批人：">
        <van-icon class="text" slot="default">{{ msg.param2 }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="审批状态：">
        <van-icon v-if="msg.applicantstatus === '已审批'" class="status1" slot="default">
          <img src="@/assets/img/已审批.png" />
          {{ msg.applicantstatus }}
        </van-icon>
        <van-icon v-else-if="msg.applicantstatus === '待审批'" class="status2" slot="default">
          <img src="@/assets/img/待审批.png" />
          {{ msg.applicantstatus }}
        </van-icon>
        <van-icon v-else class="status3" slot="default">
          <img src="@/assets/img/驳回.png" />
          {{ msg.applicantstatus }}
        </van-icon>
      </van-cell>
      <van-cell title-class="title" title="采购状态：" v-if="msg.buystatus != '----'">
        <van-icon class="blue" slot="default">{{ msg.buystatus }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="备注：">
        <van-icon class="text" slot="default">{{ msg.item }}</van-icon>
      </van-cell>
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
      msg: {}
    };
  },
  methods: {
    getDetail() {
      this.$http
        .post("appMateriel/getMaterielInformation", {
          sid: this.$route.params.sid
        })
        .then(res => {
          console.log(res.data);

          this.msg = res.data;
        });
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
    font-weight: 700;
  }
  .text {
    color: #404141;
  }
  .blue {
    color: #3b99f1;
  }
  .status1 {
    color: #4eb14e;
  }
  .status2 {
    color: #f66134;
  }
  .status3 {
    color: #ffb533;
  }
  img {
    width: 12px;
    height: 12px;
  }
}
</style>