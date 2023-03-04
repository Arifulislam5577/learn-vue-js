<template>
  <div class="container text-center my-5">
    <h1>Root</h1>
    <A />
  </div>
</template>

<script>
import A from "./components/A.vue";
export default {
  components: {
    A,
  },

  data() {
    return {
      name: "Arif",
    };
  },

  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped></style>
