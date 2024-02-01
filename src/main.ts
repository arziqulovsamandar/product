import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/css/styles.css";
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import i18n from "./plugins/i18n";


const store = createPinia();

createApp(App).use(router).use(store).use(i18n).use(Toast).mount("#app");
