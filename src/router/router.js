// ** 仅负责设置路由 **

//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//使用
Vue.use(VueRouter);

//** 引入路由对应的组件 **
import herolist from '../components/herolist';
import foo from '../components/foo';
import bar from '../components/bar';
import heroAdd from '../components/heroAdd';
import heroEdit from '../components/heroEdit';


//设置路由选项
let routes = [
  {path: '/herolist', component: herolist},
  {path: '/foo', component: foo},
  {path: '/bar', component: bar},
  {path: '/heroAdd', component: heroAdd},  //添加英雄
  //注意: 设置动态路由 要加 /:id
  {path: '/heroEdit/:id', component: heroEdit},  //修改英雄
];

//创建路由实例
let router = new VueRouter({
  routes: routes
});

//使用ES6模块导出规范
export default router
