import Wishlist from "../pages/Wishlist.vue";
import Home from "../../../components/layouts/Home/Home.vue";
import IndexVue from "../pages/Index.vue";
import cardVue from "../pages/Cart.vue";
import Compare from "../pages/Compare.vue";
import About from "../pages/About.vue";
export default [
  {
    path: "/wishlist",
    component: Home,
    children: [{ path: "/wishlist", component: Wishlist, name: "Wishlist" }], // Fayl nomi LoginPage sifatida ishlatilgan
  },
  {
    path: "/",
    component: Home,
    children: [{ path: "/", component: IndexVue, name: "Index" }], // Fayl nomi LoginPage sifatida ishlatilgan
  },
  {
    path: "/cards",
    component: Home,
    children: [{ path: "/cards", component: cardVue, name: "Card" }], // Fayl nomi LoginPage sifatida ishlatilgan
  },
  {
    path: "/compare",
    component: Home,
    children: [{ path: "/compare", component: Compare, name: "Compare" }], // Fayl nomi LoginPage sifatida ishlatilgan
  },
  {
    path: "/about",
    component: Home,
    children: [{ path: "/about", component: About, name: "About" }], // Fayl nomi LoginPage sifatida ishlatilgan
  },
];
