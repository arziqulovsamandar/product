import { createRouter, createWebHistory } from "vue-router";

// import all features routes
import productsRoutes from "../features/products/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...productsRoutes,
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login.vue')
    }
  ]
});

export default router;
