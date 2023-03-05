<template>
  <div class="py-5 container text-center">
    <Parent />
  </div>
</template>

<script>
import Parent from "./components/LifeCycleHook.vue";
export default {
  components: {
    Parent,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
