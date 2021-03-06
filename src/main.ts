import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 路由守卫
import "./router/permission.js";

// 引入字体图标库
import './assets/icons/iconfont.css'
import './assets/icons/iconfont.js'

// 引入qs处理数据
import qs from "qs";
Vue.prototype.$qs = qs

// 引入axios
import Axios from 'axios';
// 请求拦截器
Axios.interceptors.request.use((config) => {
  if (config.method === 'post' && Axios.defaults.headers.post['Content-Type'] === 'multipart/form-data;') {
    return config
  }
  if (config.method === 'post' && Axios.defaults.headers.post['Content-Type'] === 'application/x-www-form-urlencoded') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
Axios.interceptors.response.use(function (res) {
  return res.data
});
Vue.prototype.$http = Axios

// Axios.defaults.baseURL = 'http://192.168.8.126:8080/' // 升龙
// Axios.defaults.baseURL = 'http://192.168.40.1:8888/' // 路路
Axios.defaults.baseURL = 'http://118.31.245.183:10500/'

// 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css'
import { Lazyload } from 'vant'; // 图片懒加载
Vue.use(Vant);
Vue.use(Lazyload);

// 引入百度地图
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'I4aU7iF4urQjQaQCQHVqP4ZtV0NTPERm'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
