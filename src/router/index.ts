import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import vue3 from "./vue3";
import threejs from "./threejs";
import npmUtils from "./npmUtils";
import custom from "./custom";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    // vue3 综合练习
    vue3,

    // threejs
    ...threejs,

    // 第三方插件
    ...npmUtils,

    // 小项目
    ...custom,

    {
      path: "/404",
      component: () => import("@/views/404.vue"),
      meta: {
        title: "404",
      },
    },
  ],
});

export default router;
