<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="displayNone">
      <li :id="id">React</li>
      <li :id="id">Vue</li>
      <li :id="id">Angular</li>
    </ul>
    <p :class="textType ? 'primary' : 'danger'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <p :class="['largeText', 'danger']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <p :class="['largeText', textType ? 'primary' : 'danger']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <p
      :class="{
        danger: textType,
      }"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <p
      :style="{
        color: primaryColor,
      }"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>

    <p :style="customStyle">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
    <button>Click Me</button>
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
      primaryColor: "orange",

      customStyle: {
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
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
