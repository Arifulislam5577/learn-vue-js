<template>
  <div class="py-5">
    <h2 class="text-xl font-bold text-center">Learn HTTP</h2>
    <HttpGet />
  </div>
</template>

<script>
import HttpGet from "./components/HttpGet.vue";
export default {
  components: {
    HttpGet,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
