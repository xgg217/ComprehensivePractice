import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "/Custom",
  meta: {
    title: "小项目",
    remark: "小项目列表",
    isCardList: true,
    pathName: "CustomList",
  },
  children: [
    {
      path: "",
      name: "CustomList",
      component: () => import("@/views/Custom/list.vue"),
      meta: {
        title: "小项目",
        remark: "小项目列表",
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
  ],
};

export default ROW;
