//引入vue
import Vue from 'vue'
//引入router
import router from './router/router'
//统一引入axios
import axios from 'axios'
//如果要让vue实例可以使用axios 必须将axios添加到vue的实例中
Vue.prototype.$http = axios;//约定俗成 vue-resource

//统一设置axios的请求路径
axios.defaults.baseURL = 'http://localhost:3003/';

//引入App
import App from './App.vue'

//引入bootstrap
import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css'
//引入index.css
import './assets/css/index.css'


new Vue({
  el: '#app',
  //挂载路由
  router: router,
  render: h => h(App)
});
