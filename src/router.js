import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store/index.js";

Vue.use(VueRouter);

const page = (path) => () => import(`@pages/${path}`);

const routes = [
  {
    path: "/",
    name: "learn-todo",
    component: page("LearnTodo"),
  },
  {
    path: "/index",
    name: "todo",
    component: page("Todo"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
