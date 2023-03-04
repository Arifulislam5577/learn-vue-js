<template>
  <div class="container text-center my-5">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: String,
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
