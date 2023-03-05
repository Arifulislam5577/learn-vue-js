<template>
  <div class="container py-5">
    <teleport to="#newApp">
      <Portal />
    </teleport>
  </div>
</template>

<script>
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import Portal from "./components/Portal.vue";
export default {
  components: {
    TabA,
    TabB,
    Portal,
  },

  data() {
    return {
      activeTab: "TabA",
    };
  },
};
</script>

<style lang="scss" scoped></style>
