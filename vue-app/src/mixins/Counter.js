export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    Increment() {
      this.count += 1;
    },

    Decrement() {
      this.count -= 1;
    },
  },
};
