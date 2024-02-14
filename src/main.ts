import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from 'vue-toastification';

import router from "./router";
import "./assets/css/styles.css";
import i18n from "./plugins/i18n";
import 'vue-toastification/dist/index.css';


const store = createPinia();

createApp(App).use(router).use(store).use(i18n).use(Toast).mount("#app");