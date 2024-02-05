import {DefaultLayout} from '../../../constans/layout/index.ts';

export default [
  {
    path:'/about',
    name:"About",
    component: () => import("../pages/About.vue"),
    meta:{
      layout:DefaultLayout.user,
      title:"About"
    }
  },
  {
    path:"/contact",
    name:"Contact",
    component: () => import("../pages/Contact.vue"),
    meta:{
      layout:DefaultLayout.user,
      title:"Contact"
    }
  }
];
