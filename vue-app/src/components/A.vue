<template>
  <div class="container text-center my-5">
    <h1>Component A</h1>
    <B />
  </div>
</template>

<script>
import B from "./B.vue";
export default {
  name: "A",

  components: {
    B,
  },
};
</script>

<style scoped></style>
