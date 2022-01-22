const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Samsung",
      age: 45,
    };
  },
  methods: {
    changeTitle(title) {
      //   this.title = "Words of Radiance";
      this.title = title;
    },
  },
});

app.mount("#app");
