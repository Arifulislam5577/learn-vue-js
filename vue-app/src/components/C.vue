<template>
  <div class="container text-center my-5">
    <h1>Component C</h1>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: "C",
  inject: ["userName"],
};
</script>

<style scoped></style>
