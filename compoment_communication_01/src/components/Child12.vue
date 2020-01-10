<template>
  <div>
    <button @click="sendToChild">给childr1发送事件</button>
    <div>
      {{$attrs.msg}}
    </div>
    <!-- $listeners 会被展开 -->
    <H2 v-on="$listeners"></H2>
    <!-- provide/inject 演示 -->
    <div>
      {{commonval}}
    </div>
  </div>
</template>
<script>
export default {
  inject:['commonval'],
  data() {
    return {
      name: "1"
    };
  },
  methods: {
    sendToChild() {
      this.$parent.$emit("event-frome-child2",'some msg from child2');
    }
  }
};
</script>