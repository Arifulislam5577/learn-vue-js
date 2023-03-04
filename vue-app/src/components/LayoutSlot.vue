<template>
  <header class="bg-white py-5 text-center font-bold">
    <slot name="header"></slot>
  </header>
  <main class="w-1/2 mx-auto my-10">
    <slot></slot>
  </main>

  <footer
    class="bg-slate-700 py-5 w-4/5 mx-auto text-white font-bold text-center"
  >
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
  name: "LayoutSlot",
};
</script>

<style scoped></style>
