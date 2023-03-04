<template>
  <div class="container text-center my-5">
    <button
      @click="showModal = true"
      class="bg-violet-600 text-white px-6 py-2"
    >
      Open Modal
    </button>
    <Popup v-show="showModal" @closeModal="closePopup" />
  </div>
</template>

<script>
import Popup from "./components/ComponentEvent.vue";
export default {
  components: {
    Popup,
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    closePopup(name) {
      this.showModal = false;
      console.log(`Name IS `, name);
    },
  },
};