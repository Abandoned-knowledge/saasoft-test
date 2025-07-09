import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import App from "./App.vue";
import "./styles/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
pinia.use(piniaPluginPersistedstate);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");
