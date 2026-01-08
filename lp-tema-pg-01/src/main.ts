import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.mount("#app");

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 100,
});
