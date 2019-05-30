<template>
  <!--英雄列表-->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <!--创建添加的路由链接-->
    <router-link class="btn btn-success" to="/heroAdd">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in herosList">
            <!--如果会报错的话 还需要加一个属性 :key="index"-->
            <td>{{ items.id }}</td>
            <td>{{ items.name }}</td>
            <td>{{ items.gender }}</td>
            <td>
              <!--创建编辑的路由链接-->
              <!--编辑应该使用动态路由的形式: '/heroEdit/' + id(变量)-->
              <router-link :to="'/heroEdit/' + items.id">edit</router-link>
              <a href="#" @click="del(items.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  //引入axios
  // import axios from 'axios'


  export default {
    data: function () {
      return {
        url: '/heros', //请求的路径
        herosList: [] //英雄数据
      };
    },
    methods: {
      //1.获取所有英雄数据
      getHeroData() {
        this.$http.get(this.url).then(result => {
          this.herosList = result.data;
        })
      },
      //2.完成删除功能
      del(id) {
        if (confirm('您确定要删除吗')) {
          this.$http.delete(`${this.url}/${id}`).then(result => {
            //重新渲染英雄数据
            this.getHeroData();
          })
        }
      }
    },
    created() { //最早能访问data和methods的阶段
      this.getHeroData();//调用方法 获取所有英雄数据
    }
  }
</script>

<style>

</style>
