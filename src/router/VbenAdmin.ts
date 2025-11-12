import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const ROW: RouteRecordRaw = {
  path: "/VbenAdmin",
  meta: {
    title: "Vben Admin 后台管理系统",
    remark: "权限系统、组件、国际化",
    isCardList: true,
    pathName: "VbenAdmins",
    redirect: { name: "CustomIndex" },
  },
  children: [
    {
      path: "",
      name: "VbenAdmins",
      // component: aa,
      component: layout,
      meta: {
        title: "Vben Admin 后台管理系统",
        imgSrc: "",
        remark: "权限系统、组件、国际化",
      },
      redirect: { name: "VbenAdminIndex" },

      children: [
        {
          path: "index",
          name: "VbenAdminIndex",
          component: () => import("@/views/VbenAdmin/index.vue"),
          meta: {
            title: "功能讲解",
            imgSrc: "",
          },
        },
        {
          path: "Page",
          name: "VbenAdminPage",
          component: () => import("@/views/VbenAdmin/Page/index.vue"),
          meta: {
            title: "布局组件之Page 页面 待定",
            imgSrc: "",
          },
        },
        {
          path: "Watermark",
          name: "VbenAdminWatermark",
          component: () => import("@/views/VbenAdmin/Watermark/index.vue"),
          meta: {
            title: "全局水印 + 局部水印",
            imgSrc: "",
          },
        },
      ],
    },
  ],
};

export default ROW;
