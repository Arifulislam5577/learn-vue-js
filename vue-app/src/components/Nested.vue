<template>
  <div>
    <h2>Nested Component</h2>
  </div>
</template>

<script>
console.log("===========NESTED COMPONENT RENDER==============");
export default {
  name: "Nested",

  beforeCreate() {
    console.log("NESTED Before Created");
  },

  created() {
    console.log("NESTED Created");
  },

  beforeMount() {
    console.log("NESTED Before Mount");
  },
  mounted() {
    console.log("NESTED Mounted");
  },

  beforeUpdate() {
    console.log("NESTED Before Update");
  },
  updated() {
    console.log("NESTED Updated");
  },

  beforeUnmount() {
    console.log("NESTED Before Unmount");
  },
  unmounted() {
    console.log("NESTED Unmounted");
  },
};
</script>

<style scoped></style>
