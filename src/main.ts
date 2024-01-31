import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/css/styles.css";
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';



const store = createPinia();

createApp(App).use(router).use(store).use(Toast).mount("#app");
