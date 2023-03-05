<template>
  <div class="container py-5">
    <div class="w-1/2 mx-auto">
      <div class="flex items-center gap-5 mt-5">
        <button
          @click="activeTab = 'TabA'"
          class="px-6 py-2 bg-slate-900 text-white text-sm"
        >
          Tab A
        </button>
        <button
          @click="activeTab = 'TabB'"
          class="px-6 py-2 bg-slate-900 text-white text-sm"
        >
          Tab B
        </button>
      </div>
      <keep-alive>
        <component :is="activeTab" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
export default {
  components: {
    TabA,
    TabB,
  },

  data() {
    return {
      activeTab: "TabA",
    };
  },
};
</script>

<style lang="scss" scoped></style>
