import Vue from "vue";
import VueRouter from "vue-router";
import All from "../views/All.vue";
import Hosting from "../views/Hosting.vue";
import Plans from "../views/Plans";
import Form from "../views/Form";
import Packages from "../views/Packages";
import Services from "../views/Services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Plans",
    component: Plans
  },
  {
    path: "/all",
    name: "All",
    component: All
  },
  {
    path: "/hosting",
    name: "Hosting",
    component: Hosting
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/packages",
    name: "Packages",
    component: Packages
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
