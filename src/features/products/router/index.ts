import Wishlist from "../pages/Wishlist.vue";
import Home from "../../../components/layouts/Home.vue";
import IndexVue from "../pages/Index.vue";

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
];
