import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入qs处理数据
import qs from "qs";
Vue.prototype.$qs = qs

// 引入axios
import Axios from 'axios';
// 请求拦截器
Axios.interceptors.request.use((config) => {
  console.log(config);
  if (config.method === 'post' && Axios.defaults.headers.post['Content-Type'] === 'multipart/form-data;') {
    return config
  }
  if (config.method === 'post' && Axios.defaults.headers.post['Content-Type'] === 'application/x-www-form-urlencoded') {
    config.data = qs.stringify(config.data)
  }
  // else {
  //   config.data = JSON.stringify(config.data)
  // }
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
Axios.defaults.baseURL = 'http://118.31.245.183:10500/'

// 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css'
import { Lazyload } from 'vant'; // 图片懒加载
Vue.use(Vant);
Vue.use(Lazyload);

// 引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
