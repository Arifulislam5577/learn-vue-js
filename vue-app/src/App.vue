<template>
  <section class="product-container py-5">
    <div class="container">
      <h2>
        Total -
        {{ handleAddProduct() }}
      </h2>

      <h2>Computed Total - {{ totalPrice }}</h2>

      <button class="px-5 py-2 text-white bg-blue-700 mt-4">Add Product</button>

      <input type="text" v-model="name" />

      <div
        v-for="product in filterdProduct"
        :key="product.id"
        class="mt-5 border bg-white"
      >
        <h1>{{ product.title }}</h1>
        <h1>${{ product.price }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, price: 300, title: "Product 1" },
        { id: 2, price: 100, title: "Product 2" },
        { id: 3, price: 400, title: "Product 3" },
        { id: 4, price: 200, title: "Product 4" },
      ],

      name: "",
    };
  },
  methods: {
    handleAddProduct() {
      return this.products.reduce((total, current) => total + current.price, 0);
    },
  },
  computed: {
    totalPrice() {
      return this.products.reduce((total, current) => total + current.price, 0);
    },

    filterdProduct() {
      return this.products.filter((pd) => pd.price > 200);
    },
  },
};
</script>

<style></style>
