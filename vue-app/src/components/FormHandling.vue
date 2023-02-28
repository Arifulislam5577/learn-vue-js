<template>
  <section class="product-container py-5">
    <div class="container">
      <div class="my-5 text-center">
        {{ JSON.stringify(formValues, null, 2) }}
      </div>
      <form @submit.prevent="handleSubmit" class="w-1/3 mx-auto">
        <div class="mb-4">
          <label for="name" class="block text-sm mb-2">Name</label>
          <input
            type="text"
            class="block w-full py-2 px-4 focus:outline-none"
            v-model.trim.lazy="formValues.name"
          />
        </div>
        <div class="mb-4">
          <label for="about" class="block text-sm mb-2">About</label>
          <textarea
            id="about"
            class="w-full focus:outline-none p-3"
            rows="5"
            v-model.trim.lazy="formValues.about"
          ></textarea>
        </div>
        <div class="mb-4">
          <h2>Skills</h2>
          <input
            name="skills"
            v-model="formValues.skills"
            type="radio"
            value="html"
            id="html"
          />
          <label for="html">Html</label>
          <input
            name="skills"
            v-model="formValues.skills"
            type="radio"
            value="css"
            id="css"
          />
          <label for="css">Css</label>
          <input
            name="skills"
            v-model="formValues.skills"
            type="radio"
            value="js"
            id="js"
          />
          <label for="js">JavaScript</label>
        </div>

        <button type="submit" class="w-full py-2 bg-blue-700 text-white">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        about: "",
        skills: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formValues);
    },
  },
};
</script>

<style></style>
