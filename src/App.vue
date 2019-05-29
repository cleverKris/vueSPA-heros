<template>
  <div id="app">
    <!--顶部导航栏-->
    <topHead></topHead>
    <!--侧边栏和内容-->
    <div class="container-fluid">
      <div class="row">
        <!--侧边栏位置-->
        <Aside></Aside>


        <!--右侧内容区域-->
        <!--<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">-->
        <!--创建渲染容器-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  //引入布局组件
  //子组件
  import topHead from './components/layout/topHead'
  import Aside from './components/layout/aside'

  export default {
    //创建私有组件
    components: {
      topHead: topHead, //组件是一个对象
      Aside: Aside
    }
  }
</script>

<style>

</style>
