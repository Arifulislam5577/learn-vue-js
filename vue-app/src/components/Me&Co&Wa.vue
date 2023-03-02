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
        class="mt-5 border bg-white p-5 rounded"
      >
        <h1>{{ product.title }}</h1>
        <h1>${{ product.price }}</h1>
      </div>

      <hr />

      <div class="mt-10 w-44 text-center">
        <h1 class="text-2xl font-bold">{{ count }}</h1>
        <button @click="count++" class="bg-blue-600 p-3 text-white rounded m-3">
          Decrement
        </button>
        <button @click="count--" class="bg-blue-600 p-3 text-white rounded m-3">
          Increment
        </button>
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

      count: 0,
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
  watch: {
    count(newValue, oldValue) {
      if (newValue === 10) {
        this.count = 100;
      }

      if (oldValue === 105) {
        this.count = 9;
      }
    },
  },
};
</script>

<style></style>
