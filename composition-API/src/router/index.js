import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/counter",
    name: "counter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CounterView.vue"),
  },
  {
    path: "/counter2",
    name: "counter2",
    component: () => import("../views/CounterView2.vue"),
  },
  {
    path: "/reactive-view",
    name: "reactive-view",
    component: () => import("../views/ReactiveView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
