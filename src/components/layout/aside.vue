<template>
  <!--侧边栏位置-->
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!--创建路由链接-->
      <!--<li class="active">-->
      <!--<router-link to="/herolist">英雄管理</router-link>-->
      <!--</li>-->
      <!--<li>-->
      <!--<router-link to="/foo">武器管理</router-link>-->
      <!--</li>-->
      <!--<li>-->
      <!--<router-link to="/bar">装备管理</router-link>-->
      <!--</li>-->
      <router-link tag="li" to="/herolist" active-class="router-link-active active">
        <a href="#">英雄管理</a>
      </router-link>
      <router-link tag="li" to="/foo" active-class="router-link-active active">
        <a href="#">武器管理</a>
      </router-link>
      <router-link tag="li" to="/bar" active-class="router-link-active active">
        <a href="#">装备管理</a>
      </router-link>
    </ul>
  </div>
</template>

<script>

</script>

<style>

</style>
