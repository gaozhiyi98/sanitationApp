<template>
  <div>
    <Header title="采购详情" back></Header>
    <div class="content">
      <van-cell title-class="title" title="申请人：">
        <van-icon class="text" slot="default">{{ msg[0].applicantperson }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="申请部门：">
        <van-icon class="text" slot="default">{{ msg[0].applicantdepart }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="审批人：">
        <van-icon class="text" slot="default">{{ msg[0].param2 }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="审批状态：">
        <div
          v-if="msg[0].applicantstatus === '已审批'"
          style="color:#4eb14e"
        >{{ msg[0].applicantstatus }}</div>
        <div
          v-else-if="msg[0].applicantstatus === '待审批'"
          style="color: #f66134;"
        >{{ msg[0].applicantstatus }}</div>
        <div v-else style="color: #ffb533;">{{ msg[0].applicantstatus }}</div>
      </van-cell>
      <van-cell title-class="title" title="采购状态：">
        <van-icon slot="default">{{ msg[0].buystatus }}</van-icon>
      </van-cell>
      <van-cell title-class="title" title="备注：">
        <van-icon class="text" style="color: #404141;" slot="default">{{ msg[0].shop }}</van-icon>
      </van-cell>
      <div class="purchase">采购列表：</div>
      <van-collapse v-model="activeNames">
        <van-collapse-item
          v-for="(item, i) in msg"
          :key="i"
          :title="'物料名称：' +item.materielname"
          :name="i"
        >
          <div slot="icon" class="icon"></div>
          <van-cell title="数量" :value="item.materielcount" />
          <van-cell title="单位" :value="item.materielattr" />
          <van-cell title="单位" :value="item.materielonecost" />
          <van-cell title="金额" :value="item.materielmoney" />
        </van-collapse-item>
      </van-collapse>

      <van-row
        v-if="msg[0].applicantstatus === '已审批' && msg[0].buystatus === '待发放'"
        class="footer"
        type="flex"
        justify="space-around"
      >
        <van-col span="24">
          <van-button round class="btn" type="info">物料发放</van-button>
        </van-col>
      </van-row>
      <van-row
        v-else-if="msg[0].applicantstatus === '待审批'"
        class="footer"
        type="flex"
        justify="space-around"
      >
        <van-col span="12">
          <van-button round class="btn" type="danger">驳回申请</van-button>
        </van-col>
        <van-col span="12">
          <van-button round class="btn" type="info">审批通过</van-button>
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
      msg: [{}],
      activeNames: ["0"]
    };
  },
  methods: {
    getDetail() {
      this.$http
        .post("materiel/detail", {
          applicantdate: this.$route.params.sid
        })
        .then(res => {
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
  .purchase {
    padding: 15px;
    font-size: 16px;
  }
  img {
    width: 12px;
    height: 12px;
  }
  .icon {
    width: 10px;
    height: 10px;
    margin-top: 6px;
    margin-right: 5px;
    background-color: #429af0;
    border-radius: 5px;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  .btn {
    height: 29px;
    line-height: 29px;
  }
}
</style>