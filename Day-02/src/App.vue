<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="displayNone">
      <li v-bind:id="id">React</li>
      <li v-bind:id="id">Vue</li>
      <li v-bind:id="id">Angular</li>
    </ul>
    <p v-bind:class="textType ? 'primary' : 'danger'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <p v-bind:class="['largeText', 'danger']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <p v-bind:class="['largeText', textType ? 'primary' : 'danger']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <p
      v-bind:class="{
        danger: textType,
      }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <button @click="methods.changeColor()">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Learn Vue",
      disabled: true,
      id: 12,
      textType: true,
      methods: {
        changeColor() {
          this.textType = !this.textType;
        },
      },
    };
  },
};
</script>

<style scoped>
.primary {
  color: white;
}
.danger {
  color: red;
}
.largeText {
  font-size: 1.4rem;
}

.displayNone {
  display: none;
}
</style>
