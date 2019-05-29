//引入vue
import Vue from 'vue'
//引入router
import router from './router/router'
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
