<template>
  <!--编辑面板-->
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" v-model="heroObj.name" class="form-control" placeholder="name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Gender</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" v-model="heroObj.gender" value="男" name="gender">男
        <input type="radio" v-model="heroObj.gender" value="女" name="gender">女
      </div>
      <button type="submit" @click.prevent="edit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  //引入axios
  import axios from 'axios'

  export default {
    data: function () {
      return {
        url: 'http://localhost:3003/heros',
        id: '', //要修改数据的id
        heroObj: {} //需要修改的英雄的信息

      }
    },
    methods: {
      //根据id 获取当前需要修改的英雄的数据
      getEditHero() {
        axios.get(`${this.url}/${this.id}`).then(result => {
          this.heroObj = result.data;
        })
      },
      //为修改按钮注册点击事件  put
      edit() {
        axios.put(`${this.url}/${this.id}`, {name: this.heroObj.name, gender: this.heroObj.gender}).then(result => {
          //跳转到/herolist路由
          this.$router.push('/herolist');
        })
      }
    },
    mounted() {
      //1.打开页面时接收参数 编辑按钮传递过来的参数 id,并保存到data中
      this.id = this.$route.params.id;

      //2.并且根据id获取数据
      this.getEditHero();

    }
  }
</script>

<style>

</style>
