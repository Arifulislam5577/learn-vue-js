<template>
  <LayoutSlot>
    <template v-slot:header>
      <h2>Header</h2>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/1200/400" alt="" class="mx-auto mb-5" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        reprehenderit, laudantium itaque unde similique delectus fugit cumque
        laborum molestias voluptatum sit eum. Odio saepe doloribus fugit quam
        nihil dolor reprehenderit?
      </p>
    </template>
    <template v-slot:footer>
      <h2>Footer</h2>
    </template>
  </LayoutSlot>
</template>

<script>
import LayoutSlot from "./components/LayoutSlot.vue";
export default {
  components: {
    LayoutSlot,
  },
};
</script>

<style scoped></style>
