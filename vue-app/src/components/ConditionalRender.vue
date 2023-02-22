<template>
  <h1 v-if="isAdmin">Learn Vue</h1>
  <h1 v-else>Learn React</h1>

  <div>
    <p v-if="number === 0">Number is Zero</p>
    <p v-else-if="number > 5">Number is greater then 5</p>
    <p v-else-if="number < 5">Number is smaller then 5</p>
    <p v-else>Not A Number</p>
  </div>

  <template v-if="isAdmin">
    <div :style="customStyle">
      <h1>Conditional Rendering</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis
        praesentium totam nam quae. Est accusamus dicta hic earum ad dolores,
        culpa voluptatum itaque adipisci fugiat impedit tenetur, officia
        necessitatibus!
      </p>
    </div>
  </template>

  <div>
    <h2 v-show="showEl">V SHOW ELEMENT</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: true,
      showEl: true,
      number: "Number",
      customStyle: {
        width: "50%",
        margin: "0 auto",
        padding: "1rem",
      },
    };
  },
};
</script>

<style></style>
