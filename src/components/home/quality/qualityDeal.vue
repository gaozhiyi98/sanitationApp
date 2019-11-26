<template>
  <div>
    <Header title="质量安全处理" back text="提交"></Header>
    <div class="content">
      <div class="title">处理备注：</div>
      <van-cell-group>
        <van-field
          class="textarea"
          type="textarea"
          :autosize="{maxHeight: 200, minHeight: 200}"
          v-model="value"
          placeholder="请输入处理备注"
        />
      </van-cell-group>
    </div>
    <div class="content">
      <div class="title">上传图片：</div>
      <van-uploader preview-size="345px" v-model="fileList" :max-count="1" :after-read="afterRead" />
    </div>
  </div>
</template>

<script>
import Header from "../../header/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      value: "",
      fileList: []
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
  border-bottom: 1px solid #d2d2d2;
  .textarea {
    border: 1px solid #d2d2d2;
    border-radius: 5px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
}
</style>