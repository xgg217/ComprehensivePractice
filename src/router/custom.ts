import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const ROW: RouteRecordRaw = {
  path: "/Custom",
  meta: {
    title: "小项目",
    remark: "小项目列表",
    isCardList: true,
    pathName: "Customs",
    redirect: { name: "CustomIndex" },
  },
  children: [
    {
      path: "",
      name: "Customs",
      // component: aa,
      component: layout,
      meta: {
        title: "小项目列表",
        imgSrc: "",
        remark: "初始页",
      },
      redirect: { name: "CustomIndex" },

      children: [
        {
          path: "index",
          name: "CustomIndex",
          component: () => import("@/views/Custom/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "DutyStatistics",
          name: "CustomDutyStatistics",
          component: () => import("@/views/Custom/DutyStatistics/index.vue"),
          meta: {
            title: "上班统计",
            remark: "统计每个月上班时间",
          },
        },
        {
          path: "ScanTheCode",
          name: "CustomScanTheCode",
          component: () => import("@/views/Custom/ScanTheCode/index.vue"),
          meta: {
            title: "仿微信扫一扫",
            imgSrc: "ScanTheCode/ScanTheCode.png",
          },
        },
        {
          path: "index2",
          name: "CustomIndex2",
          component: () => import("@/views/Custom/index2/index.vue"),
          meta: {
            title: "点击外部关闭弹出框",
            imgSrc: "",
          },
        },
      ],
    },
  ],
};

export default ROW;
