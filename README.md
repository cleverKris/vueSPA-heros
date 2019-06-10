# hero

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 后端api接口使用的是json-server，请使用3003的端口，在heros/server的目录下打开CMD，输入指令：
json-server --watch db.json --port 3003
```

## Update

``` bash
# 补充：
  1. 优化了axios：
    1.1 在各个组件中，无需分别引入axios，在Vue构造函数的原型中添加一个$http(在vue-resource的方法名)方法，可以在每个组件(Vue实例化出来的对象)进行访问
    1.2 统一设置axios请求路径

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
