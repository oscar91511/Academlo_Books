import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// import { VueQueryPlugin } from "@tanstack/vue-query"

const pinia = createPinia();

const app = createApp(App);

app.use(pinia)
app.use(router);

app.mount("#app");
