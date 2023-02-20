const app = Vue.createApp({
  data() {
    return {
      title: "Learn Vue Js",
      mySelf: {
        name: "Ariful Islam",
        position: "Mern Stack Developer",
        portfolio: "https://arif-profile.web.app",
      },
      methods: {
        title: "Learn Method Calling",
        subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        getTimes() {
          return this.subtitle;
        },
      },

      counterEvent: {
        title: "Learn Event",
        count: 0,
        increment(amount) {
          this.count = this.count + amount;
        },
        decrement(amount) {
          this.count = this.count - amount;
        },
      },

      eventMod: {
        title: "Event Modify",
        inputValue: "",
        handleEvent(e) {
          this.inputValue = e.target.value;
        },
      },
    };
  },
});

app.mount("#app");
