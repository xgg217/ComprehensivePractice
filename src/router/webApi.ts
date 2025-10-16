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
    pathName: "WebApiList",
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
        title: "Web Worker",
        imgSrc: "",
        remark: "Web Worker",
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
        {
          path: "File",
          name: "WebApiWebWorkerFile",
          component: () => import("@/views/WebApi/WebWorker/File.vue"),
          meta: {
            title: "文件分片",
            imgSrc: "",
          },
        },
      ],
    },
  ],
};

export default row;
