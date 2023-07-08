import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query"

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60, //* time storage for cache / tiempo de almacenamiento cache
      },
    },
  },
});

app.mount("#app");
