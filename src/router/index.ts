import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "../components/layouts/User.vue";
import Loginpage from "../views/login.vue";
// import all features routes
import productsRoutes from "../features/products/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...productsRoutes,
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/login",
      component: UserLayout,
      children: [{ path: "/login", component: Loginpage, name: "USER" }],
    },
  ],
});

export default router;
