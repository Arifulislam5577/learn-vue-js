<template>
  <div class="container py-5 text-center">
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
export default {
  name: "TempRef",
  mounted() {
    this.$refs.inputRef.focus();
  },
};
</script>

<style lang="scss" scoped></style>
