import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const row: RouteRecordRaw = {
  path: "/DesignPatternsAndAlgorithms",
  name: "DesignPatternsAndAlgorithms",
  meta: {
    title: "设计模式与算法",
    remark: "设计模式、算法、数据结构",
    isCardList: true,
    pathName: "DesignPatternsAndAlgorithmsList",
  },
  children: [
    {
      path: "",
      name: "DesignPatternsAndAlgorithmsList",
      component: () => import("@/views/DesignPatternsAndAlgorithms/list.vue"),
      meta: {
        title: "设计模式与算法",
        remark: "设计模式与算法",
      },
    },

    // #region 设计模式
    {
      path: "DesignPattern",
      name: "DesignPattern",
      // component: aa,
      component: layout,
      meta: {
        title: "设计模式",
        imgSrc: "",
        remark: "设计模式",
      },
      redirect: { name: "DesignPatternIndex" },

      children: [
        {
          path: "index",
          name: "DesignPatternIndex",
          component: () =>
            import(
              "@/views/DesignPatternsAndAlgorithms/DesignPattern/index.vue"
            ),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "PublishSubscribe",
          name: "PublishSubscribe",
          component: () =>
            import(
              "@/views/DesignPatternsAndAlgorithms/DesignPattern/PublishSubscribe/index.vue"
            ),
          meta: {
            title: "发布订阅模式",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion
  ],
};

export default row;
