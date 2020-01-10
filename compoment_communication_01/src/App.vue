<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Child1 msg="Welcome to Your Vue.js App" @some-event="onSomeEvent" />
    <Child12 msg="Welcome to Your Vue.js App" />
    <button @click="goHome">回家吃饭</button>
    <button @click="onClick">封装的子组件执行父组件的方法</button>
    <br>
    <index />
  </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child12 from "./components/Child12.vue";
import index from "./template/index.vue";

export default {
  name: "app",
  components: {
    Child1,
    Child12,
    index
  },
  provide() {
    return {
      commonval: "provide",
    };
  },
  methods: {
    onSomeEvent(msg) {
      console.log(msg, "container");
    },
    goHome() {
      console.log("父亲：回家吃饭啦");
      this.$children[0].eat();
    },
    //高级封装组件
    onClick() {
      console.log("来自父亲的回调函数处理", this);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
