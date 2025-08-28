import type { RouteRecordRaw } from "vue-router";

const list: RouteRecordRaw = {
  path: "/vue3",
  name: "Vue3",
  component: () => import("@/views/Vue3/index.vue"),
  meta: {
    title: "vue3综合练习",
    remark: "vue3综合练习",
  },
  // redirect: "/animejs/index",
};

export default list;
