<template>
  <div>Name: {{ about.name }}</div>
  <div>Age: {{ about.age }}</div>
  <div>Title: {{ about.title }}</div>
</template>

<script>
export default {
  name: "Person",
  props: ["about"],
};
</script>

<style lang="scss" scoped></style>
