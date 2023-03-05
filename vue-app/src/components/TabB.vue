<template>
  <div class="py-5">
    <h2>TAB B CONTENT</h2>
    <p class="text-sm text-green-600 my-3">{{ title }}</p>
    <input type="text" v-model="title" />
  </div>
</template>

<script>
export default {
  name: "TabB",

  data() {
    return {
      title: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
