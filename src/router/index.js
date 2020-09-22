import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hosting from "../views/Hosting.vue";
import Plans from "../views/Plans";
import Form from "../views/Form";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hosting",
    name: "Hosting",
    component: Hosting
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans
  },
  {
    path: "/form",
    name: "Form",
    component: Form
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
