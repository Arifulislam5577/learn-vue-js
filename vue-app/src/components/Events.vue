<template>
  <div class="container text-center py-20">
    <h2 class="text-3xl font-bold">Learn Methods</h2>

    <div class="my-5">
      <h2 class="font-bold text-4xl">{{ count }}</h2>
      <div class="flex items-center justify-center gap-5 mt-5">
        <button
          @click="increment(3)"
          class="bg-slate-900 text-white px-3 py-2 rounded"
        >
          Increment
        </button>
        <button
          @click="decrement(3)"
          class="bg-slate-900 text-white px-3 py-2 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(amount) {
      this.count = this.count + amount;
    },
    decrement(amount) {
      this.count = this.count - amount;
    },
  },
};
</script>

<style></style>
