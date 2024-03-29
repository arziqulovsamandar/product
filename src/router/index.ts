import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "../components/layouts/Layout/user.vue";
import LoginPage from "../views/login.vue";
import productsRoutes from "../features/products/router";
import userRoutes from "../features/users/router";

import { layoutMiddleware } from "./middlewares";
import i18n from "../plugins/i18n";
import { LoginName } from "../constans/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...productsRoutes,
    ...userRoutes,
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/login",
      component: UserLayout,
      children: [{ path: "/login", component: LoginPage, name: LoginName.Login }], // Fayl nomi LoginPage sifatida ishlatilgan
    },
  ],
});

router.beforeResolve(async (to) => {
  await layoutMiddleware(to);
  if (typeof to.meta?.title === "string") {
    updateMeta(to.meta?.title);
  }
});

function updateMeta(title: string) {
  if (typeof title === "string") {
    document.title = i18n.global.t(title);
  }
}

export { updateMeta };

export default router;
