<template>
  <!--新增面板-->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" placeholder="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Gender</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" v-model="gender" value="男" name="gender">男
        <input type="radio" v-model="gender" value="女" name="gender">女
      </div>
      <button type="submit" @click.prevent="add" class="btn btn-success">Submit</button>
    </form>
  </div>

</template>

<script>
  //引入axios
  // import axios from 'axios'

  export default {
    data: function () {
      return {
        url: `/heros`, //请求路径
        //将表单中的name和gender进行双向数据绑定
        name: '',
        gender: ''

      }
    },
    methods: {
      //为添加按钮绑定点击事件
      add() {
        this.$http.post(this.url, {name: this.name, gender: this.gender}).then(result => {
          //this.$router 路由对象
          this.$router.push('/herolist');//跳转回herolist
        })
      }
    }
  }

</script>

<style>

</style>
