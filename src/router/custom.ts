import type { RouteRecordRaw } from "vue-router";

const list: RouteRecordRaw[] = [
  {
    path: "/CustomList",
    name: "CustomList",
    component: () => import("@/views/Custom/list.vue"),
    meta: {
      title: "小项目",
      remark: "小项目列表",
      isCardList: true,
    },
    // redirect: "/animejs/index",
  },
  {
    path: "/CustomListDutyStatistics",
    name: "CustomListDutyStatistics",
    component: () => import("@/views/Custom/DutyStatistics/index.vue"),
    meta: {
      title: "上班统计",
    },
  },
];

export default list;
