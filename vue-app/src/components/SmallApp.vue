<template>
  <Header />
  <div class="container py-5">
    <div
      class="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between"
    >
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { products } from "./data/data";
import Product from "./components/Product.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Product,
    Header,
  },
  data() {
    return {
      products: products,
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
