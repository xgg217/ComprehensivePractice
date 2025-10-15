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

    {
      path: "Canvas",
      name: "WebApiCanvas",
      // component: aa,
      component: layout,
      meta: {
        title: "Canvas",
        imgSrc: "",
        remark: "画布",
      },
      redirect: { name: "WebApiWebCanvasIndex" },

      children: [
        {
          path: "index",
          name: "WebApiCanvasIndex",
          component: () => import("@/views/WebApi/Canvas/index.vue"),
          meta: {
            title: "画布 画笔",
            imgSrc: "",
          },
        },
        {
          path: "index2",
          name: "WebApiCanvasIndex2",
          component: () => import("@/views/WebApi/Canvas/index2.vue"),
          meta: {
            title: "画布 创建方式",
            imgSrc: "",
          },
        },
        {
          path: "index3",
          name: "WebApiCanvasIndex3",
          component: () => import("@/views/WebApi/Canvas/index3.vue"),
          meta: {
            title: "画布 创建方式",
            imgSrc: "",
          },
        },
        {
          path: "Rect",
          name: "WebApiCanvasRect",
          component: () => import("@/views/WebApi/Canvas/Rect.vue"),
          meta: {
            title: "矩形",
            imgSrc: "",
          },
        },
        {
          path: "BeginPath",
          name: "WebApiCanvasBeginPath",
          component: () => import("@/views/WebApi/Canvas/BeginPath.vue"),
          meta: {
            title: "路径分组BeginPath",
            imgSrc: "",
          },
        },
      ],
    },
  ],
};

export default row;
