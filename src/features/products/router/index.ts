import Wishlist from "../pages/Wishlist.vue";
import Home from "../../../components/layouts/Home/Home.vue";
import IndexVue from "../pages/Index.vue";
import cardVue from "../pages/Cart.vue";
import Compare from "../pages/Compare.vue";
import About from "../pages/About.vue";
import Login from "../../../views/login.vue";
import Contact from "../pages/Contact.vue";
import SingleProduct from "../pages/SingleProduct.vue";
import { HomeName } from "../../../constans/routes";
import { checkAuthentication } from '../../../services/LoginService.ts';


const routes = [
  {
    path: "/wishlist",
    component: Home,
    children: [{ path: "/wishlist", component: Wishlist, name: HomeName.Wishlist }],
  },
  {
    path: "/",
    component: Home,
    children: [{ path: "/", component: IndexVue, name: HomeName.Index }],
  },
  {
    path: "/cards",
    component: Home,
    children: [{ path: "/cards", component: cardVue, name: HomeName.Card }],
    meta: { requiresAuth: true }
  },
  {
    path: "/compare",
    component: Home,
    children: [{ path: "/compare", component: Compare, name: HomeName.Compare }],
  },
  {
    path: "/about",
    component: Home,
    children: [{ path: "/about", component: About, name: HomeName.About }],
  },
  {
    path: "/contact",
    component: Home,
    children: [{ path: "/contact", component: Contact, name: HomeName.Contact }],
  },
  {
  path: "/product/:id",
  component: Home,
  children: [{ path: "/product/:id", component: SingleProduct, name: HomeName.SingleProduct }]
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  }
];

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const isAuthenticated = checkAuthentication();
//     if (!isAuthenticated) {
//       next({ name: "login", query: { redirect: to.fullPath } });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default routes;
