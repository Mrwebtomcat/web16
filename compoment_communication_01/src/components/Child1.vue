<template>
  <div>child1</div>
</template>
<script>
export default {
  data() {
    return {
      name: "1"
    };
  },
  mounted() {
    this.$parent.$on("event-frome-child2", msg => {
      console.log(msg, 2, 2);
    });
  },
  methods: {
    eat() {
      console.log("孩子：我这就回来");
    }
  }
};
</script>