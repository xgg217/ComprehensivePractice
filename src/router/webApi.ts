import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";
// import aa from "@/views/ThreeJS/Examples/aa.vue";

const row: RouteRecordRaw = {
  path: "/WebApi",
  name: "WebApi",
  meta: {
    title: "web Api",
    remark: "第web Api 学习",
    isCardList: true,
    pathName: "NpmUtilsList",
  },
  children: [
    {
      path: "",
      name: "WebApiList",
      component: () => import("@/views/WebApi/list.vue"),
      meta: {
        title: "web Api",
        remark: "web Api 学习",
      },
    },
    {
      path: "WebWorker",
      name: "WebApiWebWorker",
      // component: aa,
      component: layout,
      meta: {
        title: "WebWorker",
        imgSrc: "",
        remark: "WebWorker",
      },
      redirect: { name: "WebApiWebWorkerIndex" },

      children: [
        {
          path: "index",
          name: "WebApiWebWorkerIndex",
          component: () => import("@/views/WebApi/WebWorker/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
      ],
    },
  ],
};

export default row;
