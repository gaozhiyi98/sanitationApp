<template>
  <div>
    <Header title="违规上传" back text="提交"></Header>
    <div class="content">
      <div class="title">上传图片：</div>
      <van-uploader preview-size="173px" v-model="fileList" :max-count="1" :after-read="afterRead" />
    </div>
    <div class="content">
      <div class="title">违规地点：</div>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入当前位置">
          <van-button slot="button" size="small" plain type="info" @click="getAddress">获取当前位置</van-button>
        </van-field>
      </van-cell-group>
    </div>
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
  </div>
</template>

<script>
import Header from "@/components/header/header";
import getCurrentCityName from "./test";
export default {
  components: {
    Header
  },
  data() {
    return {
      value: "",
      fileList: [],
      location: null
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    getAddress() {
      getCurrentCityName().then(city => {
        console.log(city); //顺利的话能在控制台打印出当前城市
        this.value = city;
      });
    }
  },
  mounted() {}
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