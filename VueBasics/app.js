const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Samsung",
      age: 45,
      showBooks: true,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, data) {
      console.log(event.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});

app.mount("#app");
