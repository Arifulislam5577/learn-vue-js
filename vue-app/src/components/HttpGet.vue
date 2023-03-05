<template>
  <div class="container py-5 text-center">
    <!-- <button @click="loadPost" class="px-10 py-3 bg-slate-900 text-white">
      <span v-if="loading">Loading...</span>
      <span v-else>Load Post</span>
    </button> -->
    <h2 v-if="loading" class="text-center text-xl font-bold my-5">
      Loading...
    </h2>
    <div
      v-if="posts.length"
      class="grid mt-5 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between"
    >
      <Product v-for="product in posts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "./Product.vue";
export default {
  name: "HttpGet",
  components: { Product },
  data() {
    return {
      loading: false,
      posts: [],
    };
  },

  created() {
    this.loadPost();
  },

  methods: {
    async loadPost() {
      try {
        this.loading = true;
        const { data } = await axios("https://fakestoreapi.com/products");
        this.loading = false;
        this.posts = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
