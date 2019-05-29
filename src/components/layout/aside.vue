<template>
  <!--侧边栏位置-->
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!--创建路由链接-->
      <li class="active">
        <router-link to="/herolist">英雄管理</router-link>
      </li>
      <li>
        <router-link to="/foo">武器管理</router-link>
      </li>
      <li>
        <router-link to="/bar">装备管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style>

</style>
