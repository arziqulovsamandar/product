import { createRouter, createWebHistory } from "vue-router";

// import all features routes
import productsRoutes from "../features/products/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [...productsRoutes],
});

export default router;
