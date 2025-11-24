import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import vue3 from "./vue3";
import npmUtils from "./npmUtils";
import custom from "./custom";
import webApi from "./webApi";
import VbenAdmin from "./VbenAdmin";
import DesignPatternsAndAlgorithms from "./DesignPatternsAndAlgorithms";
import { ElLoading } from "element-plus";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    // web api
    webApi,

    // vue3 综合练习
    vue3,

    // 第三方插件
    npmUtils,

    // 小项目
    custom,

    // 设计模式 算法 数据结构
    DesignPatternsAndAlgorithms,

    // VbenAdmin
    VbenAdmin,

    {
      path: "/404",
      component: () => import("@/views/404.vue"),
      meta: {
        title: "404",
      },
    },
  ],
});

const getTarget = () => {
  return document.querySelector("#app > main > aside") as HTMLElement | null;
};

let loadingInstance: typeof ElLoading.service;

router.beforeEach((to, from, next) => {
  const target = getTarget();
  if (target) {
    // @ts-ignore
    loadingInstance = ElLoading.service({
      target: target!,
    });
    console.log(loadingInstance);
  } else {
    // @ts-ignore
    loadingInstance = null;
  }

  next(); // 调用该方法代表放行
});

router.afterEach((to, from, next) => {
  if (loadingInstance) {
    // @ts-ignore
    loadingInstance.close();
  }
});

export default router;
