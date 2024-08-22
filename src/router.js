import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", // http://localhost:5173/login
    component: () => import("./components/home.vue"),
  },
  //原生flex布局的项目路由
  {
    path: "/projects/projectOne/FlexSystem.vue", // http://localhost:5173/login
    component: () => import("./projects/projectOne/FlexSystem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
