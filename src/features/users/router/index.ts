import Contact from "../pages/Contact.vue";
import About from "../pages/About.vue";

import Home from "../../../components/layouts/Home/Home.vue";
import { User } from "../../../constans/routes";

export default [
  {
    path: "/contact",
    component: Home,
    children: [{ path: "/contact", component: Contact, name: User.Contact }],
  },
  {
    path: "/about",
    component: Home,
    children: [{ path: "/about", component: About, name: User.About }],
  },

];

