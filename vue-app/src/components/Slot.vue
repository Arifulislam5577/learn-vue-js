<template>
  <div class="container py-5">
    <User>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
        {{ slotProps.lastName }}
      </template>
    </User>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  components: {
    User,
  },
};
</script>

<style scoped></style>
