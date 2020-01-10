<template>
  <div>
    <div>
      你好我是头部
      <slot name="header"></slot>
    </div>
    <div>
      你好我是身体
      <slot name="content"></slot>
    </div>
    <div>
      你好我是底部
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>