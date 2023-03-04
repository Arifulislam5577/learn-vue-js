<template>
  <div class="container py-5">
    <h3
      v-for="user in users"
      :key="user.id"
      class="text-xl font-bold text-center"
    >
      <slot :firstName="user.firstName" :lastName="user.lastName"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: [
        { id: 1, firstName: "Ariful", lastName: "Islam" },
        { id: 2, firstName: "Shariful", lastName: "Islam" },
        { id: 3, firstName: "Kamrul", lastName: "Islam" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
