<template>
  <div>
    <h2>Parent Component</h2>

    <button @click="isShow = !isShow">Toggle</button>
    <Child v-if="isShow" />
  </div>
</template>

<script>
import Child from "./Child.vue";
console.log("===========PARENT COMPONENT RENDER==============");
export default {
  name: "Parent",
  components: {
    Child,
  },

  data() {
    return {
      isShow: true,
    };
  },

  beforeCreate() {
    console.log("Before Created");
  },

  created() {
    console.log("Created");
  },

  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },

  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },

  beforeUnmount() {
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
};
</script>

<style scoped></style>
