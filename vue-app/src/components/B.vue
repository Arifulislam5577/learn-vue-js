<template>
  <div class="container text-center my-5">
    <h1>Component B</h1>
    <C />
  </div>
</template>

<script>
import C from "./C.vue";
export default {
  name: "B",
  components: {
    C,
  },
};
</script>

<style scoped></style>
