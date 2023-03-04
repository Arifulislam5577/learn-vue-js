<template>
  <div>
    <div class="container text-center my-5">
      <div class="w-2/5 mx-auto p-5 rounded border-2 shadow">
        <h1 class="font-bold text-xl">Popup component</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          tempore.
        </p>

        <input type="text" v-model="name" />
        <button
          @click="$emit('closeModal', name)"
          class="bg-blue-600 mt-3 px-6 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: "Popup",
    emits: ["closeModal"],

    data() {
      return {
        name: "",
      };
    },
  },
};
</script>

<style scoped></style>
