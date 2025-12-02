import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const ROW: RouteRecordRaw = {
  path: "/vue3",
  meta: {
    title: "vue3 + Vben Admin 后台管理系统",
    remark: "权限系统、组件、国际化",
    isCardList: true,
    pathName: "vue3",
    redirect: { name: "CustomIndex" },
  },
  children: [
    {
      path: "",
      name: "vue3",
      // component: aa,
      component: layout,
      meta: {
        title: "vue3 + Vben Admin 后台管理系统",
        imgSrc: "",
        remark: "权限系统、组件、国际化",
      },
      redirect: { name: "Vue3Index" },

      children: [
        {
          path: "index",
          name: "Vue3Index",
          component: () => import("@/views/Vue3/index.vue"),
          meta: {
            title: "功能讲解",
            imgSrc: "",
          },
        },
        {
          path: "Page",
          name: "Vue3Page",
          component: () => import("@/views/Vue3/Page/index.vue"),
          meta: {
            title: "布局组件之Page 页面 待定",
            imgSrc: "",
          },
        },
        {
          path: "Watermark",
          name: "Vue3Watermark",
          component: () => import("@/views/Vue3/Watermark/index.vue"),
          meta: {
            title: "全局水印 + 局部水印",
            imgSrc: "",
          },
        },
        {
          path: "FullScreen",
          name: "Vue3FullScreen",
          component: () => import("@/views/Vue3/FullScreen/index.vue"),
          meta: {
            title: "全屏",
            imgSrc: "",
          },
        },
        {
          path: "FileDownload",
          name: "Vue3FileDownload",
          component: () => import("@/views/Vue3/FileDownload/index.vue"),
          meta: {
            title: "文件下载",
            imgSrc: "",
          },
        },
      ],
    },
  ],
};

export default ROW;
