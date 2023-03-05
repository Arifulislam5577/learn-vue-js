<template>
  <div class="mx-auto w-3/5 container py-10">
    <h2 class="text-4xl font-bold text-center">{{ count }}</h2>

    <div class="my-3 flex gap-5 items-center justify-center">
      <button
        @click="Increment"
        class="text-sm px-6 py-3 rounded text-white bg-slate-900"
      >
        Increment
      </button>
      <button
        @click="Decrement"
        class="text-sm px-6 py-3 rounded text-white bg-slate-900"
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<script>
import CounterMixin from "../mixins/Counter";
export default {
  name: "Counter",
  mixins: [CounterMixin],
};
</script>

<style lang="scss" scoped></style>
