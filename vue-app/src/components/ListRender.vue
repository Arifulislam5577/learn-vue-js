<template>
  <div class="container">
    <h2>List Rendering</h2>

    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>

    <div
      class="grid grid-cols-3 gap-5 items-center justify-between container mt-5"
    >
      <div v-for="product in products" :key="product.id">
        <h4>{{ product.title }}</h4>
        <p>${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: ["JavaScript", "React", "Vue", "Angular"],
      products: [
        { id: 1, title: "Laptop", price: 200 },
        { id: 2, title: "Mobile", price: 250 },
        { id: 3, title: "Book", price: 100 },
      ],
    };
  },
};
</script>

<style></style>
