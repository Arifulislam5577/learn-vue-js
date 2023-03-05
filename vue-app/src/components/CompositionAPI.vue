<template>
  <div>
    <h2>Learn {{ topic }}</h2>

    <div>
      <h2>{{ firstName }} {{ lastName }} is a {{ position }}</h2>
    </div>

    <div class="my-5 flex flex-col items-center">
      <h2 class="text-3xl text-center font-bold mb-5">{{ count }}</h2>

      <div class="flex gap-5">
        <button @click="Increment" class="px-5 py-2 bg-slate-900 text-white">
          Increment
        </button>
        <button @click="decrement" class="px-5 py-2 bg-slate-900 text-white">
          Decrement
        </button>
      </div>
    </div>

    <div class="my-5">
      <h2>Full Name : {{ fullName }}</h2>
      <form>
        <div class="mb-4">
          <label for="">First Name</label>
          <input type="text" v-model="firstName" />
        </div>

        <div class="mb-4">
          <label for="">Last Name</label>
          <input type="text" v-model="lastName" />
        </div>
      </form>
    </div>

    <div class="my-5">
      <h2>Full Name : {{ refullName }}</h2>
      <form>
        <div class="mb-4">
          <label for="">First Name</label>
          <input type="text" v-model="refirstName" />
        </div>

        <div class="mb-4">
          <label for="">Last Name</label>
          <input type="text" v-model="relastName" />
        </div>
      </form>
    </div>
    <div class="my-5">
      <h2>Watcher</h2>
      <form>
        <div class="mb-4">
          <label for="">First Name</label>
          <input type="text" v-model="fName" />
        </div>

        <div class="mb-4">
          <label for="">Last Name</label>
          <input type="text" v-model="lName" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from "vue";
export default {
  name: "CompositionAPI",
  setup() {
    const topic = ref("Composition API");
    const count = ref(0);
    const firstName = ref("");
    const lastName = ref("");
    const fName = ref("");
    const lName = ref("");

    const fullName = computed(function () {
      return `${firstName.value} ${lastName.value}`;
    });

    const state = reactive({
      firstName: "Ariful",
      lastName: "Islam",
      position: "Full Stack Web Developer",
    });

    const refullName = computed(function () {
      return `${reState.refirstName} ${reState.relastName}`;
    });

    const reState = reactive({
      refirstName: "",
      relastName: "",
    });

    function Increment() {
      this.count += 1;
    }

    function decrement() {
      this.count -= 1;
    }

    setTimeout(() => {
      state.firstName = "Shariful";
    }, 2000);

    watch([fName, lName], (newValues, oldValues) => {
      console.log("First Name New Value", newValues[0]);
      console.log("First Name Old Value", oldValues[0]);
      console.log("Last Name New Value", newValues[1]);
      console.log("Last Name Old Value", oldValues[1]);
    });

    return {
      topic,
      count,
      Increment,
      decrement,
      ...toRefs(state),
      ...toRefs(reState),
      refullName,
      firstName,
      lastName,
      fName,
      lName,
      fullName,
    };
  },
};
</script>

<style scoped></style>
