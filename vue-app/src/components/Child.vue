<template>
  <div>
    <h2>Child Component</h2>
    <Nested />
  </div>
</template>

<script>
import Nested from "./Nested.vue";
console.log("===========CHILD COMPONENT RENDER==============");
export default {
  name: "Child",
  components: { Nested },

  beforeCreate() {
    console.log("C Before Created");
  },

  created() {
    console.log("C Created");
  },

  beforeMount() {
    console.log("C Before Mount");
  },
  mounted() {
    console.log("C Mounted");
  },

  beforeUpdate() {
    console.log("C Before Update");
  },
  updated() {
    console.log("C Updated");
  },

  beforeUnmount() {
    console.log("C Before Unmount");
  },
  unmounted() {
    console.log("C Unmounted");
  },
};
</script>

<style scoped></style>
